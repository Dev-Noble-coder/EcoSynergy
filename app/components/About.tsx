"use client"
import React from 'react'
import Image from 'next/image'
import { Zap, ShieldCheck, Layout, Activity, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  const features = [
    {
      icon: <Zap className="text-[#228B22]" size={20} />,
      title: "50% Energy Reduction",
      description: "Cut your electricity bills by half with our optimized solar load balancing."
    },
    {
      icon: <ShieldCheck className="text-[#F58C2A]" size={20} />,
      title: "Vetted Professionals",
      description: "Connect with certified installers and engineers for guaranteed performance."
    },
    {
      icon: <Layout className="text-[#228B22]" size={20} />,
      title: "Smart Design Tools",
      description: "Precision load calculations and system designs for maximum efficiency."
    },
    {
      icon: <Activity className="text-[#F58C2A]" size={20} />,
      title: "Seamless Growth",
      description: "Scale your solar ecosystem as your energy needs evolve over time."
    }
  ]

  return (
    <div id="about" className='my-20 flex flex-col-reverse lg:flex-row items-center gap-20 '>
      {/* Left Image Section */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className='relative w-full lg:w-1/2 will-change-transform'
        style={{ transform: 'translateZ(0)' }}
      >
        <div className='relative overflow-hidden'>
          <Image 
            src='https://res.cloudinary.com/drhfrgahv/image/upload/v1762509389/img_1_su51e8.png' 
            alt='Eco-friendly energy solutions showing windmills and solar panels' 
            width={600} 
            height={700}
            className='w-full h-auto object-cover rounded-2xl shadow-lg'
          />
        </div>
        
        {/* Savings Badge */}
        <motion.div 
          initial={{ scale: 0, rotate: -5 }}
          whileInView={{ scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.4, type: "spring" }}
          className='absolute -bottom-6 -left-4 md:left-8 bg-[#228B22] text-white p-4 rounded-lg flex items-center gap-4 shadow-2xl border-4 border-white will-change-transform'
          style={{ transform: 'translateZ(0)' }}
        >
          <div className='bg-white/20 p-2.5 rounded-md backdrop-blur-sm'>
             <Zap className="text-white" size={20} fill="currentColor" />
          </div>
          <div>
            <p className='text-md font-extrabold leading-tight'>50% Savings</p>
            <p className='text-[10px] uppercase tracking-wider opacity-80'>Energy efficiency</p>
          </div>
        </motion.div>
      </motion.div>

      {/* Right Content Section */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7 }}
        className='w-full lg:w-1/2 space-y-8 will-change-transform'
        style={{ transform: 'translateZ(0)' }}
      >
        <div className='space-y-3'>
          <div className='flex items-center gap-2'>
            <div className='h-0.5 w-10 bg-[#F58C2A]'></div>
            <p className='text-[#F58C2A] font-bold tracking-widest text-xs uppercase'>
              The EcoSynergy Edge
            </p>
          </div>
          <h2 className='text-4xl lg:text-5xl font-extrabold text-[#333333] leading-tight'>
            Building Nigeria&apos;s First <br />
            <span className='text-[#228B22]'>Solar Ecosystem</span>
          </h2>
          <p className='text-[#666666] text-sm leading-relaxed max-w-lg'>
             We bridge the gap between energy users and professionals, creating a transparent, highly efficient marketplace for renewable power.
          </p>
        </div>

        {/* Features Explicit Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.05) }}
              className='space-y-2 group border border-gray-200 rounded-md p-5 lg:p-3 hover:border-[#F58C2A]/30 transition-colors will-change-transform'
              style={{ transform: 'translateZ(0)' }}
            >
              <div className='flex items-center gap-3'>
                <div className='p-2 bg-gray-50 rounded-md border border-gray-200 group-hover:bg-white transition-colors duration-300'>
                  {feature.icon}
                </div>
                <h3 className='font-bold text-[#333333] text-sm'>{feature.title}</h3>
              </div>
              <p className='text-[#777777] text-xs leading-relaxed'>
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className='pt-4 flex items-center gap-5 border-t border-gray-100'
        >
          <div className='w-12 h-12 rounded-full bg-[#F58C2A] flex items-center justify-center text-white shadow-lg transition-all hover:scale-105 hover:rotate-6 cursor-pointer'>
            <Phone size={20} />
          </div>
          <div>
            <p className='text-[#888888] font-medium text-xs'>Have A Question? Call Us Any Time</p>
            <p className='text-[#333333] text-lg font-bold'>0913 126 5354</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default About
