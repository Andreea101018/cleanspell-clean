export { metadata } from "./metadata";

export default function DanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang="da"><body>{children}</body></html>;
}
