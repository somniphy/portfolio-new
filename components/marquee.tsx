"use client";

import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin();

interface MarqueeProps {
  items: string[];
  direction?: "left" | "right";
  speed?: number; // Fixed speed (e.g., pixels per second)
  pauseOnHover?: boolean;
  className?: string;
  itemClassName?: string;
}

const Marquee: React.FC<MarqueeProps> = ({
  items,
  direction = "left",
  speed = 100, // Speed in pixels per second (fixed)
  pauseOnHover = true,
  className = "",
  itemClassName = "",
}) => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;

    if (!marquee || !marqueeInner) return;

    // Duplicate content for seamless scrolling
    marqueeInner.innerHTML += marqueeInner.innerHTML;

    // Get the full width of the marquee content
    const marqueeInnerWidth = marqueeInner.offsetWidth / 2; // Half width (original)

    // Calculate duration based on fixed speed (time = distance / speed)
    const duration = marqueeInnerWidth / speed;

    // Create GSAP animation
    const animation = gsap.to(marqueeInner, {
      x: direction === "left" ? -marqueeInnerWidth : marqueeInnerWidth,
      duration: duration,
      ease: "none",
      repeat: -1,
    });

    // Pause on hover functionality
    if (pauseOnHover) {
      marquee.addEventListener("mouseenter", () => animation.pause());
      marquee.addEventListener("mouseleave", () => animation.play());
    }

    return () => {
      animation.kill();
      marqueeInner.innerHTML = marqueeInner.innerHTML.slice(0, marqueeInner.innerHTML.length / 2);
    };
  }, { scope: marqueeRef });

  return (
    <div ref={marqueeRef} className={`marquee overflow-hidden whitespace-nowrap z-[1000] ${className}`}>
      <div ref={marqueeInnerRef} className="marquee-inner inline-flex w-max">
        {items.map((item, index) => (
          <div key={index} className={`marquee-item inline-block mx-2 ${itemClassName}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
