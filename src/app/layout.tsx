import type { Metadata } from "next";
import { Figtree, Kode_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/smooth-scroll";
import IntroLoader from "@/components/intro-loader";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const kodeMono = Kode_Mono({
  variable: "--font-kode",
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
        className={`${figtree.variable} ${kodeMono.variable} antialiased min-h-screen w-screen overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* <IntroLoader /> */}
          <SmoothScroll>
            <Navbar />

            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
