"use client";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { FaShoppingCart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState, useEffect } from "react";

import BannerImage from "../../public/images/banner/hero-banner-bg.png";
import FreshVegetables from "../../public/images/banner/banner-fresh-image.png";
import HealthyLiving from "../../public/images/banner/banner-healthy-living-image.png";

const slides = [
  {
    title: "Fresh Groceries Delivered to Your Doorstep",
    buttonText: "Shop Now",
    image: FreshVegetables,
  },
  {
    title: "Healthy Living Starts Here",
    buttonText: "Explore Products",
    image: HealthyLiving,
  },
];

const HeroBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="max-w-[90%] mx-auto py-6 px-4">
      <div className="max-w-full rounded-[20px] md:rounded-[50px] overflow-hidden relative bg-green-100">
        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={BannerImage}
            alt="Hero Banner Background"
            layout="fill"
            objectFit="cover"
            className="rounded-[20px] md:rounded-[50px]"
          />
        </div>

        {/* Slider Content */}
        <div className="relative z-10">
          <div className="container mx-auto px-4 md:px-12 py-4">
            <div className="min-h-[400px] md:min-h-[400px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.8 }}
                  className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                >
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 pt-12 md:pt-0 text-center md:text-left">
                    <h1 className="text-black text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                      {slides[currentSlide].title}
                    </h1>
                    <Link
                      href="/shop"
                      className="inline-flex items-center gap-2 bg-[#27AE60] text-black px-6 py-3 rounded-full hover:bg-[#229954] transition-colors"
                    >
                      <span>{slides[currentSlide].buttonText}</span>
                      <FaShoppingCart className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Slide Image */}
                  <div className="w-full md:w-1/2">
                    <Image
                      src={slides[currentSlide].image}
                      alt="Grocery Items"
                      width={600}
                      height={500}
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <button
                onClick={prevSlide}
                className="absolute left-2 md:left-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300 ease-in-out hover:bg-[#299e60] hover:shadow-xl"
                aria-label="Previous slide"
              >
                <FaChevronLeft className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-white" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-2 md:right-1 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 transition-all duration-300 ease-in-out hover:bg-[#299e60] hover:shadow-xl"
                aria-label="Next slide"
              >
                <FaChevronRight className="w-4 h-4 text-gray-600 transition-all duration-300 ease-in-out group-hover:text-white" />
              </button>

              {/* Scroll Indicator */}
              {/* <div className="absolute -bottom-0 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center shadow-lg">
                  <FaChevronDown className="w-5 h-5 text-black animate-bounce" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
