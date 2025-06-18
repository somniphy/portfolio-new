
import Socials from "@/components/socials";
import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-200 px-4 py-32 flex flex-col items-center">
      <section className="max-w-3xl w-full text-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold uppercase tracking-tight">
          Let&apos;s Work Together
        </h1>
        <p className="text-zinc-400 text-lg">
          Whether you have a project in mind or just want to say hello, feel
          free to reach out. I’m currently open for freelance work and
          collaborations.
        </p>
      </section>
      <section className="py-24 max-w-3xl w-full space-y-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-4xl font-bold uppercase tracking-tight">
            Send an email to
          </h2>
          <Link
            href="mailto:penalescjay@gmail.com"
            className="text-lg text-zinc-400"
          >
            penalescjay@gmail.com
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h2 className="text-4xl font-bold uppercase tracking-tight">
            or reach me using my socials
          </h2>
          <div className="mt-4">
            <Socials />
          </div>
        </div>
      </section>
    </main>
  );
}
