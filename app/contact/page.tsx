'use client'

import React from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const ContactPage = () => {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Navbar />
      {/* Header */}
      <header className="bg-orange-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4">
          Get In Touch
        </h1>
        <p className="max-w-xl mx-auto text-lg text-orange-100">
          Have questions? Want to book by phone? We’re here to help.
        </p>
      </header>

      {/* Contact Info */}
      <section className="py-20 px-6 max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold font-serif mb-1">Our Location</h3>
              <p className="text-gray-300">5145 County Rd 101</p>
              <p className="text-gray-300">Medina, MN 55340</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaPhone className="text-orange-500 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold font-serif mb-1">Phone</h3>
              <p className="text-gray-300">(763) 473-5887</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaEnvelope className="text-orange-500 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold font-serif mb-1">Email</h3>
              <p className="text-gray-300">info@oakwoodbarbers.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <FaClock className="text-orange-500 text-xl mt-1" />
            <div>
              <h3 className="text-lg font-semibold font-serif mb-1">Hours</h3>
              <p className="text-gray-300">Monday – Tuesday: Closed</p>
              <p className="text-gray-300">Wednesday – Sunday: 9 AM – 6 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">Contact Us</h3>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full bg-neutral-900 border border-neutral-700 text-white px-4 py-3 rounded placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 transition text-white px-6 py-3 font-semibold rounded"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

     {/* Final CTA */}
      <section className="bg-[#1a1817] py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Ready for a Fresh Look?</h3>
        <p className="text-base text-gray-300 max-w-xl mx-auto mb-6">
          Book your appointment today and experience the Oakwood difference. Our skilled barbers are ready to help you achieve your perfect look.
        </p>
        <Link href="/booking">
          <button className="bg-orange-600 hover:bg-orange-700 transition px-6 py-3 text-white text-base font-semibold rounded">
            Book an Appointment →
          </button>
        </Link>
      </section>
      <Footer />
    </div>
  )
}

export default ContactPage