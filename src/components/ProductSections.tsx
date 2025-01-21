"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { ProductSectionProps } from "@/types/productSection";
import ProductSectionCard from "./ui/ProductSectionCard";

export const ProductSection = ({ title, products }: ProductSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, products.length - 4);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <div className="bg-[#E8F5E9]/30 rounded-2xl p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="space-y-1">
          <h2 className="text-[#1A237E] font-bold text-lg">{title}</h2>
          <div className="h-0.5 w-12 bg-[#27AE60]" />
        </div>
        <div className="flex gap-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
          >
            <FaChevronLeft className="w-4 h-4 text-[#1A237E]" />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
            className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
          >
            <FaChevronRight className="w-4 h-4 text-[#1A237E]" />
          </button>
        </div>
      </div>

      {/* Products List */}
      <div className="space-y-2">
        {products.slice(currentIndex, currentIndex + 4).map((product) => (
          <ProductSectionCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
