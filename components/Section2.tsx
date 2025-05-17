'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Section2 = () => {
  return (
    <section className="w-full">
      {/* WHO WE ARE */}
      <div className="bg-neutral-900 text-white py-16 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 font-serif"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who We Are
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto space-y-4 text-lg text-orange-300 font-light leading-relaxed font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            Oakwood Barbers is an old-school traditional barbershop specializing exclusively in Boys and Men’s haircuts and beard trims.
          </p>
          <p>
            Originally established in Plymouth, MN in 1959, we are now located in Medina, MN.
          </p>
          <p>
            All of our barbers are trained Master Barbers with years of experience and will always provide you top notch service and quality.
          </p>
          <p className="text-sm text-orange-200 italic mt-4">
            *All prices subject to change<br />
            **All services to be done at barber&apos;s discretion
          </p>
        </motion.div>
      </div>

      {/* OUR SERVICES */}
      <div className="bg-white text-black py-20 px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2 font-serif"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-gray-600 mb-12 text-sm italic font-sans"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          viewport={{ once: true }}
        >
          We are a cash-only / appointment-only establishment.
        </motion.p>

        <motion.div
          className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg font-semibold font-sans"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
        >
          {[
            {
              title: 'Haircut – $30',
              note: '(Including Seniors on Saturdays)',
            },
            {
              title: 'Beard Trim – $20',
              note: '(w/razor +$5)',
            },
            {
              title: 'Senior Haircut – $24',
              note: '(65+ Weekdays Only)',
            },
          ].map((service, i) => (
            <motion.div
              key={i}
              className="opacity-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold uppercase tracking-tight font-serif">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1 font-sans">
                {service.note}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Section2