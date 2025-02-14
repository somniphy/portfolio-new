import Image from "next/image";

import { TextEncrypted } from "./text-encrypted";

export default function AboutSection() {
  return (
    <section className="px-[5.5%] relative space-y-6">
      <h2 className="text-white text-7xl tracking-wide uppercase font-bold will-change-auto">
        <TextEncrypted text="About" interval={50} />
      </h2>
      <hr className="border-white border-1 w-full" />
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col w-1/2 space-y-4">
          <h1 className="text-2xl uppercase font-bold">Christian Penales</h1>
          <p className="text-sm uppercase text-white">
            A web developer, and with a strong passion for designing and
            building exceptional digital experiences. Seeking new challenges and
            learning new things in the field of web development.
          </p>
          <p className="text-sm uppercase text-white">
            When I am not coding, I enjoy producing music and gaming. 
          </p>
        </div>
        <div className="w-1/2 flex justify-end">
          <Image src="/image-5.jpg" alt="Me" width={300} height={300} />
        </div>
      </div>
    </section>
  );
}
