'use client'

import React from 'react'
import Image from 'next/image'
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaPinterestP,
  FaLinkedinIn,
  FaEnvelope,
} from 'react-icons/fa'
import { motion } from 'framer-motion'

const Section1 = () => {
  return (
    <section className="relative h-screen w-full text-white font-sans overflow-hidden">
      {/* Background */}
      <Image
        src="/barber_img.webp"
        alt="Barbershop background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 brightness-50"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <motion.div
          className="backdrop-blur-md bg-black/30 p-10 rounded-2xl shadow-2xl max-w-3xl w-full"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase leading-tight font-serif"
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Oakwood <span className="block text-orange-400">Barbers</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg md:text-xl text-gray-200 font-light italic border-t border-b border-white/10 py-4 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Specializing exclusively in men’s and boy’s haircuts with timeless precision and modern style.
          </motion.p>

          <motion.button
            className="mt-8 bg-orange-400 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-500 transition-all duration-300 font-sans"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            Book Appointment
          </motion.button>
        </motion.div>

        {/* Down Arrow */}
        <motion.div
          className="absolute bottom-6 text-white text-3xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          ↓
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 hidden md:flex flex-col space-y-5"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaLinkedinIn, FaEnvelope].map((Icon, idx) => (
          <Icon
            key={idx}
            className="text-white hover:text-orange-400 transition duration-300 text-xl cursor-pointer"
          />
        ))}
      </motion.div>
    </section>
  )
}

export default Section1