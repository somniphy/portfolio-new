"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function OverlayMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const overlayRef = useRef(null);
  const menuRef = useRef(null);

  // GSAP animation for opening/closing the menu
  useGSAP(() => {
    if (isOpen) {
      gsap.to(overlayRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "auto",
      });
      gsap.to(menuRef.current, {
         y: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    } else {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        pointerEvents: "none",
      });
      gsap.to(menuRef.current, {
        y: "100%",
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Button to toggle the menu */}
      <button
        onClick={toggleMenu}
        className="fixed top-4 right-4 text-white rounded-lg z-[999] cursor-pointer"
      >
        {isOpen ? "Close" : "Menu"}
      </button>

      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black bg-opacity-50 z-40 opacity-0 pointer-events-none"
        onClick={toggleMenu}
      ></div>

      {/* Menu */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 h-full w-full bg-black shadow-lg p-4 transform translate-y-full z-40"
      >
        <ul className="space-y-4 top-4 right-4">
          <li>
            <a href="/" className="text-gray-700 hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700 hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}