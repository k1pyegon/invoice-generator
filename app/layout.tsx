import type { Metadata, Viewport } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Script from "next/script";
import { AuthProvider } from "@/app/providers/AuthProvider";

export const viewport: Viewport = {
  themeColor: "#15803d",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL!),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Agrisync Lab Invoice Generator: Create & Send Professional Invoices",
  description:
    "Agrisync Lab's invoice tool, built to help farmers get paid faster and keep their books in order.",
  keywords: [
    "invoice generator",
    "invoice template",
    "invoice maker",
    "online invoice",
    "create invoice",
    "Agrisync Lab",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Agrisync Lab Invoice Generator: Create & Send Professional Invoices",
    description:
      "Agrisync Lab's invoice tool, built to help farmers get paid faster and keep their books in order.",
    url: process.env.NEXT_PUBLIC_URL,
    type: "website",
    images: "/og-image.jpeg",
    siteName: "Agrisync Lab",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#15803d" />
        <meta name="msapplication-TileColor" content="#15803d" />
        <meta name="theme-color" content="#15803d" />
      </head>
      <body className={`${GeistSans.className}`}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
