"use client"
import React from 'react'
import { Layout, ShieldCheck, Users, Globe, Star } from 'lucide-react'
import { motion } from 'framer-motion'

const Services = () => {
  const servicesData = [
    {
      title: "Design Solar Systems",
      description: "Smart tools that help installers calculate loads and design systems with precision.",
      icon: <Layout size={22} className="text-white" />,
      isActive: true
    },
    {
      title: "Find Trusted Installers",
      description: "Homeowners can connect with verified solar professionals for hassle-free energy.",
      icon: <ShieldCheck size={22} className="text-white" />,
      isActive: false
    },
    {
      title: "Grow Your Network",
      description: "Installers gain visibility, share expertise, and discover new project opportunities.",
      icon: <Users size={22} className="text-white" />,
      isActive: false
    },
    {
      title: "Solar Ecosystem",
      description: "Africa's first integrated platform for professionals and solar energy users.",
      icon: <Globe size={22} className="text-white" />,
      isActive: false
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
    <div 
      id="services"
      className="relative w-full bg-cover bg-center bg-no-repeat rounded-xl overflow-hidden px-7 lg:px-10 py-16 lg:py-20 mb-20"
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/2205558762/photo/solar-panel-technicians-discussing-project-teamwork-and-sustainability.jpg?s=1024x1024&w=is&k=20&c=GzpARa-HAq5eSi0mVA1WflIr6ld1rz2BmZXip2dhsz0=)`
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex flex-col h-full max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-xl space-y-4 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            <div className='flex items-center gap-2'>
              <div className='h-0.5 w-10 bg-white'></div>
              <p className='text-white font-medium tracking-widest text-xs uppercase'>
                What we offer at EcoSynergy
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Africa&apos;s First <br /> Solar Ecosystem
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-md space-y-6 will-change-transform"
            style={{ transform: 'translateZ(0)' }}
          >
            <p className="text-white/80 text-sm leading-relaxed">
              EcoSynergy is building the future of solar collaboration. Whether you&apos;re a homeowner, solar engineer, or energy enthusiast, we give you the tools and connections to power the future.
            </p>
            
            <div className="space-y-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#228B22] text-[#228B22]" />
                ))}
              </div>
              <p className="text-white text-xs font-semibold">
                Join 125+ early users building the solar future in Africa
              </p>
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-20px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesData.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className={`p-5 rounded-md flex flex-col gap-6 transition-all duration-300 transform cursor-pointer h-full will-change-transform ${
                service.isActive 
                ? "bg-[#F58C2A] shadow-lg" 
                : "bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
              }`}
              style={{ transform: 'translateZ(0)' }}
            >
              <div className={`w-10 h-10 rounded-md flex items-center justify-center border border-white/20 ${
                service.isActive ? "bg-white/20" : "bg-white/10"
              }`}>
                {service.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-white text-xl font-bold">{service.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services
