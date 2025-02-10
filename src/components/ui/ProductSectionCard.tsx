import Image from "next/image";
import { FaStar } from "react-icons/fa";
import type { ProductCardProps } from "@/types";

const ProductSectionCard = ({ product }: ProductCardProps) => {
  return (
    <div className="flex items-start gap-3 p-3 hover:bg-gray-50 transition-colors rounded-lg">
      {/* Product Image */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover"
          sizes="64px"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-1">
          <span className="text-[#1A237E] text-sm font-medium">
            {product.rating.value}
          </span>
          <FaStar className="w-3.5 h-3.5 text-[#FFA000]" />
          <span className="text-gray-500 text-xs">
            ({(product.rating.count / 1000).toFixed(0)}k)
          </span>
        </div>

        {/* Title */}
        <h3 className="text-[#1A237E] text-sm font-medium mb-1 truncate">
          {product.title}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-[#1A237E] font-bold text-sm">
            ${product.price.current.toFixed(2)}
          </span>
          <span className="text-gray-400 text-sm">
            ${product.price.original.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductSectionCard;
