import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import DeliveryRider from "../../public/images/delivery/delivery-man.png";
import SpecialSnacks from "../../public/images/delivery/special-snacks-img.png";
import DeliveryBg from "../../public/images/delivery/delivery-bg.png";

const DeliveryBanner = () => {
  return (
    <section className="w-full px-4 py-6">
      <div className="max-w-[90%] mx-auto">
        <div className="relative bg-[#27ae5fee] rounded-2xl overflow-hidden">
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url(${DeliveryBg.src})`,
              backgroundSize: "contain",
              backgroundRepeat: "repeat",
              backgroundPosition: "center",
            }}
          />

          <div className="relative flex items-center justify-between px-6 py-4 md:px-8 md:py-6">
            {/* Left - Delivery Person */}
            <div className="hidden md:block w-1/4">
              <Image
                src={DeliveryRider.src}
                alt="Delivery Person"
                width={180}
                height={180}
                className="object-contain -ml-4"
                priority
              />
            </div>

            {/* Center - Content */}
            <div className="flex-1 text-center text-white md:px-6">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                We Delivery on Next Day from 10:00 AM to 08:00 PM
              </h2>
              <p className="text-white/90 mb-4 text-sm md:text-base">
                For Orders starts from $100
              </p>
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-5 py-2.5 rounded-full hover:bg-[#F4511E] transition-colors text-sm md:text-base"
              >
                Shop Now
                <FaArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Right - Food Image */}
            <div className="hidden lg:block w-1/4">
              <Image
                src={SpecialSnacks.src}
                alt="Fresh Food Items"
                width={250}
                height={160}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliveryBanner;
