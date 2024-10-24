import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YesRank",
  description: "App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative">
      <body className={clsx(dmSans.className, "antialiased bg-[#EAEEFE]")}>
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
