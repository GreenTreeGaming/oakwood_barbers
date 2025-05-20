'use client'

import React, { useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    name: 'Robert Johnson',
    text: 'Fantastic beard trim and styling advice. The barbers are true professionals who take pride in their craft.',
    stars: 5,
  },
  {
    name: 'James Miller',
    text: 'My son and I both get our haircuts here. Family-friendly environment with top-notch service every time.',
    stars: 4,
  },
  {
    name: 'William Davis',
    text: 'Old-school barbershop with modern skills. The hot towel shave is an experience every man should try at least once.',
    stars: 5,
  },
  {
    name: 'Michael Brown',
    text: 'Quick, clean, and stylish. Walked out feeling like a new man.',
    stars: 5,
  },
  {
    name: 'Anthony Smith',
    text: 'Love the atmosphere and attention to detail. Best in town.',
    stars: 5,
  },
  {
    name: 'Ethan Wilson',
    text: 'My go-to barbershop for years. Always consistent.',
    stars: 4,
  },
]

const CHUNK_SIZE = 3

const Section5 = () => {
  const [currentGroup, setCurrentGroup] = useState(0)

  const groupCount = Math.ceil(reviews.length / CHUNK_SIZE)
  const pagedReviews = Array.from({ length: groupCount }, (_, i) =>
    reviews.slice(i * CHUNK_SIZE, i * CHUNK_SIZE + CHUNK_SIZE)
  )

  return (
    <section className="bg-neutral-950 text-white py-20 px-6 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4">
          What Our Clients Say
        </h2>
        <p className="text-sm text-gray-400 mb-12 max-w-xl mx-auto">
          Don’t just take our word for it. Hear from the customers who trust Oakwood Barbers.
        </p>

        {/* Review Source Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
          {['Google Reviews', 'Booksy Reviews'].map((source, i) => (
            <div
              key={i}
              className="bg-neutral-900 px-6 py-5 rounded-md border border-neutral-800 w-64"
            >
              <div className="flex justify-center text-orange-500 mb-2">
                {Array(5).fill(null).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-white font-semibold">{source}</p>
              <p className="text-sm text-gray-400">
                {source === 'Google Reviews'
                  ? '4.5 stars from 62 reviews'
                  : '5.0 stars from 93 reviews'}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto min-h-[260px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              {pagedReviews[currentGroup].map((review, i) => (
                <div
                  key={i}
                  className="bg-neutral-900 rounded-md p-6 space-y-4 border border-neutral-800 text-left"
                >
                  <FaQuoteLeft className="text-orange-500 text-2xl" />
                  <p className="text-sm text-gray-300">{review.text}</p>
                  <div>
                    <p className="font-semibold text-white">{review.name}</p>
                    <div className="flex text-orange-400 mt-1">
                      {Array(review.stars).fill(null).map((_, i) => (
                        <FaStar key={i} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {pagedReviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentGroup(idx)}
              className={`w-3 h-3 rounded-full transition ${
                idx === currentGroup ? 'bg-orange-500 scale-110' : 'bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Section5