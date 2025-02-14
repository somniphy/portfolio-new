"use client";
import { TextEncrypted } from "./text-encrypted";

import { projects } from "@/const/projects";
import WorkCard from "./work-card";

export default function WorksSection() {
  return (
    <section className="relative w-full h-full overflow-hidden px-[5.5%]">
      <div className="flex justify-between items-center mt-12">
        <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto">
          <TextEncrypted text="Projects" interval={50} />
        </h2>
      </div>
      <hr className="border-white border-1 w-full mb-4" />

      <div className="w-full">
        <div className="grid grid-cols-2">
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
