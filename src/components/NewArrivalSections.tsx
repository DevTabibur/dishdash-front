"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { NewArrivalsProps } from "@/types";
import { NewArrivalCard } from "./ui";

const NewArrivalSections = ({
  products,
  autoPlayInterval = 3000,
  itemsToShow = {
    mobile: 1,
    tablet: 3,
    desktop: 5,
  },
}: NewArrivalsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(itemsToShow.desktop);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update items per view based on screen size
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(itemsToShow.mobile);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(itemsToShow.tablet);
      } else {
        setItemsPerView(itemsToShow.desktop);
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, [itemsToShow]);

  // Auto play functionality
  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isHovered, currentIndex, products.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(products.length - itemsPerView, prev + 1),
    );
  };

  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
    // Implement cart functionality
  };

  return (
    <section
      className="py-12"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1A237E] text-2xl font-bold">New Arrivals</h2>

          <div className="flex items-center gap-4">
            <Link
              href="/new-arrivals"
              className="text-gray-600 hover:text-[#27AE60] transition-colors"
            >
              View All Deals
            </Link>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex >= products.length - itemsPerView}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Carousel */}
        <div ref={containerRef} className="overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="flex gap-6"
            style={{ width: `${(products.length * 100) / itemsPerView}%` }}
            drag="x"
            dragConstraints={containerRef}
            dragElastic={0.1}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0"
                style={{ width: `${100 / products.length}%` }}
              >
                <NewArrivalCard
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

export default NewArrivalSections;
