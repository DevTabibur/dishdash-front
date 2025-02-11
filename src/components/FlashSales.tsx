"use client";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FlashSaleCard } from "./ui";
import type { FlashSalesProps, FlashSaleItem } from "@/types";
import Link from "next/link";
import FreshVegetables from "../../public/images/category/vegetables-category.png";
import DailySnacks from "../../public/images/category/snacks-categoyr.png";
import FreshFruits from "../../public/images/category/fresh-fruits-category.png";
import FlashSaleBg1 from "../../public/images/flash-sale/flash-sale-bg1.png";
import FlashSaleBg2 from "../../public/images/flash-sale/flash-sale-bg2.png";

const defaultItems: FlashSaleItem[] = [
  {
    id: 1,
    title: "Fresh Vegetables",
    image: FreshVegetables.src,
    backgroundImage: FlashSaleBg1.src,
    backgroundColor: "#FFF5F5",
    href: "/flash-sale/vegetables",
    endDate: "2024-02-10T00:00:00",
  },
  {
    id: 2,
    title: "Daily Snacks",
    image: DailySnacks.src,
    backgroundColor: "#F1F8E9",
    backgroundImage: FlashSaleBg2.src,
    href: "/flash-sale/snacks",
    endDate: "2024-02-10T00:00:00",
  },
  {
    id: 3,
    title: "Fresh Fruits",
    image: FreshFruits.src,
    backgroundColor: "#E3F2FD",
    backgroundImage: FlashSaleBg1.src,
    href: "/flash-sale/fruits",
    endDate: "2024-02-10T00:00:00",
  },
];

const calculateTimeLeft = (endDate: string) => {
  const difference = new Date(endDate).getTime() - new Date().getTime();

  if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const FlashSaleTimer = ({ endDate }: { endDate: string }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(endDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div className="mt-4 text-center">
      <p className="text-sm text-gray-600">Time Left:</p>
      <div className="flex justify-center gap-2">
        {timeLeft.days > 0 && (
          <span className="text-lg font-bold">{timeLeft.days}d</span>
        )}
        <span className="text-lg font-bold">{timeLeft.hours}h</span>
        <span className="text-lg font-bold">{timeLeft.minutes}m</span>
        <span className="text-lg font-bold">{timeLeft.seconds}s</span>
      </div>
    </div>
  );
};

const FlashSales = ({ items = defaultItems }: FlashSalesProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Infinite sliding logic
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-slide functionality
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [currentIndex, isAutoPlaying]);

  // Pause auto-slide on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
            Flash Sales Today
          </h2>

          <div className="flex items-center gap-4">
            <Link
              href="/flash-sales"
              className="text-gray-600 hover:text-[#27AE60] transition-colors"
            >
              View All Deals
            </Link>
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <FaChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div
          ref={containerRef}
          className="overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            animate={{ x: `-${currentIndex * 50}%` }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              duration: 0.8,
            }}
            className="flex gap-6"
            style={{ width: `${items.length * 50}%` }}
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-1/2"
                style={{ flex: "0 0 50%" }}
              >
                <FlashSaleCard item={item} />
                <FlashSaleTimer endDate={item.endDate} />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FlashSales;
