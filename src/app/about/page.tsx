import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Navlink from "@/components/navlink";

import { TextEncrypted } from "@/components/text-encrypted";
import TextStagger from "@/components/text-stagger";

export default function About() {
  return (
    <main>
      <div className="min-h-screen min-w-screen h-screen w-screen">
        <div className="container mx-auto flex flex-col mt-24 items-left">
          <TextEncrypted
            text="About"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase"
          />
          <TextStagger className="text-2xl md:text-3xl lg:text-4xl text-white uppercase font-medium md:mt-4">
            {/* Description */}Christian Penales is a
            <span className="text-orange-600 px-2">Web Developer</span>
            and<span className="text-orange-600 px-2">UI/UX Designer</span>
            with a knack for creating intuitive, user-centered digital
            experiences. With a strong foundation in both design and
            development, I bridge the gap between{" "}
            <span className="italic px-2">aesthetics</span>&
            <span className="font-bold px-2"> functionality.</span>
          </TextStagger>
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </main>
  );
}
