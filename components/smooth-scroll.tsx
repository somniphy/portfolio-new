"use client"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ReactLenis, { LenisRef } from "lenis/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);

export default function SmoothScroll({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  const lenisRef = useRef<LenisRef>(null);

  useGSAP(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }
    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}