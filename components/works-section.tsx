"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";

const works = [
  { title: "GloomyEffects", image: "/gloomyeffectshero.png" },
  { title: "Sailfast", image: "/sailfasthome.png" },
  { title: "SonnyLi Urban Photography", image: "/architecture.png" },
  { title: "Lookbook Summer", image: "/bg.png" },
];

export default function WorksSection() {
  const workItemRef = useRef<HTMLDivElement>(null);

  useGSAP(()=>{
    
  }, [])
  return (
    <section className="relative px-4 py-24">
      <div className="container mx-auto">
        <p className="text-sm text-zinc-400 uppercase mb-4 font-medium">
          Works
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 space-y-4 gap-4">
          {works.map((work, i) => (
            <li key={i} className="relative z-10 cursor-pointer">
              <div
                ref={workItemRef}
                className="w-full h-auto overflow-hidden shadow-lg"
              >
                <Image
                  src={work.image}
                  alt={work.title}
                  width={800}
                  height={400}
                  className="object-cover aspect-video w-full h-full"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-sm text-zinc-200">{work.title}</p>
                <p className=" text-zinc-200">
                  <ArrowUpRight />
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Link
            href="/works"
            className="text-zinc-400 text-xs underline uppercase"
          >
            More Works
          </Link>
        </div>
      </div>
    </section>
  );
}
