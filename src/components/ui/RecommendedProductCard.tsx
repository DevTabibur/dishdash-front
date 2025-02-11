"use client";

import Image from "next/image";
import { FaStar, FaStore, FaShoppingCart } from "react-icons/fa";
import type { RecommendedProductCardProps } from "@/types";
import { motion } from "framer-motion";

const RecommendedProductCard = ({
  product,
  onAddToCart,
}: RecommendedProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group bg-white rounded-2xl p-4 transition-all duration-200 relative flex flex-col h-full 
                 border border-gray-200 hover:border-[#299e60]"
    >
      {/* Sale Badge */}
      {product.saleType && (
        <div
          className={`absolute top-4 left-4 px-3 py-1 rounded-full text-white text-sm font-medium z-10 
                      ${product.saleType === "Best Sale" ? "bg-blue-500" : "bg-red-500"}`}
        >
          {product.saleType}
        </div>
      )}

      {/* Product Image */}
      <div className="relative h-48 mb-4 mx-auto w-full">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-all duration-200 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-[#1A237E] font-medium text-lg mb-2 line-clamp-2">
          {product.title}
        </h3>

        {/* Seller */}
        <div className="flex items-center gap-1 mb-3">
          <FaStore className="w-4 h-4 text-[#27AE60]" />
          <span className="text-gray-600 text-sm">
            By {product.seller.name}
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[#1A237E] font-bold text-lg">
            ${product.currentPrice.toFixed(2)}
          </span>
          <span className="text-gray-400 line-through text-sm">
            /Qty${product.originalPrice.toFixed(2)}
          </span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          <span className="text-[#1A237E] font-medium">
            {product.rating.value}
          </span>
          <FaStar className="w-4 h-4 text-[#FFA000]" />
          <span className="text-gray-500 text-sm">
            ({(product.rating.count / 1000).toFixed(0)}k)
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={() => onAddToCart(product.id)}
          className="mt-auto w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full 
                     text-[#27AE60] font-medium transition-all duration-200 
                     bg-[#E8F5E9] hover:bg-[#27AE60] hover:text-white"
        >
          Add To Cart
          <FaShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </motion.div>
  );
};

export default RecommendedProductCard;
