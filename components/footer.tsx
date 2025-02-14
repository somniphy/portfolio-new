import { socials } from "@/const/socials";
import Navlink from "@/components/navlink";
import Link from "next/link";
export default function Footer() {
  return (
    <footer>
      <div className="absolute bottom-[3%] left-[50%] translate-x-[-50%] w-[89%] max-w-[1440px] mx-auto mix-blend-exclusion z-[999]">
        <div className="flex justify-between items-center w-full ">
          <div className="inline-flex gap-4">
            {socials.map((social) => (
              <Navlink
                key={social.name}
                href={social.href}
                title={social.name}
                className="uppercase text-sm"
              />
            ))}
          </div>
          <Link
            href={"mailto:penalescjay@gmail.com"}
            className="text-white text-sm uppercase"
          >
            penalescjay@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
