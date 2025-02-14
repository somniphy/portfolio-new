import Marquee from "@/components/marquee";
import WorkCard from "@/components/work-card";
import { projects } from "@/const/projects";
import ContactSection from "@/components/contact";
export default function Works() {
  return (
    <main className="max-w-[1440px] mx-auto relative z-9 min-h-screen flex flex-col gap-16 py-12">
      <Marquee
        items={[
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
          "Projects—",
        ]}
        className="text-white text-8xl uppercase font-medium"
        speed={100}
      />
      <div className="w-full">
        <div className="grid grid-cols-2">
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
