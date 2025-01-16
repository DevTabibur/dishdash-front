'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'
import { mainNavItems } from '@/data/navigation'
import { MegaMenu } from './ui'


const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMegaMenuOpen = useCallback(() => {
    setIsMegaMenuOpen(true)
  }, [])

  const handleMegaMenuClose = useCallback(() => {
    setIsMegaMenuOpen(false)
  }, [])

  const shopDepartments = mainNavItems[0].items || []

  return (
    <nav className={`bg-[#fe759c] sticky top-0 z-50 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2 hover:bg-[#fe6089] rounded-lg"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>

          {/* Shop By Department Button */}
          <div 
            className="relative"
            onMouseEnter={handleMegaMenuOpen}
          >
            <button
              className="flex items-center gap-2 text-white px-4 py-2 hover:bg-[#fe6089] rounded-lg"
            >
              <FiMenu className="w-5 h-5" />
              <span>Shop By Department</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.slice(1).map((item) => (
              <Link
                key={item.id}
                href={item.href || '#'}
                className={`text-white hover:text-pink-100 transition-colors ${
                  item.id === 'home' ? 'text-red-500' : ''
                }`}
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <motion.div
            className={`lg:hidden fixed inset-0 bg-[#fe759c] z-50 ${
              isMobileMenuOpen ? 'block' : 'hidden'
            }`}
            initial={{ x: '100%' }}
            animate={{ x: isMobileMenuOpen ? 0 : '100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white mb-4"
              >
                <FiX className="w-6 h-6" />
              </button>
              <div className="space-y-4">
                {mainNavItems.map((item: any) => (
                  <div key={item.id}>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="block text-white py-2 hover:bg-[#fe6089] px-4 rounded transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ) : (
                      <div className="text-white py-2 px-4">{item.title}</div>
                    )}
                    {item.items && (
                      <div className="pl-4 space-y-2 mt-2">
                        {item.items.map((subItem: any) => (
                          <Link
                            key={subItem.id}
                            href={subItem.href || '#'}
                            className="block text-pink-100 py-2 hover:bg-[#fe6089] px-4 rounded transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mega Menu */}
      <div className="hidden lg:block">
        <MegaMenu
          items={shopDepartments}
          isOpen={isMegaMenuOpen}
          onClose={handleMegaMenuClose}
        />
      </div>
    </nav>
  )
}

export default Navigation

