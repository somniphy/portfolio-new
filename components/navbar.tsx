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
    <div className="flex">
      <nav className="flex justify-between items-center p-6 w-full fixed top-0 left-0 right-0 z-4">
        <Link href="/" className="flex justify-center items-center gap-2">
          <Image
            src="logo.svg"
            height="24"
            width="24"
            alt="Logo"
            className="logo"
          />
          <p className="text-sm uppercase font-medium text-white mix-blend-difference">
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
        <div className="flex w-full h-full">
          <div className="w-[60%] flex flex-col items-center gap-4 justify-center overflow-hidden">
            <Image src="/logo.svg" width={200} height={420} alt="logo" />
            <p className="text-4xl uppercase font-bold">Christian Penales</p>
            <div className="">
              <p className="text-sm font-medium text-white uppercase">
                penalescjay@gmail.com
              </p>
              <div className="flex gap-8">
                {socials.map((social) => (
                  <Navlink
                    key={social.name}
                    href={social.href}
                    title={social.name}
                    className="uppercase text-sm hover:text-red-600 transition-colors duration-100"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-[40%] flex flex-col items-center justify-center bg-transparent gap-[100px] z-40">
            <div className="top-6 right-6 fixed">
              <button
                onClick={closeMenu}
                className="text-sm uppercase font-medium text-white cursor-crosshair mix-blend-difference"
              >
                Close
              </button>
            </div>
            <div className="">
              <div className="flex flex-col gap-2">
                {navigation.map((link) => (
                  <Navlink
                    key={link.name}
                    href={link.href}
                    title={link.name}
                    onClick={closeMenu}
                    className="uppercase text-7xl font-bold  hover:text-red-600 transition-colors duration-100"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
