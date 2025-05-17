'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const barbers = [
  { name: 'Greg', img: '/greg.jpg' },
  { name: 'Shannon', img: '/shannon.jpg' },
  { name: 'Mike', img: '/mike.jpg' },
]

const Section4 = () => {
  return (
    <section className="bg-neutral-100 text-black py-16 px-6">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide font-serif">
          Our Barbers
        </h2>
        <p className="text-sm text-gray-600 mt-2 italic font-sans">
          Always remember to smart off after your haircut as the results may greatly improve!
        </p>
        <motion.div
          className="w-32 h-1 mx-auto bg-black rounded-full mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {barbers.map((barber, i) => (
          <motion.div
            key={barber.name}
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative w-64 h-80 mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src={barber.img}
                alt={barber.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide font-serif">
              {barber.name}
            </h3>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Section4