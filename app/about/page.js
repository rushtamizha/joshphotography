"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiHeart, FiCamera, FiUsers, FiAward } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

// Animation Variants for orchestrated entry
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#07030C] text-[#FAF9F6] overflow-x-hidden pt-32 pb-24 relative">
      {/* Background Ambience / Glow fields */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-amber-900/5 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* ================= HERO SECTION ================= */}
        <section className="mb-24 lg:mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Creative Manifesto Text */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.span 
                variants={fadeInUp}
                className="text-xs uppercase tracking-[0.25em] text-purple-400 font-sans block"
              >
                Our Legacy & Philosophy
              </motion.span>
              
              <motion.h2 
                variants={fadeInUp}
                className=" text-4xl  tracking-wide leading-[1.15]"
              >
                Crafting Visual Poetry From <br />
                <span className="text-[#D4AF37]   bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent">
                  Pure Expressions of Love
                </span>
              </motion.h2>

              <motion.p 
                variants={fadeInUp}
                className="font-sans text-[#FAF9F6] text-base md:text-lg leading-relaxed pt-2 max-w-2xl"
              >
                Welcome to Josh Photography. We are a dedicated, artistic, and creative collective 
                constantly pushing the boundaries of contemporary visual storytelling. To us, weddings 
                are not mere events on a calendar—they are the absolute purest showcase of human vulnerability, 
                joy, and devotion. 
              </motion.p>

              <motion.p 
                variants={fadeInUp}
                className="font-sans text-[#FAF9F6] text-base md:text-lg leading-relaxed max-w-2xl"
              >
                We look far beyond the traditional frame. We don&apos;t just map timestamps or capture curated moments; 
                we archive the spaces between heartbeats, the quiet glances, and the raw, unscripted emotional tales 
                that make your legacy unique. We plunge our hearts and souls into every single project, creating 
                handcrafted artwork built to transcend generations.
              </motion.p>
            </motion.div>

            {/* Immersive Hero Frame */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95, x: 30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-purple-500/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)] group">
                <div className="absolute inset-0 bg-gradient-to-t from-[#07030C] via-transparent to-transparent z-10 opacity-60" />
                <Image
                  src="/owner.png" /* Replace with an atmospheric portrait or behind-the-scenes masterwork */
                  alt="The Artistic Vision of Josh Photography Studios"
                  fill
                  priority
                  className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
              {/* Abstract Border Overlay Accent */}
              <div className="absolute -inset-4 border border-[#D4AF37]/10 rounded-2xl pointer-events-none -z-10 translate-x-2 translate-y-2" />
            </motion.div>

          </div>
        </section>

        {/* ================= MILESTONES DATA GRID ================= */}
        <motion.section 
          className="mb-24 lg:mb-32 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {[
            { metric: "1500+", label: "Events Documented", desc: "Grand cultural showcases to quiet unions.", icon: FiCamera },
            { metric: "1000+", label: "Couples Entrusted", desc: "Deep cinematic visual memoirs captured.", icon: FiUsers },
            { metric: "100%", label: "Heart & Soul Commitment", desc: "Uncompromised creative dedication.", icon: FiHeart },
            { metric: "Elite", label: "Pan-India Recognition", desc: "Regarded among India's finest visual artists.", icon: FiAward },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-[#0B0712]/50 backdrop-blur-md border border-purple-500/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between group hover:border-purple-500/20 transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.03)]"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-purple-950/40 border border-purple-500/10 flex items-center justify-center text-purple-300 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 transition-colors duration-300 mb-6">
                    <Icon size={18} />
                  </div>
                  <h3 className=" text-3xl md:text-4xl text-[#FAF9F6] tracking-tight mb-2">
                    {stat.metric}
                  </h3>
                  <div className="font-sans text-[14px] text-[#FAF9F6] font-medium tracking-wide mb-1">
                    {stat.label}
                  </div>
                </div>
                <p className="font-sans text-[13px] text-[#FAF9F6] leading-relaxed mt-2">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.section>

        {/* ================= COLLECTIVE / TALENT PHILOSOPHY ================= */}
        <section className="mb-24 lg:mb-32 bg-gradient-to-b from-[#0B0712]/30 to-transparent border-y border-purple-500/5 py-16 md:py-20 px-6 md:px-12 rounded-3xl relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gradient from-purple-500/5 via-transparent to-transparent opacity-30" />
          <div className="max-w-3xl mx-auto text-center space-y-6 relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-sans block"
            >
              The Collective
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" text-3xl  tracking-wide text-purple-500"
            >
              Master Crafters & Storytellers
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans text-[#FAF9F6] text-base md:text-lg leading-relaxed"
            >
              Josh Photography Studios houses a highly specialized plethora of fine-art photographers, conceptual directors, 
              and cinematic innovators. Every collaborator within our collective is deeply committed to crafting 
              harmonious, heartfelt imagery that balances raw human passion with sophisticated composition. We don’t 
              just work with events—we invest entirely in families.
            </motion.p>
          </div>
        </section>

        {/* ================= CLOSING CTA ================= */}
        <motion.section 
          className="text-center space-y-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className=" text-3xl md:text-4xl tracking-wide">
            Let Us Tell Your <br />
            <span className="  text-[#D4AF37]">Visual Masterpiece</span>
          </h2>
          <p className="font-sans text-[#FAF9F6] text-sm md:text-base leading-relaxed">
            Ready to immortalize your celebrations? Connect with our global planning team to outline bespoke imagery concepts engineered exclusively around your story.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
               href="https://wa.me/917338078008"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 w-full sm:w-auto bg-gradient-to-r from-purple-600 via-[#7C3AED] to-purple-700 text-[#FAF9F6] px-8 py-4 rounded-full transition-all duration-300 font-sans text-[15px] tracking-wide capitalize font-medium shadow-[0_8px_30px_rgba(124,58,237,0.3)] border border-purple-400/20 hover:scale-[1.02] active:scale-[0.99]"
            >
              <FaWhatsapp className="text-[19px] text-[#D4AF37]" />
              <span>Initiate Consultation</span>
            </Link>
            
            <Link
              href="/portfolio"
              className="flex items-center justify-center space-x-2 text-[#FAF9F6]/80 hover:text-[#FAF9F6] px-6 py-4 font-sans text-[15px] tracking-wide transition-all group"
            >
              <span>Explore Portfolio</span>
              <HiArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-[#D4AF37]" />
            </Link>
          </div>
        </motion.section>

      </div>
    </main>
  );
}