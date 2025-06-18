"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);



const works = [
  { title: "GloomyEffects", image: "/gloomyeffectshero.png" },
  { title: "Sailfast", image: "/sailfasthome.png" },
  { title: "SonnyLi Urban Photography", image: "/architecture.png" },
  { title: "Lookbook Summer", image: "/bg.png" },
];

export default function WorksSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray(".work-item");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items.forEach((item: any, index: number) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.1, // staggered entrance
        }
      );
    });
  }, []);

  return (
    <section ref={containerRef} className="relative px-4 py-24">
      <div className="container mx-auto">
      

        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((work, i) => (
            <li key={i} className="relative z-10 cursor-pointer work-item">
              <div className="w-full h-auto overflow-hidden shadow-lg">
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
      </div>
    </section>
  );
}
