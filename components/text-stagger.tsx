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
    if (textRef.current) {
      // Split the text into words
      const splitText = new SplitType(textRef.current, { types: "words" });

      // Hide the words initially
      gsap.set(splitText.words, {
        opacity: 0,
        y: 0, // Start the words fully offset below
      });

      // Create a GSAP timeline for the reveal animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current, // Use the container as the trigger
          start: "top 80%", // Start the animation when the top of the container is 70% from the top of the viewport
          end: "bottom 20%", // End the animation when the bottom of the container is 30% from the top of the viewport
          toggleActions: "play none none reverse", // Play the animation when scrolling down, reverse when scrolling up
          scrub: true, // Smoothly scrub through the animation on scroll
          // pin: true, // Pin the container while the animation is active
          // anticipatePin: 1, // Anticipate the pinning to avoid jitter
        },
      });

      // Animate each word to reveal it
      tl.to(splitText.words, {
        opacity: 1,
        y: "0%", // Move the words to their original position
        duration: 0.4,
        stagger: 0.02, // Add a stagger effect between words
        ease: "power2.out",
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="max-w-screen">
      {/* div tag with custom class */}
      <div ref={textRef} className={className}>
        {children}
      </div>
    </div>
  );
}
