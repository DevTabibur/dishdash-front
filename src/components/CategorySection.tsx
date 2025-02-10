"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CategoryCard } from "@/components/ui";
import type { Category } from "@/types";
import FishAndMeatsCategory from "../../public/images/category/fish-and-meats-category.png";
import DairyAndEggsCategory from "../../public/images/category/dairy-and-eggs.png";
import SnacksCategory from "../../public/images/category/snacks-categoyr.png";
import FrozenFoodsCategory from "../../public/images/category/frozen-foods-category.png";
import VegetablesCategory from "../../public/images/category/vegetables-category.png";
import DessertsCategory from "../../public/images/category/desserts-category.png";
import DrinksAndJuiceCategory from "../../public/images/category/drinks-and-juice-category.png";
import AnimalsFoodCategory from "../../public/images/category/animals-food-categoyr.png";
import FreshFruitsCategory from "../../public/images/category/fresh-fruits-category.png";

const categories: Category[] = [
  {
    id: 1,
    name: "Fish & Meats",
    image: FishAndMeatsCategory.src,
    productCount: 125,
    href: "/category/fish-and-meats",
  },
  {
    id: 2,
    name: "Dairy & Eggs",
    image: DairyAndEggsCategory.src,
    productCount: 125,
    href: "/category/dairy-and-eggs",
  },
  {
    id: 3,
    name: "Snacks",
    image: SnacksCategory.src,
    productCount: 125,
    href: "/category/snacks",
  },
  {
    id: 4,
    name: "Frozen Foods",
    image: FrozenFoodsCategory.src,
    productCount: 125,
    href: "/category/frozen-foods",
  },
  {
    id: 5,
    name: "Vegetables",
    image: VegetablesCategory.src,
    productCount: 125,
    href: "/category/vegetables",
  },
  {
    id: 6,
    name: "Fish & Meats",
    image: DessertsCategory.src,
    productCount: 125,
    href: "/category/fish-and-meats-2",
  },
  {
    id: 7,
    name: "Desserts",
    image: DrinksAndJuiceCategory.src,
    productCount: 125,
    href: "/category/desserts",
  },
  {
    id: 8,
    name: "Drinks & Juice",
    image: DrinksAndJuiceCategory.src,
    productCount: 125,
    href: "/category/drinks-and-juice",
  },
  {
    id: 9,
    name: "Animals Food",
    image: AnimalsFoodCategory.src,
    productCount: 125,
    href: "/category/animals-food",
  },
  {
    id: 10,
    name: "Fresh Fruits",
    image: FreshFruitsCategory.src,
    productCount: 125,
    href: "/category/fresh-fruits",
  },
];

const CategorySection = () => {
  const [position, setPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePrev = () => {
    if (containerRef.current) {
      const newPosition = Math.min(position + 400, 0);
      setPosition(newPosition);
    }
  };

  const handleNext = () => {
    if (containerRef.current) {
      const containerWidth =
        containerRef.current.scrollWidth - containerRef.current.clientWidth;
      const newPosition = Math.max(position - 400, -containerWidth);
      setPosition(newPosition);
    }
  };

  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-[90%] mx-auto px-4">
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 
  transition-colors -ml-5 hover:bg-[#27ae60] hover:text-white group ${
    position === 0 ? "opacity-50 cursor-not-allowed" : ""
  }`}
            disabled={position === 0}
          >
            <FaChevronLeft className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>

          {/* Categories Container */}
          <div ref={containerRef} className="overflow-hidden px-5">
            <motion.div
              animate={{ x: position }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex gap-6"
              style={{ width: "fit-content" }}
            >
              {categories.map((category) => (
                <div key={category.id} className="flex-shrink-0">
                  <CategoryCard category={category} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-10 
  hover:bg-[#27ae60] hover:text-white
  transition-colors -mr-5 group"
          >
            <FaChevronRight className="w-4 h-4 text-gray-600 group-hover:text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
