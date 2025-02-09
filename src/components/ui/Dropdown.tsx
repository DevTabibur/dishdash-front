"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import type { DropdownProps } from "@/types";

const Dropdown = ({ items, trigger }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="flex items-center cursor-pointer">{trigger}</div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-[-40px] mt-3 w-36 md:w-40 bg-white rounded-md shadow-lg py-1 z-50"
          >
            {items.map((item, index) => (
              <div key={index}>
                {item.onClick ? (
                  // Render a button if `onClick` exists
                  <button
                    className="w-full text-left px-3 py-1.5 text-xs md:text-sm text-gray-700 hover:bg-gray-100"
                    onClick={item.onClick}
                  >
                    {item.label}
                  </button>
                ) : (
                  // Otherwise, render a Link
                  <Link
                    href={item.href ?? "#"}
                    className="flex items-center px-3 py-1.5 text-xs md:text-sm text-gray-700 hover:bg-gray-100"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
