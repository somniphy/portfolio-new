import { ArrowDown } from "lucide-react";
import Navlink from "./navlink";
import { TextEncrypted } from "./text-encrypted";

export default function Hero() {
  return (
    <div className="min-h-screen min-w-screen h-screen w-screen">
      <div className="container mx-auto flex flex-col mt-24 items-left">
        <TextEncrypted
          text=" Creative"
          className="text-zinc-100 text-[12vw] font-medium uppercase leading-44"
        />
        <TextEncrypted
          text=" Developer"
          className="text-zinc-100 text-[12vw] font-medium uppercase leading-44"
        />
      </div>
      <div className="container mx-auto flex items-center mt-24 items-left">
        <Navlink
          title="Explore Projects"
          href="/projects"
          className="text-orange-600 text-[2vw] font-medium uppercase "
        />
        <ArrowDown className="text-orange-600 h-12 w-12 " />
      </div>
    </div>
  );
}
