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
import Link from 'next/link'

const Section1 = () => {
  const socialLinks = [
    {
      icon: FaFacebookF,
      url: 'http://www.facebook.com/sharer.php?u=https%3A%2F%2Fwww.oakwoodbarbers.com&t=Oakwood%20Barbers',
    },
    {
      icon: FaTwitter,
      url: 'http://twitter.com/share?text=Oakwood%20Barbers&url=https%3A%2F%2Fwww.oakwoodbarbers.com',
    },
    {
      icon: FaGooglePlusG,
      url: 'https://plus.google.com/share?url=https%3A%2F%2Fwww.oakwoodbarbers.com&t=Oakwood%20Barbers',
    },
    {
      icon: FaPinterestP,
      url: 'https://www.oakwoodbarbers.com/#',
    },
    {
      icon: FaLinkedinIn,
      url: 'http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fwww.oakwoodbarbers.com&title=Oakwood%20Barbers',
    },
    {
      icon: FaEnvelope,
      url: 'mailto:info@oakwoodbarbers.com',
    },
  ]

  return (
    <section className="relative h-screen w-full text-white font-sans overflow-hidden bg-neutral-950">
      {/* Background Image */}
      <Image
        src="/barber_img.webp"
        alt="Barbershop background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 object-cover brightness-[0.4]"
        priority
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Classic Cuts. Timeless Style.
          <br className="hidden sm:block" />
          Trusted Since Day One.
        </motion.h1>

        <motion.p
          className="mt-6 text-base sm:text-lg md:text-xl text-gray-200 max-w-xl font-sans"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Experience the art of traditional barbering at Oakwood Barbers, where precision meets tradition.
        </motion.p>

        <Link href="/booking">
          <motion.button
            className="mt-8 bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 text-sm md:text-base font-semibold font-sans tracking-wide"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            Book an Appointment →
          </motion.button>
        </Link>
      </div>

      {/* Social Icons */}
      <motion.div
        className="absolute top-1/2 left-6 z-20 -translate-y-1/2 hidden md:flex flex-col space-y-5"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {socialLinks.map(({ icon: Icon, url }, idx) => (
          <a
            key={idx}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-orange-400 transition duration-300 text-xl"
          >
            <Icon />
          </a>
        ))}
      </motion.div>
    </section>
  )
}

export default Section1