"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

// Register the useGSAP and ScrollTrigger plugins
gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

// Define the component props
interface TextSplitProps {
  text1: string;
  text2: string;
  className?: string; // Optional className for custom styling
}

export default function TextSplit({ text1, text2, className }: TextSplitProps) {
  const containerRef = useRef(null);
  const header1Ref = useRef(null);
  const header2Ref = useRef(null);
  useGSAP(() => {
    const split1 = new SplitText(header1Ref.current, { type: "chars" });
    const split2 = new SplitText(header2Ref.current, { type: "chars" });
    gsap.from(split1.chars, {
      opacity: 0,
      stagger: 0.05,
      ease: "power2.in",
      duration: 1,
    });

    gsap.from(split2.chars, {
      opacity: 0,
      stagger: 0.05,
      ease: "power2.out",
      duration: 1,
      delay: 0.5, // animate second after first
    });
  }, []);
  return (
    <div ref={containerRef} className="flex space-x-4">
      {/* div tag with custom class */}
      <p ref={header1Ref} className={className}>
        {text1}
      </p>
      <p ref={header2Ref} className={className}>
        {text2}
      </p>
    </div>
  );
}
