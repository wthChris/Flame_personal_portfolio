import type { Metadata } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

// Cloudflare Pages requires Edge runtime for SSR routes
export const runtime = "edge";

const pressStart = Press_Start_2P({
  variable: "--font-press-start",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const vt323 = VT323({
  variable: "--font-vt323",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WU.TIANHAO · CHAR_SHEET_",
  description: "90s game-themed portfolio · Mech Engineer & AI Operator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      data-theme="gameboy"
      className={`${pressStart.variable} ${vt323.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-grid scanlines crt">{children}</body>
    </html>
  );
}
