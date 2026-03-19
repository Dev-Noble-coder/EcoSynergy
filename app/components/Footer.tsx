"use client"
import Image from 'next/image'
import React from 'react'
import { Twitter, Linkedin, Youtube, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const TikTokIcon = ({ size = 18 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className='py-16 border-t border-gray-100 mt-20'
    >
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
          {/* Logo & Info */}
          <div className='space-y-6 text-center md:text-left'>
            <Image 
              src='https://res.cloudinary.com/drhfrgahv/image/upload/v1773828992/logo2_ehl6wb.png' 
              alt='EcoSynergy Logo' 
              width={120} 
              height={120}
              className='mx-auto md:mx-0'
            />
            <p className='text-[#666666] text-sm max-w-xs leading-relaxed'>
              Africa&apos;s First Solar Ecosystem connecting installers, engineers, and users for a sustainable future.
            </p>
          </div>

          {/* Contact & Socials */}
          <div className='space-y-8 text-center md:text-right'>
            <div className='flex flex-col md:flex-row items-center gap-8 md:justify-end'>
              <a href="mailto:hobbs.energy4570@gmail.com" className='flex items-center gap-2 text-[#333333] hover:text-[#F58C2A] transition-colors cursor-pointer'>
                <Mail size={18} />
                <span className='text-sm font-medium'>hobbs.energy4570@gmail.com</span>
              </a>
              
              <div className='flex items-center gap-4'>
                <a href="https://youtube.com/@hobbs.energy?si=Dwv2d4c9TB0bEifh" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-50 rounded-full hover:bg-[#EDFAFF] hover:text-[#F58C2A] transition-all' title="YouTube">
                  <Youtube size={18} />
                </a>
                <a href="https://x.com/wokeupdann" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-50 rounded-full hover:bg-[#EDFAFF] hover:text-[#F58C2A] transition-all' title="Twitter">
                  <Twitter size={18} />
                </a>
                <a href="https://www.linkedin.com/in/adebayodanielolamide4570" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-50 rounded-full hover:bg-[#EDFAFF] hover:text-[#F58C2A] transition-all' title="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://www.tiktok.com/@hobbs.energy?_r=1&_t=ZS-94ojI9OhaEO" target="_blank" rel="noopener noreferrer" className='p-2 bg-gray-50 rounded-full hover:bg-[#EDFAFF] hover:text-[#F58C2A] transition-all' title="TikTok">
                  <TikTokIcon size={18} />
                </a>
              </div>
            </div>

            <div className='flex flex-col md:flex-row gap-6 md:justify-end text-xs font-semibold text-[#888888] uppercase tracking-wider'>
              <a href="#" className='hover:text-[#F58C2A] transition-colors'>How it works</a>
              <a href="#" className='hover:text-[#F58C2A] transition-colors'>Terms of service</a>
              <a href="#" className='hover:text-[#F58C2A] transition-colors'>Privacy policy</a>
            </div>
          </div>
        </div>

        <div className='mt-16 pt-8 border-t border-gray-100 text-center text-[10px] text-[#AAAAAA] uppercase tracking-[0.2em] font-bold'>
          &copy; {new Date().getFullYear()} EcoSynergy. Powering the Future of Solar.
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer