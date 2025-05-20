'use client'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'
import {
  FaCalendarCheck,
  FaMapMarkerAlt,
  FaClock,
  FaLightbulb,
} from 'react-icons/fa'

const BookingPage = () => {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Navbar />
      {/* Header */}
      <header className="bg-orange-600 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-6">
          Book Your Cut
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-orange-100">
          Booking is easy with Booksy — get your appointment set in seconds.
        </p>
      </header>

      {/* Booksy Integration CTA */}
      <section className="py-24 px-6 text-center max-w-3xl mx-auto">
        <FaCalendarCheck className="text-orange-500 text-5xl mx-auto mb-6" />
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
          Schedule with Booksy
        </h2>
        <p className="text-gray-300 text-base md:text-lg mb-8">
          Use Booksy to view availability, pick your service, and lock in your time with ease.
        </p>
        <a
          href="https://booksy.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-8 py-3 font-semibold text-base rounded"
        >
          Schedule Your Cut Now →
        </a>
      </section>

      {/* Booking Tips */}
      <section className="py-20 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto text-center">
          <FaLightbulb className="text-orange-500 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
            Booking Tips
          </h3>
          <p className="text-base text-gray-400 mb-2">
            🕒 <strong className="text-white">Book at least 24 hours in advance</strong> for the best availability.
          </p>
          <p className="text-base text-gray-400">
            ✂️ Weekend spots go fast — secure yours early!
          </p>
        </div>
      </section>

      {/* Hours of Operation */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FaClock className="text-orange-500 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
            Hours of Operation
          </h3>
          <p className="text-gray-400 mb-8 text-base">
            We're open 5 days a week to serve you.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left text-lg text-gray-300 max-w-md mx-auto">
            <div>
              <p><span className="text-white font-semibold">Monday:</span> Closed</p>
              <p><span className="text-white font-semibold">Tuesday:</span> Closed</p>
              <p><span className="text-white font-semibold">Wednesday:</span> 9 AM – 6 PM</p>
            </div>
            <div>
              <p><span className="text-white font-semibold">Thursday:</span> 9 AM – 6 PM</p>
              <p><span className="text-white font-semibold">Friday:</span> 9 AM – 6 PM</p>
              <p><span className="text-white font-semibold">Saturday:</span> 9 AM – 6 PM</p>
              <p><span className="text-white font-semibold">Sunday:</span> 9 AM – 6 PM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 px-6 bg-[#1c1a19]">
        <div className="max-w-3xl mx-auto text-center">
          <FaMapMarkerAlt className="text-orange-500 text-4xl mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-2">
            Our Location
          </h3>
          <p className="text-base text-gray-300">
            Visit us in <span className="text-white font-semibold">Medina, MN</span>
          </p>
          <p className="text-base text-gray-400 mt-2">5145 County Rd 101</p>
          <p className="text-base text-gray-400">Medina, MN 55340</p>
          <p className="text-base text-gray-400 mt-4">📞 (763) 473-5887</p>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default BookingPage