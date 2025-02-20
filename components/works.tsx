"use client";
import { TextEncrypted } from "./text-encrypted";

import { projects } from "@/const/projects";
import WorkCard from "./work-card";

export default function WorksSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden px-6">
      <div className="flex justify-between items-center">
        <h1 className="text-white text-6xl tracking-wide uppercase font-bold will-change-auto">
          <TextEncrypted text="Projects" interval={50} />
        </h1>
      </div>
      <h3 className="mt-2 text-red-600 text-4xl tracking-wide uppercase font-bold will-change-auto">
        Some of it...
      </h3>
      <div className="w-full mt-4">
        <div className="grid grid-cols-2 gap-4">
          {projects.map((project) => (
            <WorkCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
