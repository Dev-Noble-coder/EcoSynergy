"use client"
import React from 'react'
import { Star, Quote, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const Testimonial = () => {
  const testimonials = [
    {
      name: "Chukwudi O.",
      role: "Solar Installer",
      content: "EcoSynergy's design tools are a game-changer. I can now calculate loads and design systems in minutes instead of hours. The precision is unmatched.",
      rating: 5
    },
    {
      name: "Aisha M.",
      role: "Homeowner",
      content: "Finding a trusted installer used to be a nightmare. Thanks to the EcoSynergy network, I have a reliable solar setup with measurable savings!",
      rating: 5
    },
    {
      name: "Kwame A.",
      role: "Project Engineer",
      content: "The collaboration features are exactly what the Nigerian solar industry needs. It's truly a complete ecosystem that empowers every professional.",
      rating: 5
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className='my-20 px-7 lg:px-10 py-16 bg-[#EDFAFF] rounded-xl relative overflow-hidden'>
      {/* Background decoration */}
      <div className='absolute -top-24 -right-24 w-64 h-64 bg-[#F58C2A]/5 rounded-full blur-3xl'></div>
      <div className='absolute -bottom-24 -left-24 w-64 h-64 bg-[#228B22]/5 rounded-full blur-3xl'></div>

      <div className='relative z-10 space-y-16'>
        {/* Header Section */}
        <div className='flex flex-col md:flex-row justify-between items-end gap-8'>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className='max-w-xl space-y-4'
          >
            <div className='flex items-center gap-2'>
              <div className='h-0.5 w-10 bg-[#F58C2A]'></div>
              <p className='text-[#F58C2A] font-bold tracking-widest text-xs uppercase'>
                What Our Community Says
              </p>
            </div>
            <h2 className='text-4xl md:text-5xl font-extrabold text-[#333333] leading-tight'>
              Trusted by the <span className='text-[#228B22]'>Solar Industry</span>
            </h2>
          </motion.div>
          
          {/* Social Proof Counter */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className='flex items-center gap-4 bg-[#228B22]/10 p-4 rounded-md border border-[#228B22]/20'
          >
            <div className='bg-[#228B22] p-2 rounded-lg text-white'>
              <Users size={24} />
            </div>
            <div>
              <p className='text-2xl font-black text-[#333333]'>125+</p>
              <p className='text-[10px] uppercase font-bold text-[#666666] tracking-tighter'>Early users joined Waitlist</p>
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
        >
          {testimonials.map((t, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className='group p-8 rounded-md bg-white/90 shadow-lg transition-all duration-300 hover:shadow-2xl'
            >
              <div className='space-y-6'>
                <div className='flex justify-between items-start'>
                  <div className='flex gap-1'>
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className='fill-[#228B22] text-[#228B22]' />
                    ))}
                  </div>
                  <Quote className='text-[#F58C2A]/20 group-hover:text-[#F58C2A]/40 transition-colors' size={32} />
                </div>
                
                <p className='text-[#555555] text-sm leading-relaxed italic'>
                  &quot;{t.content}&quot;
                </p>

                <div className='pt-6 border-t border-gray-200/30 flex items-center gap-4'>
                  <div className='w-10 h-10 rounded-full bg-[#F58C2A] flex items-center justify-center text-white font-bold text-sm'>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className='text-[#333333] font-bold text-sm'>{t.name}</h4>
                    <p className='text-[#888888] text-[10px] uppercase tracking-wider font-semibold'>{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Testimonial