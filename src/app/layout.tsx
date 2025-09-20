import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VizlaboSchool",
  description: "建築・産業向けのCGパースを実務レベルで学べる法人向けオンラインスクール。動画教材とマンツーマン指導で、短期間で内製力を高めます。",
  icons: {
    icon: "/logo.png", // publicフォルダ直下のファイル
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <GoogleTagManager gtmId="GTM-NJBPG8NH" />
      </body>
    </html>
  );
}
