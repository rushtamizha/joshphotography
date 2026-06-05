"use client";

import { motion } from "framer-motion";
import { 
  Compass, 
  Film, 
  Heart, 
  History, 
  Sparkles, 
  Layers 
} from "lucide-react";

const trustPoints = [
  {
    num: "01",
    title: "Deep Understanding Of Cultural Traditions",
    description: "Every sacred ritual, quiet blessing, and traditional milestone is documented with profound respect, structural knowledge, and meaning.",
    icon: Compass,
    glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
  },
  {
    num: "02",
    title: "Timeless Cinematic Style",
    description: "A high-end editorial and natural aesthetic crafted deliberately to remain breathlessly beautiful and relevant for generations to come.",
    icon: Film,
    glow: "group-hover:border-amber-500/20 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
  },
  {
    num: "03",
    title: "Capturing Emotions Naturally",
    description: "We bypass forced postures to capture organic, raw human emotions with an overarching touch of elegance, balance, and absolute authenticity.",
    icon: Heart,
    glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
  },
  {
    num: "04",
    title: "Trusted By Generations",
    description: "Families who originally commissioned our studio two decades ago continue to return to preserve the legacies of their children.",
    icon: History,
    glow: "group-hover:border-amber-500/20 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
  },
  {
    num: "05",
    title: "Calm & Respectful Presence",
    description: "An elite, unobtrusive team that blends seamlessly into your grand celebration while maintaining total professional control over every frame.",
    icon: Sparkles,
    glow: "group-hover:border-purple-500/30 group-hover:shadow-[0_0_30px_rgba(124,58,237,0.15)]"
  },
  {
    num: "06",
    title: "Luxury Albums & Materials",
    description: "Every heirloom book and digital cinematic deliverable is custom-tailored using premium materials, micro-edited to flawless precision.",
    icon: Layers,
    glow: "group-hover:border-amber-500/20 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.1)]"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function WhyChooseUs() {
  return (
    <section  className="relative bg-[#07040A] py-14 md:py-32 overflow-hidden border-b border-purple-500/5">
      
      {/* Background Atmosphere Lights */}
      <div className="absolute left-[-10%] top-1/3 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-1/3 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12 w-full">
        
        {/* Editorial Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-purple-400 font-medium mb-3">
            The Standard of Preservation
          </p>
          <h3 className=" text-3xl  text-[#FAF9F6] tracking-wide font-semibold leading-tight">
            Why Families & Couples Choose <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent uppercase tracking-widest">
              Josh Photography
            </span>
          </h3>
        </div>

        {/* Feature Grid Interface */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative bg-[#0B0712]/40 backdrop-blur-md border border-white/[0.03] rounded-2xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 ease-out hover:bg-[#0B0712]/70 ${point.glow}`}
              >
                {/* Structural Card Contents */}
                <div>
                  {/* Top Meta Header Row */}
                  <div className="flex items-center justify-between w-full mb-6">
                    <span className=" text-sm text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors duration-400 tracking-widest">
                      {point.num}
                    </span>
                    <div className="p-2.5 bg-white/[0.01] border border-white/5 rounded-xl text-purple-300/40 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 transition-all duration-400">
                      <Icon size={18} strokeWidth={1.2} />
                    </div>
                  </div>

                  {/* Title Block */}
                  <h4 className="font-sans text-[17px] md:text-[18px] font-medium tracking-wide capitalize text-[#FAF9F6]/90 group-hover:text-[#FAF9F6] transition-colors duration-300 mb-3">
                    {point.title}
                  </h4>

                  {/* Detailed Description Block */}
                  <p className="font-sans text-sm md:text-[15px] text-[#FAF9F6]  leading-relaxed group-hover:text-white transition-colors duration-300">
                    {point.description}
                  </p>
                </div>

                {/* Bottom Card Base Line Decoration Accent */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/0 to-transparent group-hover:via-purple-500 transition-all duration-700 mt-6" />
                
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}