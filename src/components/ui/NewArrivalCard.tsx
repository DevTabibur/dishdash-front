import { ProductCardProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { FaStar, FaStore } from "react-icons/fa";

const NewArrivalCard = ({ product, onAddToCart }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg p-4 border border-gray-100 hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 mb-3">
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
        <span className="font-medium">{product.rating.value}</span>
        <FaStar className="w-4 h-4 text-[#FFA000]" />
        <span className="text-gray-500 text-sm">
          ({(product.rating.count / 1000).toFixed(0)}k)
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[#1A237E] font-medium text-sm mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Seller */}
      <div className="flex items-center gap-1 mb-3">
        <FaStore className="w-4 h-4 text-[#27AE60]" />
        <Link
          href={`/seller/${product.seller.id}`}
          className="text-sm text-gray-600 hover:text-[#27AE60]"
        >
          By {product.seller.name}
        </Link>
      </div>

      {/* Price and Add to Cart */}
      <div className="flex items-center justify-between">
        <div>
          <div className="text-gray-400 line-through text-sm">
            ${product.price.original.toFixed(2)}
          </div>
          <div className="flex items-center gap-1">
            <span className="font-bold text-[#1A237E]">
              ${product.price.current.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm">/Qty</span>
          </div>
        </div>

        <button
          onClick={() => onAddToCart(product.id)}
          className="bg-[#27AE60] text-white px-4 py-2 rounded-lg hover:bg-[#229954] transition-colors"
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default NewArrivalCard;
