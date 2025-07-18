"use client"

import type React from "react"

import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP)

const navLinks = [
  { title: "Index", href: "/" },
  { title: "About", href: "/about" },
  { title: "Works", href: "/works" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  // Refs for animations
  const mobileMenuRef = useRef<HTMLDivElement>(null)
  const iconRef = useRef<HTMLDivElement>(null)
  const navbarRef = useRef<HTMLElement>(null)
  const menuItemsRef = useRef<HTMLDivElement[]>([])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  // Handle body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      document.body.style.paddingRight = "0px" // Prevent layout shift
    } else {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }

    return () => {
      document.body.style.overflow = ""
      document.body.style.paddingRight = ""
    }
  }, [isOpen])

  // Close menu on route change
  useEffect(() => {
    closeMenu()
  }, [pathname])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu()
      }
    }

    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [isOpen])

  // GSAP Animations
  useGSAP(() => {
    // Navbar entrance animation on mount
    if (navbarRef.current) {
      gsap.fromTo(
        navbarRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
      )
    }
  }, [])

  // Mobile menu animations
  useGSAP(() => {
    if (isOpen && mobileMenuRef.current) {
      // Menu container animation
      gsap.fromTo(
        mobileMenuRef.current,
        { opacity: 0, backdropFilter: "blur(0px)" },
        {
          opacity: 1,
          backdropFilter: "blur(20px)",
          duration: 0.3,
          ease: "power2.out",
        },
      )

      // Staggered menu items animation
      const menuItems = menuItemsRef.current.filter(Boolean)
      gsap.fromTo(
        menuItems,
        { opacity: 0, y: 30, rotateX: -15 },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          delay: 0.1,
        },
      )
    }
  }, [isOpen])

  // Menu button animation
  useGSAP(() => {
    if (iconRef.current) {
      gsap.to(iconRef.current, {
        rotation: isOpen ? 180 : 0,
        duration: 0.3,
        ease: "power2.out",
      })
    }
  }, [isOpen])

  return (
    <>
      <nav ref={navbarRef} className="fixed top-4 left-4 right-4 z-50" role="navigation" aria-label="Main navigation">
        <div className="container mx-auto max-w-6xl">
          <div className="flex justify-between items-center py-4 backdrop-blur-xl bg-white/70 border border-white/20 rounded-2xl px-6 shadow-lg shadow-black/5">
            {/* Logo */}
            <Link
              href="/"
              className="text-zinc-900 text-sm font-bold uppercase tracking-wide hover:text-zinc-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 rounded-md px-1"
              aria-label="Christian Penales - Home"
            >
              Christian Penales
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  isActive={pathname === link.href}
                  className="text-zinc-900 text-sm font-medium px-4 py-2 rounded-full hover:bg-zinc-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
                >
                  {link.title}
                </NavLink>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex">
              <NavLink
                href="/contact"
                isActive={pathname === "/contact"}
                className="text-zinc-900  text-sm font-medium  py-3 px-6 rounded-full hover:bg-zinc-100/80 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2 shadow-lg"
              >
                Let&apos;s Talk
              </NavLink>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center space-x-2 px-3 py-2 rounded-full hover:bg-zinc-100/80 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-2"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-sm text-zinc-900 font-medium">{isOpen ? "Close" : "Menu"}</span>
              <div ref={iconRef}>
                {isOpen ? <XIcon className="w-4 h-4 text-zinc-900" /> : <MenuIcon className="w-4 h-4 text-zinc-900" />}
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          ref={mobileMenuRef}
          id="mobile-menu"
          className="fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div className="flex flex-col items-center justify-center min-h-screen px-6 space-y-8">
            {[...navLinks, { title: "Let's Talk", href: "/contact" }].map((link, index) => (
              <div
                key={link.href}
                ref={(el) => {
                  if (el) menuItemsRef.current[index] = el
                }}
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`text-4xl md:text-5xl font-medium transition-all duration-300 hover:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:ring-offset-4 rounded-lg px-2 ${
                    pathname === link.href ? "text-zinc-900" : "text-zinc-700"
                  }`}
                  tabIndex={isOpen ? 0 : -1}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Background click to close */}
          <div className="absolute inset-0 -z-10" onClick={closeMenu} aria-hidden="true" />
        </div>
      )}
    </>
  )
}

// NavLink Component
interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive?: boolean
  className?: string
}

function NavLink({ href, children, isActive, className = "" }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "text-zinc-900 bg-zinc-100/60" : "text-zinc-700 hover:text-zinc-900"}`}
    >
      {children}
    </Link>
  )
}
