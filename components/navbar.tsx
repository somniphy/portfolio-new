"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navlink from "./navlink";
import { navigation } from "@/const/navigation";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const overlayRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    gsap.to(overlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "power2.inOut",
      onStart: () => {
        setIsMenuOpen(true);
      },
    });
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        setIsMenuOpen(false);
      },
    });
  };

  return (
    <header className="fixed top-0 w-full flex z-40">
      <nav className="flex justify-between items-center container mx-auto">
        <Link href="/" className="flex justify-center items-center gap-2 mix-blend-difference">
          <span className="text-xs uppercase font-medium text-zinc-100">Christian Penales</span>
        </Link>
        <div className="">
          <div className="flex flex-row gap-4 py-6 w-full text-center">
            {navigation.map((link) => (
              <Navlink
                key={link.name}
                href={link.href}
                title={link.name}
                onClick={closeMenu}
                className="uppercase font-medium text-xs text-zinc-100"
              />
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
