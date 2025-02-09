"use client";
import { useState } from "react";
import Link from "next/link";
import { FaSearch, FaMapMarkerAlt, FaRegHeart } from "react-icons/fa";
import { CategoryDropdown } from "@/components/ui";
import type { HeaderMiddleProps } from "@/types";
import { HiOutlineShoppingCart } from "react-icons/hi";

const HeaderMiddle = ({
  location = "New York",
  wishlistCount = 0,
  cartCount = 0,
}: HeaderMiddleProps) => {
  const [selectedCategory, setSelectedCategory] = useState("Ice Cream");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    // Implement search functionality
    console.log(
      "Searching for:",
      searchQuery,
      "in category:",
      selectedCategory,
    );
  };

  return (
    <div className="border-b border-gray-200 bg-[#f3faf2]">
      <div className="max-w-[90%] mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-[#29a060] text-xl font-bold font-['Playwrite_VN'] text-shadow-lg">
              DishDash
            </span>
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden flex-1 lg:flex items-center max-w-2xl mx-4">
            <div className="flex w-full shadow-sm border border-gray-300 rounded-full">
              <CategoryDropdown
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />

              {/* Search Input */}
              <div className="flex flex-1">
                <input
                  type="text"
                  placeholder="Search for a product or brand"
                  className="w-full px-4 py-2 border-0 focus:ring-0 focus:outline-none text-sm rounded-r-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  onClick={handleSearch}
                  className="bg-[#29a060] text-white px-6 rounded-r-full flex items-center justify-center hover:bg-[#229954] transition-colors"
                >
                  <FaSearch className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            {/* Location Selector */}
            <div className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="w-4 h-4 text-[#29a060]" />
              <div className="hidden sm:block">
                <p className="text-xs text-gray-500">Your Location</p>
                <p className="text-sm font-medium">{location}</p>
              </div>
              <span className="block sm:hidden text-sm font-medium">
                {location}
              </span>
            </div>

            {/* Wishlist & Cart - Hidden on Mobile */}
            <div className="hidden lg:flex items-center gap-4">
              {/* Wishlist */}
              <Link
                href="/wishlist"
                className="flex items-center gap-2 text-gray-700"
              >
                <div className="relative">
                  <FaRegHeart className="w-6 h-6 text-[#29a060]" />

                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#29a060] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-ellipsis text-[#29a060]">
                  Wishlist
                </span>
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                className="flex items-center gap-2 text-gray-700"
              >
                <div className="relative">
                  <HiOutlineShoppingCart className="w-6 h-6 text-[#29a060]" />

                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#29a060] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
                <span className="text-sm font-semibold text-ellipsis text-[#29a060]">
                  Cart
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-4 lg:hidden">
          <div className="flex w-full shadow-sm border border-gray-300 rounded-full">
            <CategoryDropdown
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <input
              type="text"
              placeholder="Search for a product or brand"
              className="w-full px-4 py-2 border-0 focus:ring-0 focus:outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="bg-[#29a060] text-white px-6 rounded-r-full flex items-center justify-center hover:bg-[#229954] transition-colors"
            >
              <FaSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
