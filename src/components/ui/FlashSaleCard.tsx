import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { FlashSaleCardProps } from "@/types/flashSales";
import Countdown from "./CountDown";

const FlashSaleCard = ({ item }: FlashSaleCardProps) => {
  return (
    <div
      className="rounded-3xl p-6 h-full relative overflow-hidden"
      style={{
        backgroundColor: item.backgroundColor,
        backgroundImage: `url(${item.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "soft-light",
        position: "relative",
        zIndex: 0,
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
        {/* Left side - Image */}
        <div className="relative h-[200px] md:h-full order-2 md:order-1">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-contain object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Right side - Content */}
        <div className="flex flex-col justify-between order-1 md:order-2">
          <div className="space-y-4">
            <h3 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
              {item.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              <Countdown endDate={item.endDate} />
            </div>
          </div>

          <Link
            href={item.href}
            className="inline-flex items-center gap-2 bg-[#27AE60] text-white px-6 py-3 rounded-full hover:bg-[#229954] transition-colors mt-4 w-fit"
          >
            <span>Shop Now</span>
            <FaArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleCard;
