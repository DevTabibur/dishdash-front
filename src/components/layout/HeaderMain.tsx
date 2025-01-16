'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  FaBars,
  FaPhoneAlt,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaTimes,
  FaChevronRight,
  FaCarrot,
  FaCoffee,
  FaFish,
  FaEgg,
  FaIceCream,
  FaCookie,
  FaStore,
  FaRegHeart
} from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import type { HeaderMainProps, MenuItem } from '@/types/headerMain'
import { FaBarsProgress } from 'react-icons/fa6'
import { HiOutlineShoppingCart } from 'react-icons/hi'

const menuItems: MenuItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Shop', href: '/shop', isNew: true },
  { label: 'Pages', href: '/pages', isNew: true },
  { label: 'Vendors', href: '/vendors' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact Us', href: '/contact' },
]

const categories = [
  {
    label: 'Vegetables & Fruit',
    icon: <FaCarrot />,
    subItems: [
      'Potato & Tomato 000',
      'Cucumber & Capsicum',
      'Leafy Vegetables',
      'Root Vegetables',
      'Beans & Okra',
      'Cabbage & Cauliflower',
      'Gourd & Drumstick',
      'Specialty'
    ]
  },
  { label: 'Beverages', icon: <FaCoffee /> },
  { label: 'Meats & Seafood', icon: <FaFish /> },
  { label: 'Breakfast & Dairy', icon: <FaEgg /> },
  { label: 'Frozen Foods', icon: <FaIceCream /> },
  { label: 'Biscuits & Snacks', icon: <FaCookie /> },
  { label: 'Grocery & Staples', icon: <FaStore /> },
]

const HeaderMain = ({ phone = '01- 234 567 890' }: HeaderMainProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  return (
    <header className="bg-white border-b">
      <div className="max-w-[90%] mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between h-16">
          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsCategoryMenuOpen(!isCategoryMenuOpen)}
              className="flex items-center space-x-2 bg-[#27AE60] text-white px-4 py-2 rounded-md"
            >
              <FaBars className="w-5 h-5" />
              <span>All Categories</span>
            </button>

            <AnimatePresence>
              {isCategoryMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md mt-2 z-50"
                >
                  {categories.map((category, index) => (
                    <div key={index} className="relative group">
                      <button
                        className="w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 text-gray-700"
                        onMouseEnter={() => setActiveCategory(category.label)}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[#27AE60]">{category.icon}</span>
                          <span>{category.label}</span>
                        </div>
                        {category.subItems && <FaChevronRight className="w-3 h-3" />}
                      </button>

                      {category.subItems && activeCategory === category.label && (
                        <div className="absolute left-full top-0 w-64 bg-white shadow-lg rounded-md">
                          <div className="py-2">
                            <h3 className="px-4 py-2 font-semibold">{category.label}</h3>
                            {category.subItems.map((item, idx) => (
                              <Link
                                key={idx}
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-50 text-gray-600"
                              >
                                {item}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Main Navigation */}
          <nav className="flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="relative text-[#29a060] font-semibold hover:text-[#27ae5fc5] transition-colors"
              >
                {item.label}

              </Link>
            ))}
          </nav>

          {/* Phone Number */}
          <div className="flex items-center text-gray-700 ">
            <FaPhoneAlt className="w-5 h-5 mr-2 text-[#27AE60]" />
            <h2 className=''>{phone}</h2>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <button
            onClick={() => setIsCategoryMenuOpen(true)}
            className="p-2"
          >
            <FaBarsProgress className="w-5 h-5 text-[#646464]" />
          </button>

          <div className="flex items-center space-x-4">
            <button className="p-2">
              <FaSearch className="w-5 h-5 text-[#646464]" />
            </button>
            <button className="p-2 relative">
              
              <FaRegHeart className="w-5 h-5 text-[#646464]" />
              <span className="absolute -top-1 -right-1 bg-[#27AE60] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button className="p-2 relative">
            <HiOutlineShoppingCart className="w-5 h-5 text-[#646464]" />
              <span className="absolute -top-1 -right-1 bg-[#27AE60] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2"
            >
              <FaBarsProgress className="w-5 h-5 text-[#646464]" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="/placeholder.svg"
                  alt="Marketpro"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {menuItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="flex items-center justify-between px-4 py-3 border-b"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>

                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Category Menu */}
      <AnimatePresence>
        {isCategoryMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 bg-white z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Image
                  src="/placeholder.svg"
                  alt="Marketpro"
                  width={150}
                  height={40}
                  className="h-8 w-auto"
                />
                <button
                  onClick={() => setIsCategoryMenuOpen(false)}
                  className="p-2"
                >
                  <FaTimes className="w-6 h-6" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {categories.map((category, index) => (
                  <div key={index}>
                    <button
                      onClick={() => setActiveCategory(
                        activeCategory === category.label ? null : category.label
                      )}
                      className="flex items-center justify-between w-full px-4 py-3 border-b"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-[#27AE60]">{category.icon}</span>
                        <span>{category.label}</span>
                      </div>
                      {category.subItems && (
                        <FaChevronRight className={`w-5 h-5 transition-transform ${activeCategory === category.label ? 'rotate-90' : ''
                          }`} />
                      )}
                    </button>
                    {category.subItems && activeCategory === category.label && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="bg-gray-50"
                      >
                        {category.subItems.map((item, idx) => (
                          <Link
                            key={idx}
                            href="#"
                            className="block px-4 py-2 pl-12 text-gray-600"
                            onClick={() => setIsCategoryMenuOpen(false)}
                          >
                            {item}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default HeaderMain

