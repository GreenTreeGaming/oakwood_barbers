'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const galleryImages = [
  'IMG_0772.JPG',
  'IMG_0819.jpeg',
  'IMG_3175.png',
  'IMG_3176.png',
  'IMG_3179.PNG',
  'IMG_3182.png',
  'IMG_3184.png',
  'IMG_3189.PNG',
  'IMG_3193.PNG',
  'IMG_3201.png',
  'IMG_3203.png',
  'IMG_3208.png',
  'IMG_3210.png',
  'IMG_3211.png',
  'IMG_3212.png',
  'IMG_3213.png',
  'IMG_3214.png',
  'IMG_3215 2.png',
  'IMG_3215.png',
]

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
          {galleryImages.map((filename, idx) => (
            <div key={idx} className="relative aspect-square rounded overflow-hidden">
              <Image
                src={`/gallery_images/${filename}`}
                alt={`Gallery Image ${idx + 1}`}
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Instagram Follow */}
      <section className="py-20 px-6 bg-neutral-900 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Follow Us on Instagram</h2>
        <p className="text-base text-gray-300 max-w-xl mx-auto mb-2">
          Check out our Instagram for more photos, behind-the-scenes content, and the latest updates from Oakwood Barbers.
        </p>
        <p className="text-orange-500 font-semibold text-lg">@oakwoodbarbers</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-[#1b1918]">
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