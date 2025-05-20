'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

// Original numbered image array (commented for later use)
// const imagePaths = Array.from({ length: 12 }, (_, i) => `/gallery/img${i + 1}.jpg`)

const GalleryPage = () => {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Navbar />
      {/* Header */}
      <header className="bg-orange-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-extrabold mb-4">Gallery</h1>
        <p className="max-w-2xl mx-auto text-lg text-orange-100">
          Explore our cuts, styles, fades, and more — proudly crafted at Oakwood Barbers.
        </p>
      </header>

      {/* Image Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {Array.from({ length: 12 }).map((_, idx) => (
            <div key={idx} className="relative aspect-square rounded overflow-hidden">
              <Image
                src="/empty.jpg"
                alt={`Gallery Placeholder ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Follow Section */}
      <section className="py-20 px-6 bg-neutral-900 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Follow Us on Instagram</h2>
        <p className="text-base text-gray-300 max-w-xl mx-auto mb-2">
          Check out our Instagram for more photos, behind-the-scenes content, and the latest updates from Oakwood Barbers.
        </p>
        <p className="text-orange-500 font-semibold text-lg">@oakwoodbarbers</p>
      </section>

      {/* Final Call to Action */}
      <section className="py-20 px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">Like What You See?</h3>
        <p className="text-base text-gray-300 mb-6">
          Book your appointment today and let our skilled barbers help you achieve your desired look.
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

export default GalleryPage