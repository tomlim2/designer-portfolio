import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import MainHeader from "@/components/header/MainHeader";
import MainFooter from "@/components/footer/MainFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tom Lim",
  description: "Tom Lim's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
        <MainFooter />
      </body>
    </html>
  );
}
