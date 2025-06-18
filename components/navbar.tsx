"use client";
import Link from "next/link";
import Navlink from "./navlink";
import Button from "./button";
import { MenuIcon, XIcon } from "lucide-react";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  }, [isOpen]);
  useGSAP(() => {
    if (isOpen && closeButtonRef.current) {
      gsap.fromTo(
        closeButtonRef.current,
        { opacity: 0, y: -10, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
    if (!isOpen && menuButtonRef.current) {
      gsap.fromTo(
        menuButtonRef.current,
        { opacity: 0, y: 10, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        }
      );
    }
  }, []);
  return (
    <nav className="fixed top-0 w-full max-w-screen z-40 px-4">
      <div className="container mx-auto ">
        <div className="flex justify-between items-center py-4 ">
          <Link href="/" className="text-zinc-200 text-sm font-bold z-[990]">
            Christian Penales
          </Link>
          <div className="hidden md:flex space-x-4 item-center">
            <Navlink
              className="text-zinc-200 text-sm font-medium"
              title="Index"
              href="/"
            />
            <Navlink
              className="text-zinc-200 text-sm font-medium"
              title="About"
              href="/about"
            />
            <Navlink
              className="text-zinc-200 text-sm font-medium"
              title="Works"
              href="/works"
            />
          </div>
          <div className="hidden md:flex">
            <Button className="bg-zinc-700">
              <Navlink
                className="text-zinc-200 text-sm font-medium"
                title="Let's Talk"
                href="/contact"
              />
            </Button>
          </div>
          <div className="md:hidden flex">
            <Button onClick={toggleMenu}>
              {isOpen ? (
                <div
                  className="flex space-x-2 items-center "
                  ref={closeButtonRef}
                >
                  <p className="text-sm text-zinc-200 font-medium ">Close</p>
                  <XIcon className="text-zinc-200" />
                </div>
              ) : (
                <div
                  className="flex space-x-2 items-center hover:bg-zinc-400"
                  ref={menuButtonRef}
                >
                  <p className="text-sm text-zinc-200 font-medium">Menu</p>
                  <MenuIcon className="text-zinc-200" />
                </div>
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="px-4 md:hidden fixed inset-0 bg-zinc-900 bg-opacity-90 flex flex-col items-start justify-center space-y-6 z-[99] transition-opacity duration-300">
          <Link
            className="text-zinc-200 text-7xl font-medium"
            href="/"
            onClick={closeMenu}
          >
            Index
          </Link>
          <Link
            className="text-zinc-200 text-7xl font-medium"
            href="/about"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            className="text-zinc-200 text-7xl font-medium"
            href="/works"
            onClick={closeMenu}
          >
            Works
          </Link>
          <Link
            className="text-zinc-200 text-7xl font-medium"
            href="/contact"
            onClick={closeMenu}
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  );
}
