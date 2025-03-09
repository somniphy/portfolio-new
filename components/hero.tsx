import { socials } from "@/const/socials";
import Image from "next/image";
import Navlink from "./navlink";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-black">
      <h1 className="text-5xl font-figtree uppercase font-medium">
        Front-end Developer and UI/UX Designer
      </h1>
      <div className="absolute bottom-4 flex justify-between items-center w-screen mx-auto container z-4 font-figtree">
        <h3 className="text-sm uppercase text-black font-medium flex-1 text-left">
          penalescjay@gmail.com
        </h3>

        <h3 className="text-sm uppercase text-black font-medium flex-1 text-center">
          Available for work
        </h3>

        <div className="flex-1 flex justify-end gap-4">
          {socials.map((social) => (
            <Navlink
              key={social.name}
              href={social.href}
              title={social.name}
              className="uppercase font-medium text-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
