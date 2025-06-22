import TextSplit from "@/components/animations/text-split";
import TextStagger from "@/components/animations/text-stagger";
import Image from "next/image";
export default function About() {
  return (
    <main className="container mx-auto">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 space-y-16 pt-32">
        <TextSplit
          text1="About"
          text2=""
          className="text-zinc-200 text-4xl md:text-6xl font-bold uppercase text-center leading-tight"
        />
        <div className="flex flex-col items-center justify-center space-y-12 mx-auto container">
          <Image
            src="/bg.png"
            alt="profile"
            height={400}
            width={800}
            className="aspect-video object-cover"
          />
          <p className="text-zinc-200 text-4xl font-semibold">
            Hi, I&apos;m Christian
          </p>
          <div className="max-w-7xl">
            <TextStagger className="text-xl md:text-4xl text-zinc-400 text-justify">
              A passionate and detail-oriented Freelance Web Developer and UI/UX
              Designer with 3 years of experience crafting visually stunning,
              user-friendly, and responsive web applications. I specialize in
              turning creative ideas into seamless digital experiences by
              leveraging effective technologies and best practices in web
              development.
            </TextStagger>
          </div>
        </div>
      </section>
      <section className="px-4 py-32 space-y-12 ">
        <div className="text-center">
          <p className="text-sm font-medium uppercase text-zinc-400">
            Hire me for
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-4 ">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-medium">
              Web Development & Design Integration
            </h2>
            <ul className="space-y-2 text-lg text-zinc-400">
              <li>Custom website development (React, Vue, Next, Laravel)</li>
              <li>Design-to-code conversions (Figma to responsive code)</li>
              <li>Pixel-perfect UI with animations & interactions</li>
              <li>Headless CMS integration (Sanity)</li>
              <li>Creative e-commerce (Shopify, WordPress)</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-medium">
              Interaction & Animation
            </h2>
            <ul className="space-y-2 text-lg text-zinc-400">
              <li>GSAP-powered animations (scroll, hover, entrance)</li>
              <li>WebGL/Canvas visuals (Three.js, Pixi.js)</li>
              <li>SVG animations and creative interactions</li>
            </ul>
          </div>

          <div className="flex flex-col space-y-4 md:col-span-2">
            <h2 className="text-zinc-200 text-xl md:text-2xl font-medium">
              Others
            </h2>
            <ul className="space-y-2 text-lg text-zinc-400">
              <li>API integrations</li>
              <li>Custom CMS development</li>
              <li>Portfolio platforms</li>
              <li>SEO & performance optimization</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto flex flex-col space-y-12 py-24 px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase text-zinc-400">
            Experience
          </p>
        </div>
        <div className="flex flex-col space-y-16 ">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                September 2024 - Present
              </h3>
            </div>
            <div className="flex-2 flex flex-col space-y-4">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                Various Clients (Remote)
              </h3>
              <ul className="space-y-2 text-lg text-zinc-400 list-disc">
                <li>
                  Built and deployed full-stack websites using Next.js,
                  TailwindCSS, Node.js, and Laravel
                </li>
                <li>
                  Designed and developed custom Shopify themes for clothing and
                  lifestyle brands
                </li>
                <li>
                  Collaborated directly with clients to plan, prototype, and
                  deliver user-focused web solutions
                </li>
                <li>
                  Integrated headless CMS platforms (Sanity, Contentful) for
                  dynamic content management
                </li>
                <li>
                  Implemented GSAP and ScrollTrigger animations for interactive
                  and engaging experiences
                </li>
                <li>
                  Handled version control, deployments, and performance
                  optimization using Git, Vercel, and Lighthouse
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-16">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                August 2021 - December 2022
              </h3>
            </div>
            <div className="flex-2 flex flex-col space-y-4">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                Front-end Web Developer
              </h3>
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                KidTech Web Solutions
              </h3>
              <ul className="space-y-2 text-lg text-zinc-400 list-disc">
                <li>
                  Developed and maintained responsive websites using HTML, CSS,
                  JavaScript, and React
                </li>
                <li>Developed
                   custom websites using WordPress and PHP</li>
                <li>
                  Translated Figma designs into interactive, pixel-perfect UI
                  components
                </li>
                <li>
                  Collaborated with Back-end developers to improve website
                  functionality and performance
                </li>
                <li>Optimized web pages for speed, SEO, and accessibility</li>
                <li>Integrated REST APIs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto flex flex-col space-y-12 py-24 px-4">
        <div className="text-center">
          <p className="text-sm font-medium uppercase text-zinc-400">
            Education
          </p>
        </div>
        <div className="flex flex-col space-y-16 ">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                MSU-IIT 2024
              </h3>
            </div>
            <div className="flex-2 flex flex-col space-y-4">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                Bachelor of Science in Information Technology
              </h3>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-16 ">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                Iligan Computer Institute 2019
              </h3>
            </div>
            <div className="flex-2 flex flex-col space-y-4">
              <h3 className="text-zinc-200 text-xl md:text-2xl font-medium">
                ICT
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
