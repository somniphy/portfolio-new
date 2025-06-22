"use client";
import SplitTextImageRow from "@/components/animations/text-image-split";
import TextSplit from "@/components/animations/text-split";
import Socials from "@/components/socials";
import WorksSection from "@/components/works-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CircleCheckIcon } from "lucide-react";

import Link from "next/link";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

export default function Home() {
  const reveal1 = useRef(null);
  const reveal2 = useRef(null);
  useGSAP(() => {
    gsap.from(reveal1.current, {
      opacity: 0,
      stagger: 0.1,
      ease: "power2.in",
      duration: 2,
    });

    gsap.from(reveal2.current, {
      opacity: 0,
      stagger: 0.1,
      ease: "power2.in",
      duration: 2,
    });
  }, []);
  return (
    <main className="flex flex-col space-y-32">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-32">
        <div
          ref={reveal1}
          className="mb-4 flex items-center space-x-2 py-2 px-4 rounded-full bg-zinc-900 border-2 border-green-700"
        >
          <CircleCheckIcon className="h-4 w-4 text-green-700" />
          <p className="text-zinc-100 text-xs font-medium">
            Available for Work
          </p>
        </div>

        <TextSplit
          text1="Christian Penales"
          text2=""
          className="text-zinc-200 text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold uppercase text-center leading-tight"
        />
        <TextSplit
          text1="Web Developer"
          text2=""
          className="text-zinc-400 text-xl sm:text-2xl md:text-4xl lg:text-6xl font-bold uppercase text-center leading-tight"
        />
        <div
          ref={reveal2}
          className="flex flex-col items-center justify-center"
        >
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full text-zinc-950 bg-zinc-100 hover:bg-zinc-700 transition-colors duration-150 text-xs font-medium uppercase"
              href="/works"
            >
              View Works
            </Link>
          </div>

          <div className="mt-4">
            <Socials />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center space-y-8 px-4">
        <p className="text-sm font-medium uppercase text-zinc-400">Services</p>
        <div className="container mx-auto">
          <SplitTextImageRow
            leftText="WEBSITE"
            rightText="DEVELOPMENT"
            imageSrc="/sailfasthome.png"
          />
          <SplitTextImageRow
            leftText="INTERACTIVE"
            rightText="EXPERIENCES"
            imageSrc="/architecture.png"
          />
          <SplitTextImageRow
            leftText="UI/UX"
            rightText="DESIGN"
            imageSrc="/gloomyeffectshero.png"
          />
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-4 py-24">
        <p className="text-sm font-medium uppercase text-zinc-400">Works</p>
        <WorksSection />
      </section>
    </main>
  );
}
