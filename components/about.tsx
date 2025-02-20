import Image from "next/image";
import { TextEncrypted } from "./text-encrypted";
import { designTools, frameworks, languages, libraries } from "@/const/tools";
import Navlink from "./navlink";

export default function AboutSection() {
  return (
    <div className="relative min-h-96 px-6 w-screen flex">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col">
          <TextEncrypted
            text="About"
            className="text-6xl font-bold text-white uppercase"
          />
          <div className="flex flex-col mt-4">
            <h1 className="text-4xl text-white uppercase font-medium max-w-7xl">
              A <span className="text-red-600">UI/UX Designer </span>
              and <span className="text-red-600">Web Developer </span>
              with a knack for creating intuitive, user-centered digital
              experiences. With a strong foundation in both design and
              development, I bridge the gap between{" "}
              <span className="italic bg-white text-black px-2">
                aesthetics
              </span>{" "}
              &<span className="font-bold"> functionality.</span>
            </h1>

            <Navlink
              href="/about"
              title="More About me"
              className="mt-4 text-sm font-medium uppercase text-red-600 rounded-full px-4 py-2 border border-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
