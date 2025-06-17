"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the useGSAP and ScrollTrigger plugins
gsap.registerPlugin(useGSAP, ScrollTrigger);

// Define the component props
interface TextStaggerProps {
  children: React.ReactNode; // Explicitly define children as ReactNode
  className?: string; // Optional className for custom styling
}

export default function TextStagger({ children, className }: TextStaggerProps) {
  const textRef = useRef<HTMLDivElement>(null); // Ref for the text container
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container

  useGSAP(() => {
    if (!containerRef.current || !textRef.current) return;

    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      // On mobile, skip animation and show text immediately
      gsap.set(textRef.current, { opacity: 1 });
      return;
    }

    // Desktop: Animate split text
    const splitText = new SplitType(textRef.current, { types: "words" });

    gsap.set(splitText.words, {
      opacity: 0,
      y: 12, // small lift for animation
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
        scrub: true,
      },
    });

    tl.to(splitText.words, {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);

  return (
    <div ref={containerRef} className="">
      {/* div tag with custom class */}
      <div ref={textRef} className={className}>
        {children}
      </div>
    </div>
  );
}
