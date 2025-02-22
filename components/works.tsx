"use client";
import { TextEncrypted } from "./text-encrypted";

import { projects } from "@/const/projects";
import WorkCard from "./work-card";

import Navlink from "./navlink";

export default function WorksSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen h-screen sm:mt-24">
      <div className="w-full max-w-screen flex flex-col">
        {/* Section Title and Link */}
        <div className="inline-block">
          <TextEncrypted
            text="Projects"
            interval={50}
            className="text-white text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase font-bold will-change-auto"
          />

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
      </div>
    </div>
  );
}
