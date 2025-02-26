"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function IntroLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!loaderRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false);
      },
    });

    // Percentage animation
    gsap.to(percentageRef.current, {
      textContent: 100,
      duration: 2,
      roundProps: "textContent",
      ease: "power2.inOut",
      onUpdate: function () {
        if (percentageRef.current) {
          percentageRef.current.textContent =
            Math.round(this.progress() * 100) + "%";
        }
      },
    });

    // Text animations
    tl.to(loaderRef.current, {
      opacity: 0,
      display: "none",
      duration: 0.5,
      delay: 0.5,
    });
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] bg-[#141414] flex flex-col items-center justify-center"
    >
      <div className="text-center">
        <div
          ref={percentageRef}
          className="text-white text-9xl md:text-9xl mt-4 opacity-100"
        >
          0%
        </div>
      </div>
    </div>
  );
}
