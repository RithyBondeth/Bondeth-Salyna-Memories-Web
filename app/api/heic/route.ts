import { NextRequest, NextResponse } from "next/server";
import { execSync } from "child_process";
import crypto from "crypto";
import path from "path";
import fs from "fs";
import os from "os";

const CACHE_DIR = path.join(os.tmpdir(), "heic-cache");

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const assetPath = searchParams.get("path");

  if (!assetPath) {
    return new NextResponse("Missing path", { status: 400 });
  }

  // Block directory traversal — only serve files from /assets/
  const safePath = path.normalize(assetPath).replace(/^(\.\.[/\\])+/, "");
  if (!safePath.startsWith("/assets/")) {
    return new NextResponse("Forbidden", { status: 403 });
  }
  if (!/\.(heic|heif)$/i.test(safePath)) {
    return new NextResponse("Unsupported format", { status: 415 });
  }

  const filePath = path.join(process.cwd(), "public", safePath);
  if (!fs.existsSync(filePath)) {
    return new NextResponse("Not found", { status: 404 });
  }

  try {
    // Cache converted JPEGs in /tmp/heic-cache/ — keyed by path + mtime
    if (!fs.existsSync(CACHE_DIR)) {
      fs.mkdirSync(CACHE_DIR, { recursive: true });
    }

    const mtime = fs.statSync(filePath).mtimeMs.toString();
    const hash = crypto.createHash("md5").update(filePath + mtime).digest("hex");
    const cachedPath = path.join(CACHE_DIR, `${hash}.jpg`);

    if (!fs.existsSync(cachedPath)) {
      // sips is macOS built-in — converts HEIC → JPEG natively
      execSync(
        `sips -s format jpeg "${filePath}" --out "${cachedPath}"`,
        { stdio: "pipe" },
      );
    }

    const jpeg = fs.readFileSync(cachedPath);

    return new NextResponse(new Uint8Array(jpeg), {
      headers: {
        "Content-Type": "image/jpeg",
        // Cache for 1 year since the file is static
        "Cache-Control": "public, max-age=31536000, immutable",
      },
    });
  } catch (err) {
    console.error("[heic] conversion failed:", err);
    return new NextResponse("Failed to convert image", { status: 500 });
  }
}
