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
          text="About"
         className="text-6xl md:text-7xl lg:text-8xl font-figtree font-bold text-black uppercase"
        />
        <div className="flex justify-between items-center">
          <TextStagger className="text-2xl text-black uppercase font-medium md:mt-8 font-figtree w-[80%]">
            A<span className="text-cyber-yellow px-2">Web Developer</span>
            and<span className="text-cyber-yellow px-2">UI/UX Designer</span>
            with a knack for creating intuitive, user-centered digital
            experiences. With a strong foundation in both design and
            development, I bridge the gap between aesthetics and functionality.
          </TextStagger>
          <Image src="/logo.svg" alt="logo" width={480} height={480} />
        </div>


        {/* Link to More About Me */}
        <div className="my-8">
          <Navlink
            href="/about"
            title="More About me"
            className="mt-4 font-medium uppercase text-sm text-white font-kode bg-black py-3 px-6"
          />
        </div>
        <div className="mt-6">
          <Skills />
        </div>
      </div>
    </div>
  );
}
