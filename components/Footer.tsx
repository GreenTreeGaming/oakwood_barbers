// app/components/Footer.tsx
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

        {/* Right Side: Contact */}
        <div>
          <h2 className="text-2xl font-bold uppercase mb-4 tracking-wide font-serif">
            Contact
          </h2>
          <p className="text-sm text-gray-300 mb-6">
            <span className="font-semibold">Phone:</span> (763) 473-5887
          </p>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-neutral-800 text-white px-4 py-2 rounded-sm w-full" />
              <input type="text" placeholder="Last Name" className="bg-neutral-800 text-white px-4 py-2 rounded-sm w-full" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address" className="bg-neutral-800 text-white px-4 py-2 rounded-sm w-full" />
              <input type="tel" placeholder="Phone Number" className="bg-neutral-800 text-white px-4 py-2 rounded-sm w-full" />
            </div>
            <textarea
              placeholder="Enter your message here..."
              rows={4}
              className="bg-neutral-800 text-white px-4 py-2 rounded-sm w-full"
            ></textarea>
            <button
              type="submit"
              className="px-6 py-2 border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white transition rounded-sm"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-400 mt-12 border-t border-gray-700 pt-4">
        Copyright © {new Date().getFullYear()} Oakwood Barbers
      </div>
    </footer>
  )
}

export default Footer