"use client";

import SplitTextImageRow from "@/components/animations/text-image-split";
import WorksSection from "@/components/works-section";
import {
  ArrowRightIcon,
  CircleCheckIcon,
  DribbbleIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "lucide-react";
import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="h-screen overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center py-24">
            <div className="mb-4 flex items-center space-x-2 py-4 px-6 rounded-full pointer-events-none transition-colors duration-100 uppercase text-center outline-1 outline-green-700">
              <CircleCheckIcon className="h-4 w-4 text-green-700" />
              <p className="text-zinc-100 text-xs font-medium">
                Available for Freelance
              </p>
            </div>
            <h1 className="text-zinc-200 text-4xl md:text-9xl font-bold uppercase text-center">
              Web Developer and Designer
            </h1>
            <div className="mt-4 flex items-center space-x-4">
              <Link
                className="py-4 px-6 rounded-full text-zinc-950 bg-zinc-100 hover:bg-zinc-700 transition-colors duration-150 text-xs font-medium uppercase"
                href="/contact"
              >
                View Works
              </Link>
              <Link
                className="py-4 px-6 rounded-full text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150s text-xs font-medium uppercase"
                href="/contact"
              >
                Resume
              </Link>
            </div>
            <div className="mt-4 flex items-center space-x-4">
              <Link
                className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150  rounded-full py-2 px-2"
                href="/contact"
              >
                <FacebookIcon className="h-5 w-5" />
              </Link>
              <Link
                className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
                href="/contact"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
              <Link
                className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
                href="/contact"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link
                className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
                href="/contact"
              >
                <DribbbleIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-24">
        <div className="container mx-auto">
          <div className="flex justify-between space-x-12">
            <Image
              src={"/bg.png"}
              alt="profile"
              width={1440}
              height={1280}
              className="h-[320px] w-[640px]"
            />
            <div className="flex flex-col justify-between">
              <p className="font-medium text-3xl text-zinc-200">
                I design and build full-stack applications that are scalable,
                maintainable, and user-friendly—leveraging tools like React,
                Node.js, TypeScript, and modern APIs to deliver complete digital
                solutions.
              </p>
              <p className="text-2xl text-zinc-200">
                Focus on growing your business while I ensure your brand stands
                out in the digital space—delivering a strong online presence
                that sets you apart from the competition.
              </p>

              <Link className="flex items-center space-x-2" href="/about">
                <span className="text-xs font-medium text-zinc-400 uppercase underline">
                  More About Me
                </span>
              </Link>
            </div>
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
    </main>
  );
}
