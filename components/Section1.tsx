// app/components/Section1.tsx or pages/Section1.tsx
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

const Section1 = () => {
  return (
    <section className="relative h-screen w-full text-white">
      {/* Background */}
      <Image
        src="/barber_img.webp"
        alt="Barbershop background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0 brightness-50"
        priority
      />

      {/* Overlay glass panel */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <div className="backdrop-blur-md bg-black/30 p-10 rounded-2xl shadow-2xl max-w-3xl w-full animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight uppercase leading-tight">
            Oakwood <span className="block text-orange-400">Barbers</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-200 font-light italic border-t border-b border-white/10 py-4">
            Specializing exclusively in men’s and boy’s haircuts with timeless precision and modern style.
          </p>
          <button className="mt-8 bg-orange-400 text-white text-lg px-8 py-3 rounded-full font-semibold shadow-md hover:bg-orange-500 transition-all duration-300">
            Book Appointment
          </button>
        </div>

        {/* Down arrow animation */}
        <div className="absolute bottom-6 animate-bounce text-white text-3xl">
          ↓
        </div>
      </div>

      {/* Social Icons - vertical left */}
      <div className="absolute top-1/2 left-6 z-20 -translate-y-1/2 hidden md:flex flex-col space-y-5">
        {[FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterestP, FaLinkedinIn, FaEnvelope].map((Icon, idx) => (
          <Icon
            key={idx}
            className="text-white hover:text-orange-400 transition duration-300 text-xl cursor-pointer"
          />
        ))}
      </div>
    </section>
  )
}

export default Section1