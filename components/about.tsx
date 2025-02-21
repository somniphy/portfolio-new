
import { TextEncrypted } from "./text-encrypted";
import Navlink from "./navlink";

export default function AboutSection() {
  return (
    <div className="relative min-h-96 md:min-h-screen container max-w-screen px-6 mx-auto ">
      <div className="max-w-dvw flex flex-col">
        {/* Section Title */}
        <div className="flex flex-col">
          <TextEncrypted
            text="About"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase"
          />
        </div>

        {/* Description */}
        <div className="flex flex-col mt-4 md:mt-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-white uppercase font-medium">
            A <span className="text-red-600">UI/UX Designer </span>
            and <span className="text-red-600">Web Developer </span>
            with a knack for creating intuitive, user-centered digital
            experiences. With a strong foundation in both design and
            development, I bridge the gap between{" "}
            <span className="italic bg-white text-black px-1 md:px-2">
              aesthetics
            </span>{" "}
            &<span className="font-bold"> functionality.</span>
          </h1>

          {/* Link to More About Me */}
          <div className="flex justify-center md:justify-start">
            <Navlink
              href="/about"
              title="More About me"
              className="mt-4 font-medium uppercase text-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}