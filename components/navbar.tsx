"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navlink from "./navlink";
import { navigation } from "@/const/navigation";
import { socials } from "@/const/socials";
import { XIcon } from "lucide-react";

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
    <header className="fixed top-0 z-4 w-screen flex items-center h-19">
      <nav className="flex justify-between items-center container mx-auto px-4 md:px-0">
        <Link
          href="/"
          className="flex justify-center items-center gap-2 z-[999]"
        >
          <Image
            src="logo.svg"
            height="32"
            width="32"
            alt="Logo"
            className="logo"
          />
          <p className="text-base uppercase text-orange-600 font-medium mix-blend-difference">
            Christian Penales
          </p>
        </Link>
        {!isMenuOpen ? (
          <button
            onClick={openMenu}
            className="text-base uppercase font-medium text-orange-600 cursor-crosshair z-[999]"
          >
            Menu
          </button>
        ) : (
          <button
            onClick={closeMenu}
            className="text-sm uppercase font-medium text-white cursor-crosshair z-[999]"
          >
           <XIcon />
          </button>
        )}
      </nav>
      <div
        className={`menu-overlay ${isMenuOpen ? "menu-open" : ""}`}
        ref={overlayRef}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col md:flex-row max-w-screen-2xl h-full container mx-auto">
          <div className="w-full md:w-[60%] flex flex-col items-center gap-4 justify-center overflow-hidden p-4">
            <Image src="/logo.svg" width={120} height={420} alt="logo" />
            <p className="text-xl md:text-4xl uppercase font-bold">
              Christian Penales
            </p>
            <p className="text-sm uppercase font-medium">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center bg-transparent gap-[50px] md:gap-[100px] z-30 p-4">
            <div className="flex flex-col gap-2 border-b border-zinc-700 py-6 md:py-12 w-full text-center">
              {navigation.map((link) => (
                <Navlink
                  key={link.name}
                  href={link.href}
                  title={link.name}
                  onClick={closeMenu}
                  className="uppercase text-3xl md:text-6xl font-bold hover:text-orange-600 transition-colors duration-100"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:flex gap-4 w-full text-center">
              {socials.map((social) => (
                <Navlink
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className="uppercase font-bold text-xl md:text-2xl hover:text-orange-600 transition-colors duration-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
