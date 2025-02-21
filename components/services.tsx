import Accordion from "./accordion";
import { TextEncrypted } from "./text-encrypted";
import { webdevservices, designservices } from "@/const/services";

export default function ServicesSection() {
  return (
    <div className="relative min-h-96 md:min-h-screen px-4 mt-24 md:mt-0">
      <div className="w-full max-w-screen flex flex-col">
        {/* Section Title */}
        <div className="flex flex-col">
          <TextEncrypted
            text="Services"
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-white uppercase"
          />
        </div>

        {/* Web Development Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          <div className="flex gap-2 md:gap-4 items-start">
            <TextEncrypted
              text="01"
              className="text-2xl md:text-4xl font-bold text-red-600 uppercase"
            />
            <TextEncrypted
              text="Web Development"
              className="text-4xl md:text-7xl font-bold text-red-600 uppercase "
            />
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <Accordion services={webdevservices} />
          </div>
        </div>

        {/* Design Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mt-8">
          <div className="flex gap-2 md:gap-4 items-start">
            <TextEncrypted
              text="02"
              className="text-2xl md:text-4xl font-bold text-red-600 uppercase"
            />
            <TextEncrypted
              text="Design"
              className="text-4xl md:text-7xl font-bold text-red-600 uppercase"
            />
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <Accordion services={designservices} />
          </div>
        </div>
      </div>
    </div>
  );
}