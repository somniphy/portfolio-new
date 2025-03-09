import Navlink from "./navlink";
import { socials } from "@/const/socials";
import { TextEncrypted } from "./text-encrypted";
import Link from "next/link";

export default function ContactSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen h-96 sm:mt-24">
      <div className="w-full max-w-screen flex flex-col">
        <h2 className="text-black text-6xl md:text-7xl lg:text-8xl tracking-wide uppercase font-bold font-figtree will-change-auto">
          <TextEncrypted text="Contact" interval={50} />
        </h2>
        <div className="md:flex items-start justify-between">
          <h2 className="text-3xl font-medium text-black uppercase max-w-3xl font-figtree">
            I am always open to new opportunities and collaborations. If you
            have any questions or want to work together,{" "}
            <Link href="mailto:chan_penales@yahoo.com" className="text-cyber-yellow font-bold">
              feel free to reach out.
            </Link>
          </h2>
          <div className="mt-4 md:mt-0 flex flex-col">
            {socials.map((social) => (
              <Navlink
                key={social.name}
                href={social.href}
                title={social.name}
                className="uppercase font-medium text-3xl font-figtree hover:text-cyber-yellow text-black"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
