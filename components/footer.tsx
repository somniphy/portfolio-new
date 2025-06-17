export default function Footer() {
  return (
    <footer className="w-full px-4 border-t border-zinc-800 py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Logo or Name */}
        <div className="text-zinc-200 text-4xl font-medium">
          Christian Penales &copy; 2025
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-start gap-4 text-zinc-400 text-sm">
          <a href="/" className="hover:text-zinc-200 transition">
            Index
          </a>
          <a href="/about" className="hover:text-zinc-200 transition">
            About
          </a>
          <a href="/services" className="hover:text-zinc-200 transition">
            Services
          </a>
          <a href="/works" className="hover:text-zinc-200 transition">
            Works
          </a>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col items-start gap-4 text-zinc-400 text-sm">
          <a href="/" className="hover:text-zinc-200 transition">
            LinkedIn
          </a>
          <a href="/about" className="hover:text-zinc-200 transition">
            Dribbble
          </a>
          <a href="/works" className="hover:text-zinc-200 transition">
            GitHub
          </a>
          <a href="/works" className="hover:text-zinc-200 transition">
            OnlineJobs
          </a>
        </div>

        {/* Socials or Email */}
        <div className="text-zinc-400 text-sm">
          <p>Let's connect:</p>
          <a
            href="mailto:hello@christudio.dev"
            className="hover:text-zinc-200 transition"
          >
            penalescjay@gmail.com
          </a>
        </div>
      </div>
    </footer>
  );
}
