'use client'

import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <header className="bg-neutral-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-serif font-bold tracking-wide">
            Oakwood Barbers
          </span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm">
          {[
            { label: 'Home', href: '/' },
            { label: 'Services', href: '/services' },
            { label: 'Booking', href: '/booking' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Contact', href: '/contact' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-orange-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Book Now */}
        <Link
          href="/booking"
          className="hidden md:inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-4 py-2 text-sm font-semibold tracking-wide"
        >
          Book Now
        </Link>
      </div>
    </header>
  )
}

export default Navbar