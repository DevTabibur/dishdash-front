"use client";

import { useState } from "react";
import Image from "next/image";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import type { FlashDealProductCardProps } from "@/types";

const FlashDealCard = ({ product, onAddToCart }: FlashDealProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart(product.id);
    }
  };

  return (
    <div
      className={`relative bg-white rounded-2xl p-4 transition-all duration-200 ${
        isHovered ? "border-[#27AE60] shadow-md group" : "border-gray-100"
      } border-2`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className="absolute top-4 right-4 bg-[#E8F5E9] text-[#27AE60] px-4 py-2 rounded-full text-sm font-medium hover:bg-[#27AE60] hover:text-white transition-colors z-10 flex items-center gap-2"
      >
        Add
        <FaShoppingCart className="w-4 h-4" />
      </button>

      {/* Product Image */}
      <div className="relative h-48 mb-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain group-hover:scale-105 transition-all duration-200"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Price */}
      <div className="mb-2">
        <div className="flex items-center gap-2">
          <span className="text-gray-400 line-through text-sm">
            ${product.originalPrice.toFixed(2)}
          </span>
          <span className="text-[#1A237E] font-bold text-lg">
            ${product.currentPrice.toFixed(2)}
          </span>
          <span className="text-gray-500 text-sm">
            /{product.unit || "Qty"}
          </span>
        </div>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[#FFA000]">{product.rating.value}</span>
        <FaStar className="w-4 h-4 text-[#FFA000]" />
        <span className="text-gray-500 text-sm">({product.rating.count}k)</span>
      </div>

      {/* Title */}
      <h3 className="text-[#1A237E] font-medium text-lg mb-2 line-clamp-2">
        {product.title}
      </h3>

      {/* Seller */}
      <div className="flex items-center gap-1 mb-2">
        <span className="text-[#27AE60] bg-[#E8F5E9] px-2 py-0.5 rounded-full text-sm">
          By {product.seller.name}
        </span>
      </div>

      {/* Progress */}
      <div className="space-y-1">
        <div className="text-sm text-gray-500">
          Sold: {product.soldCount}/{product.totalStock}
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#27AE60] rounded-full"
            style={{
              width: `${(product.soldCount / product.totalStock) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FlashDealCard;
