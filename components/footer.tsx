import Link from "next/link";
import LocalTime from "./local-time";
import Socials from "./socials";

export default function Footer() {
  return (
    <footer className="w-full px-4 border-t border-zinc-800 py-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-zinc-900 text-2xl font-bold uppercase leading-tight">
          Christian Penales &copy; 2025
        </div>

        <div className="flex flex-col items-start gap-4 ">
          <p className="text-zinc-900 font-medium">Socials</p>
          <Socials />
        </div>

        <div className="text-zinc-800 text-sm">
          <p>Let&apos;s connect:</p>
          <Link
            href="mailto:penalescjay@gmail.com"
            className="text-zinc-800 hover:text-zinc-900 transition"
          >
            penalescjay@gmail.com
          </Link>
        </div>

        <div className="flex flex-col">
          <p className="text-zinc-800 text-sm">Philippines</p>
          <LocalTime />
        </div>
      </div>
    </footer>
  );
}
