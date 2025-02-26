import Accordion from "./accordion";
import { TextEncrypted } from "./text-encrypted";
import { webdevservices, designservices } from "@/const/services";
import TextStagger from "./text-stagger";

export default function ServicesSection() {
  return (
    <div className="container mx-auto relative flex justify-center w-screen min-h-screen mt-24">
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
              className="text-2xl md:text-4xl font-bold  text-orange-600 uppercase"
            />
            <TextStagger className="text-4xl md:text-7xl font-bold  text-orange-600 uppercase ">
              Web Development
            </TextStagger>
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
              className="text-2xl md:text-4xl font-bold  text-orange-600 uppercase"
            />
            <TextStagger className="text-4xl md:text-7xl font-bold  text-orange-600 uppercase ">
              Design
            </TextStagger>
          </div>
          <div className="w-full md:w-1/3 mt-4 md:mt-0">
            <Accordion services={designservices} />
          </div>
        </div>
      </div>
    </div>
  );
}
