"use client";
import AboutSection from "@/components/about";
import ContactSection from "@/components/contact";
import Hero from "@/components/hero";
import ServicesSection from "@/components/services";
import WorksSection from "@/components/works";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <WorksSection />
      <ContactSection />
    </main>
  );
}
