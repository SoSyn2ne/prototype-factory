import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Proto Template",
  description: "Next.js App Router starter with demo and spec routes",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
