"use client";

import { useState } from "react";
import { RecommendedProductCard } from "./ui";
import type { RecommendedProductsProps, RecommendedCategory } from "@/types";

const categories: RecommendedCategory[] = [
  "All",
  "Grocery",
  "Fruits",
  "Juices",
  "Vegetables",
  "Snacks",
  "Organic Foods",
];

const RecommendedProducts = ({ products }: RecommendedProductsProps) => {
  const [selectedCategory, setSelectedCategory] =
    useState<RecommendedCategory>("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const handleAddToCart = (productId: string) => {
    console.log("Adding to cart:", productId);
    // Implement cart functionality
  };

  return (
    <section className="py-12">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <h2 className="text-[#1A237E] text-2xl md:text-3xl font-bold">
            Recommended for you
          </h2>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-[#27AE60] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div>
          {filteredProducts.length === 0 ? (
            <h3 className="text-xl text-gray-600 text-center py-8">
              {selectedCategory} category does not have any products.
            </h3>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {filteredProducts.map((product) => (
                <RecommendedProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RecommendedProducts;
