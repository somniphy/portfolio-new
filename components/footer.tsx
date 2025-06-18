import Link from "next/link";
import LocalTime from "./local-time";

export default function Footer() {
  return (
    <footer className="w-full px-4 border-t border-zinc-800 py-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
   
        <div className="text-zinc-200 text-2xl font-medium">
          Christian Penales &copy; 2025
        </div>

        <div className="flex flex-col items-start gap-4 ">
          <p className="text-zinc-200 font-medium">Socials</p>
          <Link
            href="/"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="/about"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition"
          >
            Dribbble
          </Link>
          <Link
            href="/works"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition"
          >
            GitHub
          </Link>
          <Link
            href="/works"
            className="text-sm text-zinc-400 hover:text-zinc-200 transition"
          >
            OnlineJobs
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <p className="text-zinc-400 text-sm">Philippines</p>
          <LocalTime />
        </div>

        <div className="text-zinc-400 text-sm">
          <p>Let&apos;s connect:</p>
          <Link
            href="mailto:hello@christudio.dev"
            className="text-zinc-400 hover:text-zinc-200 transition"
          >
            penalescjay@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
