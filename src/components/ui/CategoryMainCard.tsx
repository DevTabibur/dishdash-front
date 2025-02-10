/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { CategoryCardProps } from "@/types";

const CategoryMainCard = ({ item }: CategoryCardProps) => {
  const CardContent = () => (
    <div className="relative flex items-center justify-between py-12 px-6 h-full w-full">
      {/* Left Side: Text Content */}
      <div className="w-1/2 space-y-3 relative z-10">
        <p className="text-[#1A237E] text-lg">{item.prefix}</p>
        <h3 className="text-[#1A237E] text-2xl font-bold">{item.title}</h3>

        <button className="inline-flex items-center gap-2 bg-[#27AE60] text-white px-4 py-2 rounded-full w-fit hover:bg-[#229954] transition-colors">
          <span>Shop Now</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Right Side: Image */}
      <div className="w-1/2 flex justify-end relative">
        <Image
          src={item.image}
          alt={item.title}
          width={180}
          height={180}
          className="object-contain"
        />
      </div>

      {/* Top Right Blob */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#ffcf33] to-[#ff6f61] rounded-full opacity-50 transform translate-x-5 -translate-y-5"></div>
    </div>
  );

  const cardClasses =
    "block relative overflow-hidden rounded-2xl h-[200px] transition-transform hover:scale-[1.02] duration-200 hover:shadow-md";

  return item.href ? (
    <Link
      href={item.href}
      className={cardClasses}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <CardContent />
    </Link>
  ) : (
    <div
      className={cardClasses}
      style={{ backgroundColor: item.backgroundColor }}
    >
      <CardContent />
    </div>
  );
};

export default CategoryMainCard;
