'use client'

import React from 'react'
import { FaClock } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Section3 = () => {
  return (
    <section className="bg-neutral-900 text-white py-10 px-6 text-center">
      <motion.div
        className="flex flex-col items-center justify-center space-y-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FaClock className="text-2xl text-orange-400" />
          <h2 className="text-2xl font-bold uppercase tracking-wide font-serif">
            Barbershop Hours
          </h2>
        </motion.div>

        <motion.div
          className="text-sm md:text-base text-orange-300 space-y-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-semibold">Tuesday – Friday</p>
          <p>9 AM – 6 PM</p>
          <p className="font-semibold pt-2">Saturday</p>
          <p>9 AM – 1 PM</p>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Section3