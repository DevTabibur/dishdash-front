"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { OrganicFoodProps } from "@/types/organicFood";
import { OrganicProductCard } from "./ui";

const OrganicFood = ({ products }: OrganicFoodProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop back to end when at start
      setCurrentIndex(products.length - 6);
    }
  };

  const handleNext = () => {
    if (currentIndex < products.length - 6) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop back to start when at end
      setCurrentIndex(0);
    }
  };

  useEffect(() => {
    // Auto play functionality
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        handleNext();
      }, 3000); // Change slide every 3 seconds
    };

    const stopAutoPlay = () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };

    // Start autoplay
    startAutoPlay();

    // Pause on hover
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mouseenter", stopAutoPlay);
      container.addEventListener("mouseleave", startAutoPlay);
    }

    // Cleanup
    return () => {
      stopAutoPlay();
      if (container) {
        container.removeEventListener("mouseenter", stopAutoPlay);
        container.removeEventListener("mouseleave", startAutoPlay);
      }
    };
  }, [currentIndex]);

  const handleAddToCart = (id: string) => {
    console.log("Adding to cart:", id);
  };

  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
            Organic Food
          </h2>

          <div className="flex items-center gap-4">
            <Link
              href="/categories"
              className="text-gray-600 hover:text-[#27AE60] transition-colors"
            >
              All Categories
            </Link>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Previous products"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
                aria-label="Next products"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / 6)}%` }}
            transition={{ type: "tween", duration: 0.5, ease: "easeInOut" }}
            className="flex gap-6"
            style={{ width: `${(products.length * 100) / 6}%` }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="w-full md:w-1/2 lg:w-1/3 xl:w-1/6"
                style={{ flex: "0 0 16.666667%" }}
              >
                <OrganicProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OrganicFood;
