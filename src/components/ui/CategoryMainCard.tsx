/* eslint-disable react/prop-types */
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import type { CategoryCardProps } from "@/types/categoryMain";

const CategoryMainCard = ({ item }: CategoryCardProps) => {
  const CardContent = () => (
    <>
      <div className="p-6 h-full flex flex-col justify-between relative z-10">
        <div className="space-y-1">
          <p className="text-[#1A237E] text-lg">{item.prefix}</p>
          <h3 className="text-[#1A237E] text-2xl font-bold">{item.title}</h3>
        </div>

        <button className="inline-flex items-center gap-2 bg-[#27AE60] text-white px-4 py-2 rounded-full w-fit hover:bg-[#229954] transition-colors">
          <span>Shop Now</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="absolute right-0 bottom-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-contain object-right-bottom"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );

  const cardClasses =
    "block relative overflow-hidden rounded-2xl h-[200px] transition-transform hover:scale-[1.02]";

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
