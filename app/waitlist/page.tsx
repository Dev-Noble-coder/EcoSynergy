"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

const WaitlistPage = () => {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-10 md:p-8">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0 will-change-opacity"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1773913297/sunset-sky-reflects-solar-panel-sustainable-power-generation-generative-ai_hvgozr.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 px-5">
        
        {/* Left Column: Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 text-white space-y-5 text-left will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-4">
            <ArrowLeft size={20} />
            <span className="text-xs font-semibold uppercase tracking-wider">Back to Home</span>
          </Link>
          
          <div className="space-y-4">
            <h1 className="text-6xl font-black leading-tight">
              Power the <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F58C2A] to-[#F5512A]">Future</span> of Africa
            </h1>
            <p className="text-md text-white/80 max-w-lg mx-auto lg:mx-0">
              Join 125+ professionals building the first solar ecosystem. Be the first to know when we launch.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            {[
              "Connect with verified installers",
              "Access smart design tools",
              "Grow your solar business",
              "Hassle-free energy maintenance"
            ].map((feature, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (i * 0.05) }}
                className="flex items-center gap-3 justify-start will-change-transform"
                style={{ transform: 'translateZ(0)' }}
              >
                <CheckCircle2 size={24} className="text-[#228B22]" />
                <span className="font-semibold text-white/90 text-sm">{feature}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Glassy Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full lg:max-w-md will-change-transform"
          style={{ transform: 'translateZ(0)' }}
        >
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-md shadow-2xl">
            <h2 className="text-xl font-bold text-white mb-8">Join the Waitlist</h2>
            
            <form className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Phone (Optional)</label>
                  <input 
                    type="tel" 
                    placeholder="+234..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">I am a...</label>
                <div className="relative">
                  <select className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#F58C2A] transition-colors appearance-none pr-10">
                    <option className="bg-gray-900" value="">Select User Type</option>
                    <option className="bg-gray-900" value="installer">Solar Installer</option>
                    <option className="bg-gray-900" value="engineer">Solar Engineer / Technician</option>
                    <option className="bg-gray-900" value="homeowner">Homeowner</option>
                    <option className="bg-gray-900" value="enthusiast">Energy Enthusiast</option>
                    <option className="bg-gray-900" value="vendor">Solar Equipment Vendor</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Country</label>
                  <input 
                    type="text" 
                    placeholder="Nigeria"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">City</label>
                  <input 
                    type="text" 
                    placeholder="Lagos"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full mt-4 bg-linear-to-r from-[#F58C2A] to-[#F5512A] text-white font-bold py-2.5 rounded-full shadow-xl cursor-pointer"
              >
                Join the Waitlist
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WaitlistPage