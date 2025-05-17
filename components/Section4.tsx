// app/components/Section4.tsx
import React from 'react'
import Image from 'next/image'

const barbers = [
  {
    name: 'Greg',
    img: '/barber-greg.jpg', // Place in public folder
  },
  {
    name: 'Shannon',
    img: '/barber-shannon.jpg',
  },
  {
    name: 'Mike',
    img: '/barber-mike.jpg',
  },
]

const Section4 = () => {
  return (
    <section className="bg-neutral-100 text-black py-16 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide font-serif">
          Our Barbers
        </h2>
        <p className="text-sm text-gray-600 mt-2 italic">
          Always remember to smart off after your haircut as the results may greatly improve!
        </p>
        <div className="w-32 h-1 mx-auto bg-black rounded-full mt-4" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {barbers.map((barber) => (
          <div key={barber.name} className="text-center">
            <div className="relative w-64 h-80 mx-auto rounded-xl overflow-hidden shadow-lg">
              <Image
                src={barber.img}
                alt={barber.name}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold uppercase tracking-wide">
              {barber.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Section4