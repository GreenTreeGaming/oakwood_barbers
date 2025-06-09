'use client'

import React from 'react'
import Image from 'next/image'
import { FaCut, FaChild, FaUserTie, FaHotjar, FaUserClock, FaComments } from 'react-icons/fa'
import { MdCheckCircle } from 'react-icons/md'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'

const services = [
  {
    name: "Men's Haircuts",
    icon: <FaCut />,
    image: '/gallery_images/IMG_3175.png',
    desc: 'Tailored, precise cuts for the modern gentleman.',
    price: '$30',
  },
  {
    name: "Boys' Haircuts",
    icon: <FaChild />,
    image: '/gallery_images/IMG_3184.png',
    desc: 'Fun, stylish cuts for kids of all ages.',
    price: '$25',
  },
  {
    name: 'Beard Trimming & Shaping',
    icon: <FaUserTie />,
    image: '/gallery_images/IMG_3182.png',
    desc: 'Clean lines and perfect fades for every beard type.',
    price: '$20 (+$5 w/ razor)',
  },
  {
    name: 'Hot Towel Shave',
    icon: <FaHotjar />,
    image: '/gallery_images/IMG_3193.PNG',
    desc: 'Traditional straight razor shave with hot towel treatment.',
    price: '$35',
  },
  {
    name: 'Senior Haircuts',
    icon: <FaUserClock />,
    image: '/gallery_images/IMG_3201.png',
    desc: 'Classic cuts for 65+ with care and attention.',
    price: '$24 (Weekdays)',
  },
  {
    name: 'Style Consultation',
    icon: <FaComments />,
    image: '/gallery_images/IMG_3210.png',
    desc: 'Discuss your best look — complimentary with any service.',
    price: 'FREE',
  },
]

const ServicesPage = () => {
  return (
    <div className="bg-neutral-950 text-white font-sans">
      <Navbar />
      {/* Header */}
      <header className="bg-orange-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-orange-100">
          We take pride in delivering traditional barbering services with modern style and precision. Every visit is personal, every cut is tailored.
        </p>
      </header>

      {/* Service Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-neutral-900 rounded-md overflow-hidden border border-neutral-800 hover:border-orange-500 transition"
          >
            <div className="relative w-full h-52">
              <Image
                src={service.image}
                alt={service.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 space-y-3 text-left">
              <div className="flex items-center gap-2 text-orange-500 text-xl">
                {service.icon}
                <h3 className="font-serif text-xl font-semibold">{service.name}</h3>
              </div>
              <p className="text-gray-300 text-sm">{service.desc}</p>
              <p className="text-white font-semibold">{service.price}</p>
              <Link href="/booking" passHref>
                <button className="mt-2 inline-block bg-orange-600 hover:bg-orange-700 transition text-sm px-4 py-2 text-white font-semibold rounded">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Oakwood Experience */}
      <section className="bg-[#1d1b1a] text-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">The Oakwood Experience</h2>
            <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
              More than just a cut — it's a tradition of craftsmanship and connection. Here's what makes us different.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MdCheckCircle className="text-orange-500 text-xl mt-1" />
                <div>
                  <p className="text-white font-semibold">Authentic Atmosphere</p>
                  <p className="text-gray-400 text-sm">Classic chairs, warm banter, and barbers who remember your name.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MdCheckCircle className="text-orange-500 text-xl mt-1" />
                <div>
                  <p className="text-white font-semibold">Crafted with Care</p>
                  <p className="text-gray-400 text-sm">Every cut, shave, and trim is done with precision and pride.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative w-full h-80 rounded-md overflow-hidden">
          <Image
            src="/gallery_images/IMG_3215.png"
            alt="Oakwood Experience"
            layout="fill"
            objectFit="cover"
          />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default ServicesPage