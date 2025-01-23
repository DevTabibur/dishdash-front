"use client";

import { SortBy } from "@/types";
import { Vendor } from "@/types";
import { VendorListProps } from "@/types";
import { filterVendors, sortVendors } from "@/utils";
import { useState, useEffect } from "react";
import { VendorCard } from "./ui";
import { SearchBar } from "./ui";
import { SortDropdown } from "./ui";

const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Oldest", value: "oldest" },
  { label: "Rating", value: "rating" },
  { label: "Name", value: "name" },
];

const ITEMS_PER_PAGE = 20;

const VendorList = ({ initialVendors, totalResults }: VendorListProps) => {
  const [vendors, setVendors] = useState<Vendor[]>(initialVendors);
  const [filteredVendors, setFilteredVendors] =
    useState<Vendor[]>(initialVendors);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("newest");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let result = filterVendors(vendors, searchQuery);
    result = sortVendors(result, sortBy);
    setFilteredVendors(result);
    setCurrentPage(1);
  }, [vendors, searchQuery, sortBy]);

  const displayedVendors = filteredVendors.slice(
    0,
    currentPage * ITEMS_PER_PAGE,
  );

  const handleLoadMore = () => {
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <h1 className="text-gray-600">
          Showing {Math.min(displayedVendors.length, ITEMS_PER_PAGE)} of{" "}
          {totalResults} results
        </h1>
        <div className="flex items-center gap-4 w-full sm:w-auto">
          <SearchBar onSearch={setSearchQuery} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 whitespace-nowrap">Sort by:</span>
            <SortDropdown
              options={sortOptions}
              value={sortBy}
              onChange={(value) => setSortBy(value as SortBy)}
            />
          </div>
        </div>
      </div>

      {/* Vendor Grid */}
      <div className="grid gap-6">
        {displayedVendors.map((vendor) => (
          <VendorCard key={vendor.id} vendor={vendor} />
        ))}
      </div>

      {/* Load More */}
      {displayedVendors.length < filteredVendors.length && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-[#27AE60] text-white rounded-lg hover:bg-[#229954] transition-colors"
          >
            Load More
          </button>
        </div>
      )}

      {/* No Results */}
      {filteredVendors.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">
            No vendors found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default VendorList;
