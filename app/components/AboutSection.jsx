"use client";

import { motion } from "framer-motion";
import { Sparkles, Camera, Award } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-[#07040A] py-24 md:py-32 overflow-hidden border-b border-purple-500/5">
      
      {/* Ethereal Background Glow Behind the Owner's Portrait */}
      <div className="absolute right-0 top-1/4 w-[400px] h-[400px] bg-purple-600/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Structural Text Context & Philosophy */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
          
          {/* Subtle Accent Ribbon */}
          <motion.div 
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-purple-950/40 border border-purple-500/10 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span className="font-sans text-xs md:text-sm tracking-wide text-purple-300/80 capitalize">
              Our Philosophy
            </span>
          </motion.div>

          {/* Master Section Heading */}
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] tracking-wide leading-tight"
          >
            A Legacy Built On Emotion, <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-light italic">
              Tradition & Timeless Elegance
            </span>
          </motion.h3>

          {/* Core Body Paragraph Block */}
          <div className="space-y-5 font-sans text-[16px] md:text-[17px] text-[#FAF9F6]/75 font-light leading-relaxed max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At Josh Photography Studios, we believe weddings are far more than grand celebrations — they are profoundly emotional family legacies filled with love, silent blessings, deep cultural traditions, and unforgettable fleeting moments.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              For over two decades, we have held the distinct honor of preserving beautiful, high-profile cultural weddings through timeless photography and high-end cinematic storytelling. Every frame we craft is built upon absolute authenticity, family trust, and the natural heartbeat of your celebration.
            </motion.p>
          </div>

          {/* Trust Highlights Built Directly into the Copy Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6 pt-4 w-full max-w-md border-t border-purple-500/10 mt-2"
          >
            <div className="flex items-start space-x-3 text-left">
              <Camera size={18} className="text-[#D4AF37] mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h5 className="font-sans text-[15px] font-medium text-[#FAF9F6]">Cinematic Vision</h5>
                <p className="font-sans text-xs text-purple-300/40 font-light mt-0.5">Crafted like fine-art film</p>
              </div>
            </div>
            <div className="flex items-start space-x-3 text-left">
              <Award size={18} className="text-purple-400 mt-1 shrink-0" strokeWidth={1.5} />
              <div>
                <h5 className="font-sans text-[15px] font-medium text-[#FAF9F6]">20+ Years Honor</h5>
                <p className="font-sans text-xs text-purple-300/40 font-light mt-0.5">Trusted across generations</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Founder High-End Editorial Portrait Area */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative mt-6 lg:mt-0">
          
          {/* Decorative Framing Accent Elements */}
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b border-l border-[#D4AF37]/20 pointer-events-none rounded-bl-3xl hidden md:block" />
          <div className="absolute -top-4 -right-4 w-24 h-24 border-t border-r border-purple-500/20 pointer-events-none rounded-tr-3xl hidden md:block" />

          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[340px] md:max-w-[380px] aspect-[3/4] bg-[#0B0712] rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/15 shadow-[0_25px_60px_rgba(0,0,0,0.8)] group"
          >
            {/* Fine Art Monochrome Tint Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#07040A] via-purple-950/10 to-transparent opacity-80 mix-blend-multiply z-10 pointer-events-none group-hover:opacity-40 transition-opacity duration-700" />
            
            <img
              src="/owner.png" // Professional, premium classy/monochrome look portrait placeholder
              alt="Josh - Founder & Creative Director"
              className="w-full h-full object-cover filter grayscale contrast-[1.05] brightness-[0.95] group-hover:scale-105 transition-transform duration-750 ease-[cubic-bezier(0.16,1,0.3,1)]"
              loading="lazy"
            />
          </motion.div>

          {/* Owner Identity Tag Details */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-6"
          >
            <h4 className="font-serif text-lg md:text-xl text-[#FAF9F6] tracking-wide">
              Josh
            </h4>
            <p className="font-sans text-xs md:text-sm text-[#D4AF37] tracking-wider font-light mt-1 capitalize">
              Founder & Master Storyteller
            </p>
            {/* Optional elegant digital script text signature styling rule */}
            <p className="font-serif italic text-sm text-purple-400/30 mt-3 font-light select-none tracking-widest">
              Josh Studios
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}