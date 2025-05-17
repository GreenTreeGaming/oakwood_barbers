// app/components/Section3.tsx
import React from 'react'
import { FaClock } from 'react-icons/fa'

const Section3 = () => {
  return (
    <section className="bg-neutral-900 text-white py-10 px-6 text-center">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="flex items-center gap-3">
          <FaClock className="text-2xl text-orange-400" />
          <h2 className="text-2xl font-bold uppercase tracking-wide font-serif">
            Barbershop Hours
          </h2>
        </div>

        <div className="text-sm md:text-base text-orange-300 space-y-1">
          <p className="font-semibold">Tuesday – Friday</p>
          <p>9 AM – 6 PM</p>
          <p className="font-semibold pt-2">Saturday</p>
          <p>9 AM – 1 PM</p>
        </div>
      </div>
    </section>
  )
}

export default Section3