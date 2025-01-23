"use client";

import { useState, useEffect, useRef } from "react";
import { FaSearch } from "react-icons/fa";
import type { SearchBarProps } from "@/types/vendorList";

const SearchBar = ({ onSearch, initialValue = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialValue);
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    debounceTimer.current = setTimeout(() => {
      onSearch(value);
    }, 300);
  };

  return (
    <div className="relative flex-1">
      <input
        type="text"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search vendors by name or ID..."
        className="w-full pl-12 pr-4 py-2.5 rounded-full border border-gray-200 focus:outline-none focus:border-[#27AE60] transition-colors"
      />
      <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;
