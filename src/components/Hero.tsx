'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight, FaShoppingCart, FaChevronDown } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import BannerImage from '../../public/images/hero-banner-bg.png'

const slides = [
    {
        id: 1,
        title: 'Daily Grocery Order and Get Express Delivery',
        image: '/placeholder.svg?height=500&width=600',
        buttonText: 'Explore Shop'
    },
    {
        id: 2,
        title: 'Fresh Vegetables & Fruits Delivered Daily',
        image: '/placeholder.svg?height=500&width=600',
        buttonText: 'Shop Now'
    }
]

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className='max-w-[90%] mx-auto py-6 px-4'>
            <div className='max-w-full rounded-[20px] md:rounded-[50px] bg-[#299e609d]'>
                <Image src={BannerImage} height={500} alt="Hero Banner" className="w-[100%] mx-auto h-full object-cover rounded-[20px] md:rounded-[50px]" />
                {/* <div className="container mx-auto px-4">
                    <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide}
                                initial={{ opacity: 0, x: 100 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -100 }}
                                transition={{ duration: 0.5 }}
                                className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
                            >
                                <div className="w-full md:w-1/2 pt-12 md:pt-0 text-center md:text-left">
                                    <h1 className="text-[#1A237E] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                                        {slides[currentSlide].title}
                                    </h1>
                                    <Link
                                        href="/shop"
                                        className="inline-flex items-center gap-2 bg-[#27AE60] text-white px-6 py-3 rounded-full hover:bg-[#229954] transition-colors"
                                    >
                                        <span>{slides[currentSlide].buttonText}</span>
                                        <FaShoppingCart className="w-4 h-4" />
                                    </Link>
                                </div>

                                <div className="w-full md:w-1/2">
                                    <Image
                                        src={slides[currentSlide].image || "/placeholder.svg"}
                                        alt="Grocery Items"
                                        width={600}
                                        height={500}
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prevSlide}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
                            aria-label="Previous slide"
                        >
                            <FaChevronLeft className="w-4 h-4 text-gray-600" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
                            aria-label="Next slide"
                        >
                            <FaChevronRight className="w-4 h-4 text-gray-600" />
                        </button>

                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                            <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center shadow-lg">
                                <FaChevronDown className="w-5 h-5 text-white animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0">
                    <svg
                        viewBox="0 0 1440 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-auto"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 0L1440 0V60C1440 93.1371 1413.14 120 1380 120H60C26.8629 120 0 93.1371 0 60V0Z"
                            fill="white"
                        />
                    </svg>
                </div> */}
            </div>
        </div>
    )
}

export default Hero


{/* <div className="relative max-w-[90%] bg-[#E8F5E9] overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M30 30c0-16.569 13.431-30 30-30v60c-16.569 0-30-13.431-30-30z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}
      />

      <div className="container mx-auto px-4">
        <div className="relative min-h-[500px] md:min-h-[600px] flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16"
            >
              <div className="w-full md:w-1/2 pt-12 md:pt-0 text-center md:text-left">
                <h1 className="text-[#1A237E] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                  {slides[currentSlide].title}
                </h1>
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 bg-[#27AE60] text-white px-6 py-3 rounded-full hover:bg-[#229954] transition-colors"
                >
                  <span>{slides[currentSlide].buttonText}</span>
                  <FaShoppingCart className="w-4 h-4" />
                </Link>
              </div>

              <div className="w-full md:w-1/2">
                <Image
                  src={slides[currentSlide].image || "/placeholder.svg"}
                  alt="Grocery Items"
                  width={600}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <FaChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <FaChevronRight className="w-4 h-4 text-gray-600" />
          </button>

          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
            <div className="w-12 h-12 bg-[#27AE60] rounded-full flex items-center justify-center shadow-lg">
              <FaChevronDown className="w-5 h-5 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 0L1440 0V60C1440 93.1371 1413.14 120 1380 120H60C26.8629 120 0 93.1371 0 60V0Z"
            fill="white"
          />
        </svg>
      </div>
    </div> */}

