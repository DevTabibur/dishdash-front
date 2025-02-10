import Link from "next/link";
import Image from "next/image";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link href={category.href} className="flex flex-col items-center group">
      <div className="relative w-40 h-40 rounded-full bg-[#E8F5E9] flex items-center justify-center mb-3 ">
        <Image
          src={category.image}
          alt={category.name}
          width={80}
          height={80}
          className="object-contain transition-transform duration-300 ease-in-out group-hover:scale-110"
        />
      </div>
      <h3 className="text-[#121535] font-bold text-center mb-1">
        {category.name}
      </h3>
      <p className="text-gray-500 text-sm font-medium">
        {category.productCount}+ Products
      </p>
    </Link>
  );
};

export default CategoryCard;
