"use client";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Hero from "@/components/hero";
import WorksSection from "@/components/works";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto relative z-9 h-[100svh]">
      <Hero />
      <AboutSection />
      <WorksSection />
      <ContactSection />
    </main>
  );
}
