import TextSplit from "@/components/animations/text-split";
import WorksSection from "@/components/works-section";

export default function Works() {
  return (
    <div className="">
      <section className="min-h-screen flex flex-col justify-center items-center px-4 space-y-16 pt-32">
        <TextSplit
          text1="Works"
          text2=""
          className="text-zinc-200 text-4xl md:text-6xl font-bold uppercase text-center leading-tight"
        />
        <WorksSection />;
      </section>
    </div>
  );
}
