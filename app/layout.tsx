import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FreeCorps",
  description: "An group of people who want to make the world a better place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Script defer src="https://umami.freecorps.xyz/script.js" data-website-id="8d435daf-fedb-44b6-91ff-a8c4856ace0c" />
      <body className={inter.className + "flex flex-col items-center justify-center"}>{children}</body>
    </html>
  );
}
