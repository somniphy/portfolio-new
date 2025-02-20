import Navlink from "./navlink";
import { TextEncrypted } from "./text-encrypted";

export default function Hero() {
  return (
    <div className="relative flex justify-center h-screen w-full ">
      <div className="inline-block mt-[12.5rem] text-wrap">
        <div className="flex ml-2 justify-center">
          <p className="text-black dark:text-white uppercase ">
            <TextEncrypted text="Christian Penales Portfolio" interval={20} />
          </p>
        </div>
        <h1 className="text-black dark:text-white text-8xl uppercase font-bold will-change-auto text-center">
          <TextEncrypted text="UX/UI Designer" interval={20} />
        </h1>
        <h1 className="text-black dark:text-white text-8xl uppercase font-bold will-change-auto text-center">
          <TextEncrypted text="Web Developer" interval={20} />
        </h1>
        <div className="mt-2 flex justify-center">
          <div className="inline-flex items-center">
            Explore my <Navlink href="/projects" title="Projects" className="px-2 uppercase font-bold text-red-600"/>
            or<Navlink href="/contact" title="Let's build something" className="px-2 uppercase font-bold text-red-600"/>
          </div>
        </div>
      </div>
    </div>
  );
}
