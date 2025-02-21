"use client";
import { TextEncrypted } from "./text-encrypted";

import { projects } from "@/const/projects";
import WorkCard from "./work-card";

import Navlink from "./navlink";

export default function WorksSection() {
  return (
    <section className="relative min-h-screen px-4 md:px-6 w-full flex flex-col items-center justify-center">
      {/* Section Title and Link */}
      <div className="flex flex-col justify-between items-center mb-8 md:mb-12">
        <h1 className="text-white text-4xl md:text-6xl tracking-wide uppercase font-bold will-change-auto">
          <TextEncrypted text="Projects" interval={50} />
        </h1>
        <Navlink
          href="/projects"
          title="VIew All Projects"
          className="text-red-600 text-sm md:text-base tracking-wide uppercase font-medium flex gap-2 will-change-auto items-center mt-4"
        ></Navlink>
      </div>

      {/* Projects Grid */}
      <div className="w-full max-w-7xl">
        <div className="w-full mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <WorkCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
