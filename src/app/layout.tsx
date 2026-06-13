import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KarmixTech Ecommerce",
  description: "A full-stack ecommerce project built while learning Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
