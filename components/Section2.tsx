'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const Section2 = () => {
  return (
    <section className="bg-neutral-950 text-white py-20 px-6 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
            About Oakwood Barbers
          </h2>
          <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed">
            Oakwood Barbers is an old-school barbershop specializing in precision cuts and beard trims for men and boys in a traditional setting. Our skilled barbers combine time-honored techniques with modern styles to deliver exceptional grooming experiences.
          </p>
          <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
            Step into our shop and experience the authentic atmosphere of a classic barbershop, where attention to detail and customer satisfaction are our highest priorities.
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 text-sm md:text-base font-semibold tracking-wide">
            Explore Our Services →
          </button>
        </motion.div>

        {/* Right Grid of Images */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {['/empty.jpg', '/empty.jpg', '/empty.jpg', '/empty.jpg'].map((src, i) => (
            <div key={i} className="relative w-full h-64 overflow-hidden rounded-md">
              <Image
                src={src}
                alt={`Barber Shop ${i + 1}`}
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Section2