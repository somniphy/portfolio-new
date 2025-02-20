"use client";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main className="max-w-screen">
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </main>
  );
}
