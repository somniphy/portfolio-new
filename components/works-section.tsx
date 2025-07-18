"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { works } from "@/const/works";

gsap.registerPlugin(ScrollTrigger);

export default function WorksSection() {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = gsap.utils.toArray<HTMLElement>(".work-item");

    items.forEach((item, index: number) => {
      gsap.fromTo(
        item,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
          delay: index * 0.15,
        }
      );

      // Hover animation
      const card = item.querySelector(".card-container");
      const image = item.querySelector(".card-image");
      const arrow = item.querySelector(".card-arrow");

      if (card && image && arrow) {
        card.addEventListener("mouseenter", () => {
          gsap.to(image, { scale: 1.05, duration: 0.6, ease: "power2.out" });
          gsap.to(arrow, { x: 4, y: -4, duration: 0.3, ease: "power2.out" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(image, { scale: 1, duration: 0.6, ease: "power2.out" });
          gsap.to(arrow, { x: 0, y: 0, duration: 0.3, ease: "power2.out" });
        });
      }
    });
  }, []);

  return (
    <div ref={containerRef} className="relative px-4 py-12 lg:py-20">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 mb-4 uppercase">
            Selected Works
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
            A collection of projects that showcase creativity, innovation, and
            attention to detail.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {works.map((work) => (
            <article key={work.id} className="work-item group">
              <Link
                href={`/works/${work.id}`}
                aria-label={`View ${work.title} project`}
                className="block"
              >
                <div className="card-container bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 border border-gray-100">
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <Image
                      src={work.image || "/placeholder.svg"}
                      alt={work.title}
                      fill
                      className="card-image object-cover transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/90 backdrop-blur-sm text-gray-700 border border-gray-200">
                        {work.category}
                      </span>
                    </div>

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-gray-700 transition-colors duration-200">
                          {work.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {work.year}
                        </p>
                      </div>

                      {/* Arrow Icon */}
                      <div className="flex-shrink-0">
                        <div className="card-arrow w-8 h-8 rounded-full bg-gray-100 group-hover:bg-gray-900 flex items-center justify-center transition-colors duration-300">
                          <ArrowUpRight className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
