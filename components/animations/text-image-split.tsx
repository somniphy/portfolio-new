"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Props = {
  leftText: string;
  rightText: string;
  imageSrc: string;
};

export default function SplitTextImageRow({
  leftText,
  rightText,
  imageSrc,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    const left = leftRef.current;
    const right = rightRef.current;
    const imageWrapper = imageWrapperRef.current;

    if (!container || !left || !right || !imageWrapper) return;

    // Only run animations on screens wider than 768px
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;

    if (!isDesktop) return; // Skip if on mobile

    const handleEnter = () => {
      gsap.to(left, { x: "-60px", duration: 0.5, ease: "power2.out" });
      gsap.to(right, { x: "60px", duration: 0.5, ease: "power2.out" });
      gsap.set(imageWrapper, { width: 96, opacity: 1 }); // Instant
    };

    const handleLeave = () => {
      gsap.to([left, right], { x: 0, duration: 0.5, ease: "power2.inOut" });
      gsap.set(imageWrapper, { width: 0, opacity: 0 }); // Instant
    };

    container.addEventListener("mouseenter", handleEnter);
    container.addEventListener("mouseleave", handleLeave);

    return () => {
      container.removeEventListener("mouseenter", handleEnter);
      container.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex items-center justify-center text-zinc-900 font-bold text-3xl sm:text-4xl md:text-6xl lg:text-8xl "
    >
      <div ref={leftRef}>{leftText}</div>

      <div
        ref={imageWrapperRef}
        className="overflow-hidden w-0 opacity-0 mx-2 transition-all duration-500"
      >
        <Image
          src={imageSrc}
          alt="split reveal"
          width={800}
          height={400}
          className="object-cover aspect-video"
        />
      </div>

      <div ref={rightRef}>{rightText}</div>
    </div>
  );
}
