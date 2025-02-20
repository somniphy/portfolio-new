import Accordion from './accordion';
import { TextEncrypted } from './text-encrypted';
 // Import the Accordion component
import { webdevservices, designservices, brandingservices } from '@/const/services'; // Import the service data

export default function ServicesSection() {
  return (
    <div className="relative min-h-screen px-8 w-screen flex items-center justify-center mb-36">
      <div className="w-full flex flex-col">
        <div className="flex flex-col">
          <TextEncrypted
            text="Services"
            className="text-6xl font-bold text-white uppercase"
          />
        </div>
        <div className="flex justify-between items-start mt-4">
          <div className="flex gap-4 items-start">
            <TextEncrypted
              text="01 —"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <TextEncrypted
              text="Web Development"
              className="text-7xl font-bold text-red-600 uppercase"
            />
          </div>
          <div className="w-1/3">
            {/* Pass webdevservices to the Accordion */}
            <Accordion services={webdevservices} />
          </div>
        </div>

        {/* Add more sections for design and branding services */}
        <div className="flex justify-between items-start mt-12">
          <div className="flex gap-4 items-start">
            <TextEncrypted
              text="02 —"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <TextEncrypted
              text="Design Services"
              className="text-7xl font-bold text-red-600 uppercase"
            />
          </div>
          <div className="w-1/3">
            {/* Pass designservices to the Accordion */}
            <Accordion services={designservices} />
          </div>
        </div>

        <div className="flex justify-between items-start mt-12">
          <div className="flex gap-4 items-start">
            <TextEncrypted
              text="03 —"
              className="text-4xl font-bold text-red-600 uppercase"
            />
            <TextEncrypted
              text="Branding Services"
              className="text-7xl font-bold text-red-600 uppercase"
            />
          </div>
          <div className="w-1/3">
            {/* Pass brandingservices to the Accordion */}
            <Accordion services={brandingservices} />
          </div>
        </div>
      </div>
    </div>
  );
}