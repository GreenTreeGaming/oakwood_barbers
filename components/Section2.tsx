// app/components/Section2.tsx
import React from 'react'

const Section2 = () => {
  return (
    <section className="w-full">
      {/* WHO WE ARE */}
      <div className="bg-neutral-900 text-white py-16 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-6 font-serif">
          Who We Are
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 text-lg text-orange-300 font-light leading-relaxed">
          <p>
            Oakwood Barbers is an old-school traditional barbershop specializing exclusively in Boys and Men’s haircuts and beard trims.
          </p>
          <p>
            Originally established in Plymouth, MN in 1959, we are now located in Medina, MN.
          </p>
          <p>
            All of our barbers are trained Master Barbers with years of experience and will always provide you top notch service and quality.
          </p>
          <p className="text-sm text-orange-200 italic mt-4">
            *All prices subject to change<br />
            **All services to be done at barber's discretion
          </p>
        </div>
      </div>

      {/* OUR SERVICES */}
      <div className="bg-white text-black py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wide mb-2 font-serif">
          Our Services
        </h2>
        <p className="text-gray-600 mb-12 text-sm italic">
          We are a cash-only / appointment-only establishment.
        </p>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg font-semibold">
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Haircut – $30</h3>
            <p className="text-sm text-gray-500 mt-1">(Including Seniors on Saturdays)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Beard Trim – $20</h3>
            <p className="text-sm text-gray-500 mt-1">(w/razor +$5)</p>
          </div>
          <div>
            <h3 className="text-xl font-bold uppercase tracking-tight">Senior Haircut – $24</h3>
            <p className="text-sm text-gray-500 mt-1">(65+ Weekdays Only)</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section2