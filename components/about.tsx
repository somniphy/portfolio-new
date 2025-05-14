import { TextEncrypted } from "./text-encrypted";
import Navlink from "./navlink";
import TextStagger from "./text-stagger";
import Skills from "./skills";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen min-h-screen overflow-x-hidden">
      <div className="w-full flex flex-col justify-center">
        <TextEncrypted
          text="About Me"
          className="text-6xl md:text-7xl lg:text-8xl font-medium text-zinc-200"
        />
        <div className="flex justify-between items-center">
          <TextStagger className="text-2xl text-zinc-200 font-medium md:mt-8  w-[80%]">
            A Web Developer and UI/UX Designer with a knack for creating
            intuitive, user-centered digital experiences. With a strong
            foundation in both design and development, I bridge the gap between
            aesthetics and functionality.
          </TextStagger>
          <Image src="/logo.svg" alt="logo" width={480} height={480} />
        </div>

        {/* Link to More About Me */}
        <div className="">
          <Navlink
            href="/about"
            title="More About me"
            className="mt-4 font-medium text-sm text-zinc-900 bg-zinc-200 py-3 px-6"
          />
        </div>
        <div className="mt-6">
          <Skills />
        </div>
      </div>
    </div>
  );
}
