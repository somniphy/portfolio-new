"use client";
import { TextEncrypted } from "./text-encrypted";

import { projects } from "@/const/projects";
import WorkCard from "./work-card";

import Navlink from "./navlink";
import TextStagger from "./text-stagger";

export default function WorksSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen min-h-screen sm:mt-24">
      <div className="w-full max-w-screen flex flex-col">
        <div className="inline-block">
          <Navlink
            href="/projects"
            title="VIew All Projects"
            className=" text-white font-figtree text-sm tracking-wide uppercase font-medium flex gap-2 will-change-auto items-center bg-black py-4 px-6"
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-3 gap-2 mt-2">
          <div className="flex flex-col justify-between h-[80svh] col-span-2 p-5 relative bg-black/20">
            <TextEncrypted
              text="01"
              className="text-black font-kode text-9xl"
            />
            <div className="text-right absolute bottom-5 right-5 font-figtree uppercase font-medium">
              <h1 className="text-2xl text-black">Project 1</h1>
              <p className="text-sm text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[80svh] p-5 relative bg-black/20">
            <TextEncrypted
              text="02"
              className="text-cyber-yellow font-kode text-9xl"
            />
            <div className="text-right absolute bottom-5 right-5 font-figtree uppercase font-medium px-2">
              <h1 className="text-2xl text-black">Project 2</h1>
              <p className="text-sm text-black ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between h-[80svh] p-5 relative bg-black/20">
            <div className="text-right font-figtree uppercase font-medium px-2">
              <h1 className="text-2xl text-black">Project 3</h1>
              <p className="text-sm text-cyber-yellow ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
            <TextEncrypted
              text="03"
              className="text-cyber-yellow font-kode text-9xl"
            />
          </div>
          <div className="flex flex-col justify-between h-[80svh] col-span-2 p-5 relative bg-black/20">
            <TextEncrypted
              text="04"
              className="text-cyber-gray font-kode text-9xl text-right"
            />
            <div className="text-left absolute bottom-5 left-5 font-figtree uppercase font-medium">
              <h1 className="text-2xl text-cyber-black">Project 4</h1>
              <p className="text-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
