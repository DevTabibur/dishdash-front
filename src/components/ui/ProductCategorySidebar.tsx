"use client";

import { ProductCategorySidebarProps } from "@/types";

const ProductCategorySidebar = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: ProductCategorySidebarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Product Category
      </h2>
      <div className="space-y-3">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => onCategorySelect(category.slug)}
            className={`w-full text-left py-2 px-1 rounded-md transition-colors
              ${
                selectedCategory === category.slug
                  ? "text-[#27AE60] bg-[#E8F5E9]"
                  : "text-gray-600 hover:text-[#27AE60]"
              }`}
          >
            <span className="flex items-center justify-between">
              <span>{category.name}</span>
              <span className="text-gray-400">({category.count})</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductCategorySidebar;
