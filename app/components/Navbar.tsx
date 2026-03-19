"use client"
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleSidebar = () => setIsOpen(!isOpen)

  // Section observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-150px 0px -70% 0px',
      threshold: 0
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id || 'home')
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    
    const sections = ['about', 'services']
    sections.forEach(id => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    // Special case for home (top of page)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('home')
      }
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Prevent scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup function
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '/', id: 'home' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'What We Offer', href: '#services', id: 'services' },
  ]

  return (
    <div className='h-[10vh] lg:h-[11vh] text-gray-950 flex justify-between lg:justify-around items-center text-sm px-4 lg:px-0 relative z-50'>
        {/* Logo */}
        <div className='shrink-0'>
            <Image src='https://res.cloudinary.com/drhfrgahv/image/upload/v1773828992/logo2_ehl6wb.png' alt='logo' width={100} height={100}/>
        </div>

        {/* Desktop Nav */}
        <nav className='hidden lg:flex items-center gap-10'>
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={link.href} 
                className={`relative py-1 transition-colors font-medium hover:text-[#F58C2A] ${
                  activeSection === link.id ? 'text-[#F58C2A]' : 'text-gray-950'
                }`}
              >
                {link.name}
                {activeSection === link.id && (
                  <motion.div 
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F58C2A] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden lg:block'>
          <Link href="/waitlist">
            <button className='bg-linear-to-r from-[#F58C2A] to-[#F5512A] text-white text-sm font-semibold px-8 py-2.5 rounded-full [box-shadow:inset_0_0px_3px_rgba(0,0,0,0.4)] cursor-pointer hover:scale-105 transition-transform'>
                    Join the Waitlist
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button onClick={toggleSidebar} className='lg:hidden p-2 text-gray-700 cursor-pointer'>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Sidebar Overlay */}
        {isOpen && (
          <div className='fixed inset-0 bg-black/40 backdrop-blur-sm z-99 lg:hidden' onClick={toggleSidebar} />
        )}

        {/* Mobile Sidebar */}
        <div className={`fixed top-0 right-0 h-full w-[280px] bg-white/95 backdrop-blur-xl shadow-2xl z-100 transform transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className='flex flex-col h-full pt-6 px-5'>
            <div className='flex justify-between items-center'>
              <Image src='https://res.cloudinary.com/drhfrgahv/image/upload/v1773828992/logo2_ehl6wb.png' alt='logo' width={100} height={100}/>
              <button onClick={toggleSidebar} className='p-2 text-gray-500'>
                <X size={24} />
              </button>
            </div>

            <nav className='flex flex-col space-y-6 pt-10'>
              {navLinks.map((link) => (
                <a 
                  key={link.id}
                  href={link.href} 
                  onClick={toggleSidebar}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === link.id ? 'text-[#F58C2A]' : 'text-gray-800'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className='pt-10'>
              <Link href="/waitlist" onClick={toggleSidebar}>
                <button className='w-full bg-linear-to-r from-[#F58C2A] to-[#F5512A] text-white font-bold py-3 rounded-full shadow-lg'>
                  Join the Waitlist
                </button>
              </Link>
            </div>

            <div className='mt-auto text-center'>
              <p className='text-xs text-gray-400 font-bold tracking-widest uppercase'>EcoSynergy Mobile</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
