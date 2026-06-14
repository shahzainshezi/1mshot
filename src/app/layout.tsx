import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "1MSHOT — The Official $1,000,000 3-Point Contest",
  description: "For Ballers. Anyone. No Pros. No Politics. No BS. Enter the $1,000,000 3-point contest today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ overflowX: "hidden", maxWidth: "100vw" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow+Condensed:wght@400;600;700;800;900&family=Barlow:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap" rel="stylesheet" />
      </head>
      <body style={{ overflowX: "hidden", maxWidth: "100vw", width: "100%" }} suppressHydrationWarning>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

