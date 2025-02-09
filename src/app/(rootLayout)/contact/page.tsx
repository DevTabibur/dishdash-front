import { Breadcrumb, ContactInfo, ContactForm } from "@/components";
import Image from "next/image";
import HighFive from "../../../../public/assets/svg/highfive.svg";

const page = () => {
  return (
    <div>
      <Breadcrumb />

      <div className="min-h-screen bg-gray-50">
        <div className="max-w-[90%] mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <Image
              src={HighFive}
              alt="Logo"
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
            <p className="mt-2 text-gray-600">
              We&apos;d love to hear from you. Please fill out the form below or
              use our contact information.
            </p>
          </div>

          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ContactForm />
            <ContactInfo />
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <ContactForm />
            </div>
            <div className="md:col-span-5">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
