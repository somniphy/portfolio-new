import Link from "next/link";
import Navlink from "./navlink";
import { navigation as navlinks } from "@/const/navigation";

export default function Navbar() {
  return (
    <header>
      <div className="fixed top-[3%] left-[50%] translate-x-[-50%] w-[89%] max-w-[1440px] mx-auto mix-blend-exclusion z-[999]">
        <div className="flex justify-between items-center w-full ">
          <Link
            href="/"
            className="text-white text-base uppercase mix-blend-difference"
          >
            CP—
          </Link>
          <nav className="flex items-center gap-4">
            {navlinks.map((link) => (
              <Navlink
                key={link.name}
                href={link.href}
                title={link.name}
                className="uppercase text-sm mix-blend-difference"
              />
            ))}
           
          </nav>
        </div>
      </div>
    </header>
  );
}
