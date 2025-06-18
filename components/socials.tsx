import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
} from "lucide-react";
import Link from "next/link";

export default function Socials() {
  return (
    <div className="flex items-center space-x-4">
      <Link
        className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
        href="https://github.com/somniphy/"
        target="_blank"
      >
        <GithubIcon className="h-5 w-5" />
      </Link>
      <Link
        className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
        href="https://www.linkedin.com/in/chrispenales/"
        target="_blank"
      >
        <LinkedinIcon className="h-5 w-5" />
      </Link>
      <Link
        className="text-zinc-200 bg-zinc-950 hover:bg-zinc-700 transition-colors duration-150 rounded-full py-2 px-2"
        href="https://dribbble.com/chan999u/shots"
        target="_blank"
      >
        <DribbbleIcon className="h-5 w-5" />
      </Link>
    </div>
  );
}
