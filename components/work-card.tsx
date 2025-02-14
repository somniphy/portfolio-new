"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";


interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
}

export default function WorkCard({
  title,
  description,
  image,
  link,
}: WorkCardProps) {
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const scrollProgress = 1 - rect.bottom / window.innerHeight;
        // Adjust the multiplier to control parallax intensity
        setParallaxOffset(scrollProgress * 50);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={cardRef} className="relative aspect-[4/3] overflow-hidden group">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="transition-transform duration-300 ease-out object-cover group-hover:scale-105"
          style={{
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
      </div>
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <div className="text-white p-4">
          <h3 className="text-4xl font-bold mb-2 uppercase">{title}</h3>
          <p className="text-sm uppercase">{description}</p>
          {link && (
            <Link
              href={link}
              className="inline-block text-sm uppercase border-b border-white hover:opacity-70 transition-opacity"
            >
              View Project
            </Link>
          )}
        </div>
      </div>
      
    </div>
  );
}
