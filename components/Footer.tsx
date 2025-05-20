'use client'

import React from 'react'

const Footer = () => {
  return (
    <footer className="relative bg-neutral-900 text-white pt-16 pb-6 px-4 md:px-12">
      <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto items-start">
        {/* Left Side: Appointment + Map */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 tracking-wide font-serif">
            Call For An Appointment
          </h2>
          <div className="text-sm text-gray-300 mb-4">
            <p className="font-semibold">Address</p>
            <p>5145 Highway 101 North</p>
            <p>Medina, MN 55340</p>
          </div>
          <div className="w-full h-64 rounded-md overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2802.360194369566!2d-93.55397598429173!3d45.03534807909866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b33cd9bb8e3723%3A0x96a316a238ca00a4!2sOakwood%20Barbers!5e0!3m2!1sen!2sus!4v1618534254050!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: About */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 tracking-wide font-serif">
            About Oakwood Barbers
          </h2>
          <p className="text-sm text-gray-300 mb-4 leading-relaxed">
            At Oakwood Barbers, tradition meets precision. We're more than just a barbershop —
            we’re a neighborhood staple where generations of families have come for clean cuts,
            beard trims, and timeless style.
          </p>
          <p className="text-sm text-gray-300 leading-relaxed">
            Our skilled barbers are passionate about their craft and committed to delivering top-tier service with every visit.
            Whether it’s your first time or your hundredth, we make every appointment feel like home.
          </p>
        </div>
      </div>

     {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-4">
        Copyright © {new Date().getFullYear()} Oakwood Barbers | Built by{" "}
        <a
          href="https://sarvajithkarun.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange-500 hover:underline"
        >
          Sarvajith Karun
        </a>
      </div>
    </footer>
  )
}

export default Footer