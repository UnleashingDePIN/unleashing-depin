import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {title: "Unleashing DePIN | Your Go-To DePIN Resource", description: "Your go-to resource for everything DePIN, including your favorite DePIN Podcast, DePIN Pulse earning aggregator tool, DePIN articles and more!"};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="pGYeQXTsutqLCDxQqrPZOxUHGN84zT9979eyuKxSejQ"/>
      </head>
      <body className={inter.className}>{children}<Analytics/></body>
    </html>
  );
}
