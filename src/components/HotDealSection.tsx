"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { HotDealsSectionProps } from "@/types/hotDeals";
import { HotDealsCard, RecommendedProductCard } from "./ui";

const HotDealsSection = ({ featuredDeal, products }: HotDealsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    if (currentIndex < products.length - 3) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0); // Loop back to start
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(products.length - 3); // Loop to end
    }
  };

  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(nextSlide, 3000);
    }
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentIndex]);

  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
    // Implement cart functionality
  };

  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
            Hot Deals Todays
          </h2>

          <div className="flex items-center gap-4">
            <Link
              href="/deals"
              className="text-gray-600 hover:text-[#27AE60] transition-colors"
            >
              View All Deals
            </Link>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  prevSlide();
                  setAutoplay(false);
                }}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  nextSlide();
                  setAutoplay(false);
                }}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Featured Deal */}
          <div className="lg:col-span-4">
            <HotDealsCard deal={featuredDeal} />
          </div>

          {/* Products Carousel */}
          <div className="lg:col-span-8 overflow-hidden">
            <motion.div
              animate={{ x: `-${currentIndex * 33.33}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
              style={{ width: `${(products.length / 3) * 100}%` }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  //   className="w-full md:w-1/2 lg:w-1/3"
                  //   style={{ flex: '0 0 33.33%' }}
                >
                  <RecommendedProductCard
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotDealsSection;
