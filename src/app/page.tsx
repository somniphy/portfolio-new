"use client";
import SplitTextImageRow from "@/components/animations/text-image-split";
import TextSplit from "@/components/animations/text-split";
import WorksSection from "@/components/works-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  CircleCheckIcon,
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";

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
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 py-32 md:py-72">
        <div
          ref={reveal1}
          className="mb-4 flex items-center space-x-2 py-2 px-4 rounded-full bg-zinc-900"
        >
          <CircleCheckIcon className="h-4 w-4 text-green-700" />
          <p className="text-zinc-100 text-xs font-medium">
            Available for Work
          </p>
        </div>

        <TextSplit
          text1="Creative"
          text2="Developer"
          className="text-zinc-200 text-4xl sm:text-5xl md:text-7xl lg:text-9xl font-bold uppercase text-center leading-tight"
        />
        <div
          ref={reveal2}
          className="flex flex-col items-center justify-center"
        >
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full text-zinc-950 bg-zinc-100 hover:bg-zinc-700 transition-colors duration-150 text-xs font-medium uppercase"
              href="/contact"
            >
              View Works
            </Link>
            <Link
              className="w-full sm:w-auto text-center py-3 px-6 rounded-full text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 text-xs font-medium uppercase"
              href="/contact"
            >
              Resume
            </Link>
          </div>

          <div className="mt-4 flex items-center space-x-4">
            <Link
              className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
              href="https://github.com/somniphy/"
              target="_blank"
            >
              <GithubIcon className="h-5 w-5" />
            </Link>
            <Link
              className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
              href="https://www.linkedin.com/in/chrispenales/"
              target="_blank"
            >
              <LinkedinIcon className="h-5 w-5" />
            </Link>
            <Link
              className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
              href="https://dribbble.com/chan999u/shots"
              target="_blank"
            >
              <DribbbleIcon className="h-5 w-5" />
            </Link>
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
            leftText="UI/UX"
            rightText="DESIGN"
            imageSrc="/gloomyeffectshero.png"
          />
          <SplitTextImageRow
            leftText="BRANDING"
            rightText="DESIGN"
            imageSrc="/bg.png"
          />
        </div>
      </section>

      <WorksSection />
      <div className="text-center pb-12">
        <Link
          href="/works"
          className="text-zinc-400 text-sm underline uppercase"
        >
          More Works
        </Link>
      </div>
    </main>
  );
}
