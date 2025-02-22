import Navlink from "./navlink";
import { TextEncrypted } from "./text-encrypted";

export default function Hero() {
  return (
    <div className="container mx-auto relative w-screen h-[720px] md:min-h-screen overflow-x-hidden md:px-0 px-4 ">
      <div className="flex flex-col mt-[32dvh]">
        <h1 className="text-black dark:text-white text-6xl md:text-9xl uppercase font-bold will-change-auto ">
          <TextEncrypted text="Web Developer" interval={40} />
        </h1>
        <h1 className="text-black dark:text-white text-6xl md:text-9xl uppercase font-bold will-change-auto ">
          <TextEncrypted text="UX/UI Designer" interval={40} />
        </h1>
        <div className="mt-2">
          <div className="uppercase text-lg md:text-xl">
            Explore my
            <Navlink
              href="/projects"
              title="Projects"
              className="px-2 uppercase font-bold text-red-600"
            />
            or
            <Navlink
              href="/contact"
              title="Let's build something"
              className="px-2 uppercase font-bold text-red-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
