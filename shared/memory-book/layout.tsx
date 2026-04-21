"use client";

import { usePathname } from "next/navigation";

import { MemoryBookShell } from "./shell";
import { getBookRouteStateByPathname } from "./utils";

export function MemoryBookRouteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const currentPageState = getBookRouteStateByPathname(pathname);

  return (
    <MemoryBookShell currentPageState={currentPageState}>{children}</MemoryBookShell>
  );
}
