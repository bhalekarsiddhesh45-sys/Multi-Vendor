import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const DM_Sans_Font = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${DM_Sans_Font.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
