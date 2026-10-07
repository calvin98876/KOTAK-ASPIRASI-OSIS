import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kotak Aspirasi OSIS",
  description: "Sampaikan aspirasi untuk SMA Negeri 6 Tanjungpinang."
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}