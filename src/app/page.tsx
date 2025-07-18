"use client";
import SplitTextImageRow from "@/components/animations/text-image-split";
import TextSplit from "@/components/animations/text-split";
import Navlink from "@/components/navlink";
import Socials from "@/components/socials";
import WorksSection from "@/components/works-section";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, CircleCheckIcon } from "lucide-react";
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
          className="text-zinc-900 text-3xl sm:text-xl md:text-4xl lg:text-9xl font-bold uppercase text-center leading-tight"
        />
        <TextSplit
          text1="Creative Developer"
          text2=""
          className="text-zinc-400 text-xl sm:text-xl md:text-4xl lg:text-6xl font-bold uppercase text-center leading-tight"
        />
        <div
          ref={reveal2}
          className="flex flex-col items-center justify-center"
        >
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
             <Navlink
              className="bg-zinc-900 text-zinc-200 text-sm font-medium py-4 px-6 rounded-full hover:bg-zinc-700/60"
              title="Explore Works"
              href="/works"
            />

          </div>

          <div className="mt-4">
            <Socials />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center space-y-8 px-4">
        <p className="text-sm font-medium uppercase text-zinc-900">Services</p>
        <div className="container mx-auto">
          <SplitTextImageRow
            leftText="WEBSITE"
            rightText="DEVELOPMENT"
            imageSrc="/NomiaHero.png"
          />
          <SplitTextImageRow
            leftText="INTERACTIVE"
            rightText="EXPERIENCES"
            imageSrc="/GloomyeffectsHero.png"
          />
          <SplitTextImageRow
            leftText="UI/UX"
            rightText="DESIGN"
            imageSrc="/ZyptoHero.png"
          />
        </div>
      </section>

      <section className="flex flex-col px-4 py-24">
        <WorksSection />
         {/* View All Link */}
        <div className="mt-12 lg:mt-16 text-center">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-full hover:bg-zinc-800 transition-colors duration-200 font-medium"
          >
            View All Projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
