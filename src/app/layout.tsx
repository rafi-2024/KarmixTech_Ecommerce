import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer/site-footer";
import { SiteHeader } from "@/components/site-header/site-header";
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
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <div className="siteFrame">
          <SiteHeader />
          <main className="siteMain" id="main-content" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
