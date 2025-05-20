'use client'

import React from 'react'
import { FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <section className="bg-neutral-950 text-white py-16 px-6 text-center font-sans">
      <motion.div
        className="flex flex-col items-center justify-center space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaClock className="text-2xl text-orange-500" />
          <h2 className="text-3xl font-bold tracking-wide font-serif">
            Barbershop Hours
          </h2>
        </motion.div>

        {/* Schedule */}
        <motion.div
          className="text-base text-gray-300 space-y-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <p className="font-semibold text-white">Tuesday – Friday</p>
            <p>9 AM – 6 PM</p>
          </div>
          <div className="pt-4">
            <p className="font-semibold text-white">Saturday</p>
            <p>9 AM – 1 PM</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Section3