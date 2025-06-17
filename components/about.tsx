import Image from "next/image";
import TextStagger from "./animations/text-stagger";

export default function AboutSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Text Section */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-6xl md:text-8xl uppercase font-medium text-zinc-200">
              About Me
            </h1>
          <TextStagger className="text-xl font-light md:text-3xl text-zinc-200">
              Hi, I'm Christian Jay, a passionate and detail-oriented Freelance
              Web Developer and Web Designer with 3 years of experience crafting
              visually stunning, user-friendly, and responsive web applications.
              I specialize in turning creative ideas into seamless digital
              experiences by leveraging effective technologies and best
              practices in web development.
            </TextStagger>
          </div>

          {/* Image Section */}
          <div className="flex-1 relative aspect-square max-w-lg w-full">
            <Image
              src="/image-5.jpg"
              alt="profile-pic"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
