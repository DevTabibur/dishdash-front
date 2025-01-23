"use client";

import { FaChevronDown } from "react-icons/fa";
import type { SortDropdownProps } from "@/types";

const SortDropdown = ({ options, value, onChange }: SortDropdownProps) => {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none pl-4 pr-10 py-2.5 rounded-lg border border-gray-200 bg-white focus:outline-none focus:border-[#27AE60] transition-colors cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FaChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
    </div>
  );
};

export default SortDropdown;
