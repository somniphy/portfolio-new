"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      }
    });

    // Percentage animation
    gsap.to(percentageRef.current, {
      textContent: 100,
      duration: 2,
      roundProps: "textContent",
      ease: "power2.inOut",
      onUpdate: function() {
        if (percentageRef.current) {
          percentageRef.current.textContent = 
            Math.round(this.progress() * 100) + "%";
        }
      }
    });

    // Text animations
    tl.fromTo(
      nameRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      }
    )
    .fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      },
      "-=0.5"
    )
    .to(loaderRef.current, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 0.5
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#141414] flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <h1 
          ref={nameRef}
          className="text-white text-4xl md:text-6xl font-bold uppercase tracking-wide opacity-0"
        >
          Christian Penales
        </h1>
        <div 
          ref={percentageRef}
          className="text-orange-600 text-[12vw] mt-4 opacity-100"
        >
          0%
        </div>
        <h2 
          ref={textRef}
          className="text-white mt-4 text-sm uppercase tracking-wider opacity-0"
        >
          Web Developer & UI/UX Designer
        </h2>
      </div>
    </div>
  );
}
