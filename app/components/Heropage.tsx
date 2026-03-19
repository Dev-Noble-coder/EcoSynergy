"use client"
import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Heropage = () => {
  return (
     <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="h-[80vh] w-full bg-cover bg-center bg-no-repeat rounded-xl relative flex justify-center items-center will-change-opacity"
      style={{
        backgroundImage: `url(https://res.cloudinary.com/drhfrgahv/image/upload/v1773828473/solar-panels-roof-solar-cell_uxjhpk.jpg)`,
        transform: 'translateZ(0)'
      }}
    >
        <div className='bg-black/40 inset-0 absolute top-0 rounded-xl z-1' />
      
      <div className='text-[#EDFAFF] text-center z-2 mb-2 px-6'>
         <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='text-sm lg:text-base will-change-transform'
          style={{ transform: 'translateZ(0)' }}
         >
          Nigeria’s First Solar Ecosystem for Installers and Energy Users
         </motion.p>
         
          <div className='max-w-4xl mx-auto'>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
              className='text-4xl lg:text-7xl font-bold leading-tight will-change-transform'
              style={{ backfaceVisibility: 'hidden', transform: 'translateZ(0)' }}
            >
              Powering your Solar Journey with{' '}
              <span className='bg-linear-to-r from-[#F58C2A] to-[#F5512A] bg-clip-text text-transparent'>
                EcoSynergy
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8, type: "spring", damping: 20, stiffness: 100 }}
              className="will-change-transform"
              style={{ transform: 'translateZ(0)' }}
            >
              <Link href="/waitlist">
                <button className='w-full lg:w-auto mt-5 border border-white/30 text-sm font-medium px-16 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer backdrop-blur-md bg-white/10 hover:scale-105 active:scale-95'>
                    Join the Waitlist Today   
                </button>
              </Link>
            </motion.div>
          </div>
      </div>
    </motion.div>
  )
}

export default Heropage