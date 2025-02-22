import Navlink from "./navlink";
import { socials } from "@/const/socials";
import { TextEncrypted } from "./text-encrypted";

export default function ContactSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen h-96 sm:mt-24">
      <div className="w-full max-w-screen flex flex-col">
        <h2 className="text-white text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase font-bold will-change-auto">
          <TextEncrypted text="Contact" interval={50} />
        </h2>
        <div className="md:flex items-start justify-between">
          <h2 className="text-sm md:text-4xl font-medium text-white uppercase max-w-3xl">
            I am always open to new opportunities and collaborations. If you
            have any questions or want to work together,
            <span className="text-red-600 font-bold">
              feel free to reach out.
            </span>
          </h2>
          <div className="mt-4 md:mt-0 flex flex-col">
            {socials.map((social) => (
              <Navlink
                key={social.name}
                href={social.href}
                title={social.name}
                className="uppercase font-bold text-3xl hover:text-red-600"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
