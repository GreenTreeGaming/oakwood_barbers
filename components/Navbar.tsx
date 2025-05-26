'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Booking', href: '/booking' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
]

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="bg-neutral-950 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo Image */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.tiff" // or your actual logo path
            alt="Oakwood Barbers Logo"
            width={64}
            height={64}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-orange-500 transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Book Now button (Desktop) */}
        <Link
          href="/booking"
          className="hidden md:inline-block bg-orange-600 hover:bg-orange-700 transition text-white px-4 py-2 text-sm font-semibold tracking-wide"
        >
          Book Now
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-xl text-white focus:outline-none"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-neutral-900 border-t border-neutral-800 px-6 py-4 space-y-4 text-sm font-sans">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block text-white hover:text-orange-500 transition"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/booking"
            className="block bg-orange-600 hover:bg-orange-700 transition text-white px-4 py-2 text-sm font-semibold text-center rounded"
            onClick={() => setMobileOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  )
}

export default Navbar