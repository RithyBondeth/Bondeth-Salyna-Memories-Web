import { MemoryBookRouteLayout } from "@/shared/memory-book/layout";

export default function BookLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MemoryBookRouteLayout>{children}</MemoryBookRouteLayout>;
}
