import Image from "next/image";
import { FaStar, FaStore, FaShoppingCart } from "react-icons/fa";
import type { ProductCardProps } from "@/types";

const OrganicProductCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100">
      {/* Product Image */}
      <div className="relative h-48 mb-4">
        <Image
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[#1A237E] font-medium">
          {product.rating.value}
        </span>
        <FaStar className="w-4 h-4 text-[#FFA000]" />
        <span className="text-gray-500 text-sm">
          ({(product.rating.count / 1000).toFixed(0)}k)
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#1A237E] font-medium text-lg mb-3 line-clamp-2">
        {product.title}
      </h3>

      {/* Seller */}
      <div className="flex items-center gap-2 mb-4">
        <FaStore className="w-4 h-4 text-[#27AE60]" />
        <span className="text-gray-600 text-sm">By {product.seller.name}</span>
      </div>

      {/* Price and Add Button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-gray-400 line-through text-sm">
            ${product.price.original.toFixed(2)}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-[#1A237E] font-bold">
              ${product.price.current.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm">/Qty</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product.id)}
          className="flex items-center gap-2 bg-[#E8F5E9] text-[#27AE60] px-4 py-2 rounded-full hover:bg-[#27AE60] hover:text-white transition-colors"
        >
          Add
          <FaShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default OrganicProductCard;
