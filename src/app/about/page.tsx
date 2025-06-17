import TextSplit from "@/components/animations/text-split";
import TextStagger from "@/components/animations/text-stagger";
import Image from "next/image";
export default function About() {
  return (
    <main>
      <section className="min-h-screen flex flex-col justify-center items-center px-4 space-y-16 pt-32">
        <TextSplit
          text1="About"
          text2="Me"
          className="text-zinc-200 text-4xl md:text-6xl font-bold uppercase text-center leading-tight"
        />
        <div className="flex flex-col items-center justify-center space-y-12">
          <Image
            src="/bg.png"
            alt="profile"
            height={400}
            width={800}
            className="aspect-video object-cover"
          />
          <p className="text-zinc-200 text-4xl font-semibold">
            Hi, I’m Christian — a Creative Developer.
          </p>
          <div className="max-w-6xl">
            <TextStagger className="text-lg text-zinc-400 text-center ">
              A passionate and detail-oriented Freelance Web Developer and Web
              Designer with 3 years of experience crafting visually stunning,
              user-friendly, and responsive web applications. I specialize in
              turning creative ideas into seamless digital experiences by
              leveraging effective technologies and best practices in web
              development.
            </TextStagger>
          </div>
        </div>
      </section>
      <section className="px-4 py-32 space-y-12 text-zinc-200">
        <div className="text-center">
          <p className="text-sm font-medium uppercase text-zinc-400">
            Hire me for
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="grid grid-cols-2 items-start gap-12">
            <h2 className="text-2xl md:text-4xl font-bold min-w-[120px]">
              Web
            </h2>
            <ul className="space-y-2 text-lg">
              <li>Front-end Development</li>
              <li>Shopify Theme Development</li>
              <li>Portfolio Websites</li>
              <li>Web Systems</li>
            </ul>
            <h2 className="text-2xl md:text-4xl font-bold min-w-[120px]">
              Design
            </h2>
            <ul className="space-y-2 text-lg ">
              <li>Web Design</li>
              <li>User Interface</li>
              <li>User Experience</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
