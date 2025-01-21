"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import type { BrandCarouselProps } from "@/types/brands";
import { BrandLogo } from "./ui";

const BrandCarousel = ({
  title = "Shop by Brands",
  brands,
  autoPlayInterval = 3000,
  itemsToShow = {
    mobile: 3,
    tablet: 5,
    desktop: 8,
  },
}: BrandCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(itemsToShow.desktop);
  const controls = useAnimation();
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
    let interval: NodeJS.Timeout;

    const startAutoPlay = () => {
      interval = setInterval(() => {
        if (!isHovered) {
          handleNext();
        }
      }, autoPlayInterval);
    };

    startAutoPlay();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered, currentIndex, brands.length, itemsPerView]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.max(0, prev - 1);
      animateSlide(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = Math.min(brands.length - itemsPerView, prev + 1);
      animateSlide(newIndex);
      return newIndex;
    });
  };

  const animateSlide = (index: number) => {
    controls.start({
      x: `-${index * (100 / itemsPerView)}%`,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  };

  return (
    <div
      className="bg-[#E8F5E9]/30 rounded-2xl p-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[#1A237E] text-xl font-bold">{title}</h2>

        <div className="flex items-center gap-4">
          <Link
            href="/brands"
            className="text-gray-600 hover:text-[#27AE60] transition-colors"
          >
            View All Deals
          </Link>

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
              disabled={currentIndex >= brands.length - itemsPerView}
              className="w-8 h-8 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors"
            >
              <FaChevronRight className="w-4 h-4 text-[#1A237E]" />
            </button>
          </div>
        </div>
      </div>

      <div ref={containerRef} className="overflow-hidden">
        <motion.div
          animate={controls}
          className="flex gap-6"
          style={{
            width: `${(brands.length * 100) / itemsPerView}%`,
          }}
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.1}
        >
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="flex-shrink-0"
              style={{ width: `${100 / brands.length}%` }}
            >
              <BrandLogo brand={brand} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default BrandCarousel;
