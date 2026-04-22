/**
 * AssetImage — drop-in replacement for next/image.
 *
 * HEIC/HEIF files are routed through /api/heic which converts them to JPEG
 * via macOS sips. All other formats pass straight through to <Image>.
 *
 * For HEIC files we render a plain <img> to avoid Next.js Image's internal
 * validation, which rejects non-standard local URLs with query strings.
 */
import Image, { type ImageProps } from "next/image";

function toJpegUrl(src: string): string {
  return `/api/heic?path=${encodeURIComponent(src)}`;
}

function isHeic(src: unknown): src is string {
  return typeof src === "string" && /\.(heic|heif)$/i.test(src);
}

export function AssetImage({
  src,
  alt,
  fill,
  className,
  style,
  ...rest
}: ImageProps) {
  if (isHeic(src)) {
    const url = toJpegUrl(src);

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={url}
        alt={alt}
        className={className}
        style={
          fill
            ? {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                ...style,
              }
            : style
        }
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      style={style}
      {...rest}
    />
  );
}
