import Navlink from "./navlink";
import { socials } from "@/const/socials";
import { TextEncrypted } from "./text-encrypted";

export default function ContactSection() {
  return (
    <div className="px-8 relative min-h-96">
      <h2 className="text-white text-6xl tracking-wide uppercase font-bold will-change-auto mt-24">
        <TextEncrypted text="Contact" interval={50} />
      </h2>
      <div className="mt-4 flex justify-between items-center w-full">
        <h2 className="text-2xl md:text-4xl font-medium text-white uppercase my-4 max-w-2xl">
          I am always open to new opportunities and collaborations. If you have
          any questions or want to work together,{" "}
          <span className="text-red-600 font-bold">feel free to reach out.</span>
        </h2>
        <div className="flex flex-col gap-2 items-start">
          {socials.map((social) => (
            <Navlink
              key={social.name}
              href={social.href}
              title={social.name}
              className="uppercase font-bold text-xl md:text-3xl hover:text-red-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
