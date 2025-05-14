import { socials } from "@/const/socials";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Navlink from "./navlink";
import Button from "./button";
import { TextEncrypted } from "./text-encrypted";
import TextStagger from "./text-stagger";
export default function Hero() {
  return (
    <div className="container mx-auto relative h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <TextStagger className="text-8xl font-medium text-zinc-200">
          Web Developer & UI/UX Designer
        </TextStagger>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          <div className="bg-zinc-800 p-6">
            <h3 className="text-xl font-medium text-zinc-100 mb-2">
              Frontend Projects
            </h3>
            <p className="text-zinc-400 text-sm">
              Clean and responsive UIs using React, Tailwind, and Next.js.
            </p>
          </div>
          <div className="bg-zinc-800 p-6 ">
            <h3 className="text-xl font-medium text-zinc-100 mb-2">
              Backend Work
            </h3>
            <p className="text-zinc-400 text-sm">
              API development, database integration, and server-side logic with
              Node.js and MongoDB.
            </p>
          </div>
          <div className="bg-zinc-800 p-6">
            <h3 className="text-xl font-medium text-zinc-100 mb-2">
              UI/UX Design
            </h3>
            <p className="text-zinc-400 text-sm">
              Intuitive wireframes and high-fidelity prototypes in Figma.
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-sm text-zinc-200">
            Hi, I am Christian, a passionate and detail-oriented Web Developer
            and Web Designer with 3 years of experience crafting visually
            stunning, user-friendly, and responsive websites.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-zinc-900 py-3 px-6">
            <span className=" font-medium text-sm text-zinc-200">
              View Works
            </span>
          </button>
          <button className="bg-zinc-300 py-3 px-6">
            <span className=" font-medium text-sm text-zinc-900">
              Resumé
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
