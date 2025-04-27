"use client"

import { useState } from "react"
import Image from "next/image"
import { Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

interface Testimonial {
  name: string
  rating: number
  text: string
  avatar: string
  date: string
}

interface StackedTestimonialsProps {
  testimonials: Testimonial[]
}

export function StackedTestimonials({ testimonials }: StackedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="relative w-full max-w-md mx-auto h-[400px]">
      <AnimatePresence mode="popLayout">
        {testimonials.map((testimonial, index) => {
          // Calculate the position in the stack relative to the active index
          const position = (index - activeIndex + testimonials.length) % testimonials.length

          // Only render the top 3 cards for performance
          if (position > 2) return null

          return (
            <motion.div
              key={testimonial.name}
              initial={{ scale: 0.8, y: 100, opacity: 0 }}
              animate={{
                scale: position === 0 ? 1 : 0.9 - position * 0.05,
                y: position * 30,
                opacity: 1 - position * 0.2,
                zIndex: testimonials.length - position,
              }}
              exit={{ scale: 0.8, y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-0 left-0 right-0 w-full"
            >
              <div
                className={`p-6 rounded-lg shadow-md border border-[#B5C99A]/30 bg-white 
                  ${position === 0 ? "cursor-default" : "cursor-pointer"}`}
                onClick={position !== 0 ? handleNext : undefined}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-[#718355]">{testimonial.name}</h3>
                    <div className="flex">
                      {Array(5)
                        .fill(null)
                        .map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "fill-[#97A97C] text-[#97A97C]" : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">{testimonial.text}</p>
                <p className="mt-4 text-sm text-gray-500">{testimonial.date}</p>
              </div>
            </motion.div>
          )
        })}
      </AnimatePresence>

      <div className="absolute bottom-[-60px] left-0 right-0 flex justify-center space-x-4">
        <button
          onClick={handlePrev}
          className="w-10 h-10 rounded-full bg-[#718355] text-white flex items-center justify-center hover:bg-[#87986A] transition-colors"
        >
          &larr;
        </button>
        <button
          onClick={handleNext}
          className="w-10 h-10 rounded-full bg-[#718355] text-white flex items-center justify-center hover:bg-[#87986A] transition-colors"
        >
          &rarr;
        </button>
      </div>
    </div>
  )
}
