"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, ChevronDown, Rocket, X, Twitter, Link2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WaitlistPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center py-10 md:p-8 overflow-hidden">
      {/* Background Image */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 z-0 will-change-opacity"
        style={{
          backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1773924228/Gemini_Generated_Image_fbtjevfbtjevfbtj_ofygw6.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'translateZ(0)'
        }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-" />
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
              <span className="text-transparent bg-clip-text bg-linear-to-r from-[#F58C2A] to-[#F5512A]">Future</span> of Nigeria
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
            
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Full Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Email</label>
                  <input 
                    type="email" 
                    required
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
                  <select required className="w-full bg-white/10 border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#F58C2A] transition-colors appearance-none pr-10">
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
                    required
                    placeholder="Nigeria"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">City</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Lagos"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <label className="text-xs font-bold text-white/60 uppercase tracking-widest pl-1">Which feature would you like to see? (Optional)</label>
                <textarea 
                  rows={2}
                  placeholder="e.g. Solar loan calculator, verified installer chat..."
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-[#F58C2A] transition-colors resize-none"
                />
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

      {/* Success Popup */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative w-full max-w-sm bg-white rounded-2xl p-8 text-center shadow-2xl overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-linear-to-r from-[#F58C2A] to-[#F5512A]" />
              
              <button 
                onClick={() => setIsSubmitted(false)}
                className="absolute top-5 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={18} />
              </button>

              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-[#228B22]/10 rounded-full flex items-center justify-center text-[#228B22]">
                   <Rocket size={32} />
                </div>
              </div>

              <h3 className="text-2xl font-black text-gray-900 mb-2">You&apos;re On the List!</h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed px-2">
                Thank you for joining EcoSynergy. We&apos;ve reserved your spot in Nigeria&apos;s solar revolution.
              </p>

              <div className="bg-gray-50 rounded-xl p-4 mb-8 border border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Share the Revolution</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent("I just joined the EcoSynergy waitlist! Powering the future of Nigeria's solar ecosystem. ☀️🇳🇬 #EcoSynergy #SolarRevolution")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Twitter size={18} fill="white" />
                  </a>
                  <a 
                    href={`https://wa.me/?text=${encodeURIComponent("I just joined the EcoSynergy waitlist! Join me in building Nigeria's first solar ecosystem: https://ecosynergy.com/waitlist")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#25D366] text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 .015 5.398.012 12.037c0 2.123.554 4.197 1.606 6.046L0 24l6.103-1.602a11.83 11.83 0 005.942 1.603h.005c6.635 0 12.034-5.399 12.038-12.038.003-3.217-1.246-6.241-3.511-8.507z"/></svg>
                  </a>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText("https://ecosynergy.com/waitlist")
                      alert("Link copied!")
                    }}
                    className="w-10 h-10 bg-gray-200 text-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Link2 size={18} />
                  </button>
                </div>
              </div>

              <button 
                onClick={() => setIsSubmitted(false)}
                className="w-full bg-gray-900 text-white font-bold py-2.5 rounded-full hover:bg-black transition-colors shadow-lg cursor-pointer"
              >
                Awesome!
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WaitlistPage