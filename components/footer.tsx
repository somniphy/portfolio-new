import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full px-4 border-t border-zinc-800 py-24">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo or Name */}
        <div className="text-zinc-200 text-4xl font-medium">
          Christian Penales &copy; 2025
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start gap-4 text-zinc-400 text-sm">
          <Link href="/" className="hover:text-zinc-200 transition">
            Index
          </Link>
          <Link href="/about" className="hover:text-zinc-200 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-zinc-200 transition">
            Services
          </Link>
          <Link href="/works" className="hover:text-zinc-200 transition">
            Works
          </Link>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col items-start gap-4 text-zinc-400 text-sm">
          <Link href="/" className="hover:text-zinc-200 transition">
            LinkedIn
          </Link>
          <Link href="/about" className="hover:text-zinc-200 transition">
            Dribbble
          </Link>
          <Link href="/works" className="hover:text-zinc-200 transition">
            GitHub
          </Link>
          <Link href="/works" className="hover:text-zinc-200 transition">
            OnlineJobs
          </Link>
        </div>

        {/* Socials or Email */}
        <div className="text-zinc-400 text-sm">
          <p>Let&apos;s connect:</p>
          <Link
            href="mailto:hello@christudio.dev"
            className="hover:text-zinc-200 transition"
          >
            penalescjay@gmail.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
