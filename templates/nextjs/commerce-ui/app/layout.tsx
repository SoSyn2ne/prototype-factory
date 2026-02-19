import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prototype Template",
  description: "Next.js + Tailwind + minimal shadcn/ui template",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
