'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import type { Testimonial } from '@/types/testimonial'
import StarRating from './StarRating'

interface TestimonialsProps {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          What say clients about us
        </h2>

        <div className="relative">
          {/* Quote marks decoration */}
          <div className="absolute left-0 top-0 text-gray-100 text-9xl font-serif leading-none">
            &ldquo;&rdquo;
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative z-10">
              <StarRating rating={currentTestimonial.rating} />
              
              <div className="text-gray-400 text-sm mt-2 mb-4">
                {currentTestimonial.date}
              </div>
              
              <blockquote className="text-gray-600 text-lg mb-6">
                {currentTestimonial.content}
              </blockquote>
              
              <div className="flex items-center gap-2">
                <div className="h-1 w-8 bg-[#FF6B98]" />
                <div className="font-medium">
                  {`"${currentTestimonial.name}" - ${currentTestimonial.title}`}
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={handlePrevious}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <FiChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                  aria-label="Next testimonial"
                >
                  <FiChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

