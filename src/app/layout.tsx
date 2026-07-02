import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.NODE_ENV === "production"
    ? "https://gtm-engineering.blog"
    : "http://localhost:3000");

const description =
  "SDR/AE turned GTM Engineer. I build the systems that make sales scale — clean CRM data, automated enrichment and routing, and outbound that runs itself.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Peter Conley — GTM Engineer",
    template: "%s · Peter Conley",
  },
  description,
  openGraph: {
    title: "Peter Conley — GTM Engineer",
    description,
    siteName: "Peter Conley",
    type: "website",
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Conley — GTM Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-[#08080a] text-zinc-100">
        <SiteNav />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
