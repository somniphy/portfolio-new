import { TextEncrypted } from "./text-encrypted";
import Navlink from "./navlink";
import TextStagger from "./text-stagger";
import Skills from "./skills";

export default function AboutSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen min-h-[30dvh] overflow-x-hidden md:px-0 px-4 mt-4">
      {/* Section Title */}
      <div className="w-full h-[50%]">
        <TextEncrypted
          text="About"
          className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase"
        />
        <TextStagger className="text-2xl md:text-3xl lg:text-4xl text-white uppercase font-medium md:mt-4">
          {/* Description */}A
          <span className="text-orange-600 px-2">Web Developer</span>
          and<span className="text-orange-600 px-2">UI/UX Designer</span>
          with a knack for creating intuitive, user-centered digital
          experiences. With a strong foundation in both design and development,
          I bridge the gap between{" "}
          <span className="italic px-2">aesthetics</span>&
          <span className="font-bold px-2"> functionality.</span>
        </TextStagger>

        {/* Link to More About Me */}
        <div className="flex justify-center md:justify-start">
          
          <Navlink
            href="/about"
            title="More About me"
            className="mt-4 font-medium uppercase text-xl text-orange-600"
          />
        </div>
        <Skills />
      </div>
    </div>
  );
}
