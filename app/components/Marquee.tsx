"use client"
import React from 'react'

const Marquee = () => {
  const items = [
    "NIGERIAN INNOVATION",
    "SOLAR ECOSYSTEM",
    "SOLAR INSTALLERS",
    "HOMEOWNERS",
    "ENERGY ENGINEERS",
    "TRUSTED NETWORK"
  ]

  const marqueeItems = [...items, ...items, ...items, ...items, ...items, ...items]

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
      <div className="w-screen relative left-1/2 -translate-x-1/2 bg-[#0a150a]/10 backdrop-blur-sm py-5 overflow-hidden my-10 flex marquee-container">
        <div className="flex whitespace-nowrap w-fit animate-marquee hover:cursor-default">
          {marqueeItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 sm:gap-8 md:gap-14 mx-4 sm:mx-8 md:mx-14 transition-opacity opacity-80 hover:opacity-100">
              {/* The dot */}
              <div className="w-1.5 h-1.5 rounded-full bg-[#F58C2A] shadow-[0_0_8px_rgba(245,140,42,0.8)]" />
              {/* The text */}
              <span className="text-[#F58C2A] text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Marquee
