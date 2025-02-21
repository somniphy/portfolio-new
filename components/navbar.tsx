"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Navlink from "./navlink";
import { navigation } from "@/const/navigation";
import { socials } from "@/const/socials";

gsap.registerPlugin(useGSAP);

export default function Navbar() {
  const overlayRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    gsap.to(overlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 0.7,
      ease: "power2.inOut",
      onStart: () => {
        setIsMenuOpen(true);
      },
    });
  };

  const closeMenu = () => {
    gsap.to(overlayRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      duration: 0.7,
      ease: "power2.inOut",
      onComplete: () => {
        setIsMenuOpen(false);
      },
    });
  };

  return (
    <header className="flex max-w-screen overflow-x-hidden">
      <nav className="container mx-auto flex justify-between items-center p-6 fixed top-0 z-4 bg-transparent max-w-screen">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image
            src="logo.svg"
            height="24"
            width="24"
            alt="Logo"
            className="logo"
          />
          <p className="text-sm uppercase font-medium mix-blend-difference">
            Christian Penales
          </p>
        </Link>
        <button
          onClick={openMenu}
          className="text-sm uppercase font-medium text-white cursor-crosshair mix-blend-difference"
        >
          Menu
        </button>
      </nav>
      <div
        className={`menu-overlay ${isMenuOpen ? "menu-open" : ""}`}
        ref={overlayRef}
        style={{ pointerEvents: isMenuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col md:flex-row w-full h-full">
          <div className="w-full md:w-[60%] flex flex-col items-center gap-4 justify-center overflow-hidden p-4">
            <Image src="/logo.svg" width={120} height={420} alt="logo" />
            <p className="text-xl md:text-4xl uppercase font-bold">Christian Penales</p>
            <p className="text-sm uppercase font-medium">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
          <div className="w-full md:w-[40%] flex flex-col items-center justify-center bg-transparent gap-[50px] md:gap-[100px] z-40 p-4">
            <div className="top-6 right-6 fixed">
              <button
                onClick={closeMenu}
                className="text-sm uppercase font-medium text-white cursor-crosshair mix-blend-difference"
              >
                Close
              </button>
            </div>

            <div className="flex flex-col gap-2 border-b border-zinc-700 py-6 md:py-12 w-full text-center">
              {navigation.map((link) => (
                <Navlink
                  key={link.name}
                  href={link.href}
                  title={link.name}
                  onClick={closeMenu}
                  className="uppercase text-3xl md:text-6xl font-bold hover:text-red-600 transition-colors duration-100"
                />
              ))}
            </div>
            <div className="grid grid-cols-2 md:flex gap-2 w-full text-center">
              {socials.map((social) => (
                <Navlink
                  key={social.name}
                  href={social.href}
                  title={social.name}
                  className="uppercase font-bold text-xl md:text-2xl hover:text-red-600 transition-colors duration-100"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}