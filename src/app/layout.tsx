import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter_Tight({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Christian Penales - Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased min-h-screen overflow-x-hidden font-inter bg-zinc-900`}
      >
        <SmoothScroll>
          <Navbar />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
