import AboutSection from "@/components/about";

import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import ContactSection from "@/components/contact";
export default function About() {
  return (
    <main className="max-w-screen mx-auto relative min-h-screen flex flex-col gap-16 py-12">
      <AboutSection />
      <Skills />
      <Experience />
      <Education />
      <ContactSection />
    </main>
  );
}
