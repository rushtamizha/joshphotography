"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiMapPin, FiCamera } from "react-icons/fi";
import { HiArrowUpRight } from "react-icons/hi2";
import { portfolioData ,categories} from "@/data";

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All Stories");

  // Filtering Logic
  const filteredStories = activeCategory === "All Stories"
    ? portfolioData
    : portfolioData.filter(story => story.category === activeCategory); 

  return (
    <main className="min-h-screen bg-[#07030C] text-[#FAF9F6] pt-32 pb-24 relative overflow-x-hidden">
      {/* Cinematic ambient background glow */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-amber-900/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        
        {/* ================= HEADER SECTION ================= */}
        <section className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.25em] text-purple-400 font-sans block"
          >
            The Archive
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className=" text-4xl  tracking-wide leading-tight"
          >
            Wedding Stories Told With <br />
            <span className="text-[#D4AF37]   bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Artistic Integrity
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-sans text-[#FAF9F6] text-sm md:text-base max-w-xl mx-auto"
          >
            Browse through some of our most beloved visual legacies documented across spectacular backdrops.
          </motion.p>
        </section>

        {/* ================= CATEGORY FILTER TABS ================= */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-16 max-w-4xl mx-auto hidden"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-6 py-2.5 rounded-full font-sans text-[13px] tracking-wide whitespace-nowrap transition-all duration-500 border focus:outline-none ${
                activeCategory === category
                  ? "border-[#D4AF37] text-[#D4AF37] bg-purple-950/20"
                  : "border-purple-500/10 text-[#FAF9F6] hover:text-[#FAF9F6] hover:border-purple-500/30 bg-[#0B0712]/30"
              }`}
            >
              {category}
              {activeCategory === category && (
                <motion.span
                  layoutId="activeFilterGlow"
                  className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(212,175,55,0.15)] pointer-events-none border border-[#D4AF37]/30"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* ================= STORIES GALLERY GRID ================= */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredStories.map((story) => (
              <motion.div
                key={story.id}
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col justify-between"
              >
                {/* Visual Canvas Block */}
                <div className="relative aspect-4/5 w-full bg-[#0B0712] rounded-2xl overflow-hidden border border-purple-500/10 group-hover:border-purple-500/20 transition-colors duration-500 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                  {/* Subtle Dark Vignette Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07030C] via-transparent to-black/20 z-10 opacity-70 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <Image
                    src={story.featuredImage}
                    alt={`${story.couple}'s wedding photography profile`}
                    fill
                    sizes="(max-w-7xl) 33vw, 50vw"
                    className="object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                  />

                  {/* Micro Floating Category Tag */}
                  <div className="absolute hidden top-4 left-4 z-20 bg-[#07030C]/60 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded-md text-[10px] tracking-widest uppercase text-[#FAF9F6]/80">
                    {story.category}
                  </div>

                  {/* Reveal View Story Link over top right corner on hover */}
                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500">

                  </div>

                  {/* Inline metadata layered within the canvas bounds */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-20 space-y-2.5">
                    <div className="flex hidden flex-wrap gap-1.5">
                      {story.tags?.map((tag, i) => (
                        <span key={i} className="text-[10px] tracking-wide text-[#D4AF37]/75 font-sans bg-[#D4AF37]/5 px-2 py-0.5 rounded border border-[#D4AF37]/10">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className=" text-2xl hidden tracking-wide text-[#FAF9F6]">
                      {story.couple}
                    </h3>

                    <div className="flex hidden items-center text-[13px] text-[#FAF9F6]/60 font-sans tracking-wide space-x-1.5">
                      <FiMapPin size={13} className="text-purple-400/70" />
                      <span className="truncate">{story.location}</span>
                    </div>
                  </div>
                </div>

                {/* Optional Clean Clickable Overlay Area to drive to dynamic page */}
                
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state conditional notice */}
        {filteredStories.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-24 space-y-3"
          >
            <FiCamera size={32} className="mx-auto text-purple-500/40" />
            <p className="font-sans text-[#FAF9F6]/40 text-sm tracking-wide">
              No entries filed under this specific sub-category yet.
            </p>
          </motion.div>
        )}

      </div>
    </main>
  );
}