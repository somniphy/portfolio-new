
import Navlink from "./navlink";
import { socials } from "@/const/socials";
import { TextEncrypted } from "./text-encrypted";

export default function ContactSection() {
  return (
    <div className="px-[5.5%] relative h-1/2">
      <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto mt-24">
        <TextEncrypted text="Contact" interval={50} />
      </h2>

      <hr className="border-white border-1 w-full mb-4 mt-4" />
      <h2 className="text-sm font-medium text-white uppercase my-4 max-w-2xl">
        I am always open to new opportunities and collaborations. If you have any
        questions or want to work together, feel free to reach out.
      </h2>

      <div className="mt-12 flex justify-between items-center w-full mb-4">
        <p className="text-sm font-medium text-white uppercase">
          PENALESCJAY@GMAIL.COM
        </p>

        <div className="flex gap-2">
          {socials.map((social) => (
            <Navlink
              key={social.name}
              href={social.href}
              title={social.name}
              className="uppercase text-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
