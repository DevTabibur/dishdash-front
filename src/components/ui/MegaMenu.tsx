'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import { MenuItem } from '@/types'


interface MegaMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
}

const menuVariants = {
  hidden: {
    opacity: 0,
    y: 15,
    height: 0
  },
  visible: {
    opacity: 1,
    y: 0,
    height: 'auto',
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    y: 15,
    height: 0,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

const subMenuVariants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      ease: 'easeOut'
    }
  },
  exit: {
    opacity: 0,
    x: 20,
    transition: {
      duration: 0.2,
      ease: 'easeIn'
    }
  }
}

const MegaMenu = ({ items, isOpen, onClose }: MegaMenuProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId)
  }

  const handleMouseLeave = () => {
    setActiveCategory(null)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute left-0 right-0 bg-white shadow-lg z-50 overflow-hidden"
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onMouseLeave={() => {
            handleMouseLeave()
            onClose()
          }}
        >
          <div className="container mx-auto grid grid-cols-[300px,1fr]">
            {/* Categories */}
            <div className="border-r py-2">
              {items.map((category) => (
                <div
                  key={category.id}
                  className="relative"
                  onMouseEnter={() => handleCategoryHover(category.id)}
                >
                  {category.href ? (
                    <Link
                      href={category.href}
                      className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
                        activeCategory === category.id ? 'bg-gray-50 text-[#fe759c]' : ''
                      }`}
                    >
                      {category.title}
                    </Link>
                  ) : (
                    <div
                      className={`flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors cursor-pointer ${
                        activeCategory === category.id ? 'bg-gray-50 text-[#fe759c]' : ''
                      }`}
                    >
                      {category.title}
                      {category.items && (
                        <FiChevronRight 
                          className={`w-4 h-4 transition-transform ${
                            activeCategory === category.id ? 'rotate-90' : ''
                          }`} 
                        />
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Subcategories */}
            <AnimatePresence mode="wait">
              {activeCategory && (
                <motion.div
                  key={activeCategory}
                  variants={subMenuVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="p-6 min-h-[400px]"
                >
                  <div className="grid grid-cols-3 gap-6">
                    {items
                      .find((category) => category.id === activeCategory)
                      ?.items?.map((subItem) => (
                        <Link
                          key={subItem.id}
                          href={subItem.href || '#'}
                          className="text-gray-600 hover:text-[#fe759c] transition-colors"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MegaMenu

