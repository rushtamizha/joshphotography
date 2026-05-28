"use client";

import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Sparkles } from "lucide-react";

const stats = [
  {
    id: 1,
    number: "20+",
    label: "Years Of Experience",
    subtext: "Mastering the art of timing",
    icon: Award,
    color: "from-purple-500/20 to-purple-900/10",
  },
  {
    id: 2,
    number: "1000+",
    label: "Happy Couples",
    subtext: "Legacies beautifully preserved",
    icon: Heart,
    color: "from-amber-500/20 to-orange-900/10",
  },
  {
    id: 3,
    number: "2002",
    label: "Trusted Since",
    subtext: "Two decades of family honor",
    icon: ShieldCheck,
    color: "from-purple-500/20 to-indigo-900/10",
  },
  {
    id: 4,
    number: "Elite",
    label: "Cultural Storytelling",
    subtext: "Honoring sacred traditions",
    icon: Sparkles,
    color: "from-amber-500/20 to-yellow-900/10",
  },
];

// Container animation logic for staggered rendering
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function TrustSection() {
  return (
    <section className="relative bg-[#07040A] py-20 md:py-28 overflow-hidden border-b border-purple-500/5">
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12">
        
        {/* Section Header Context */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-purple-400 font-medium mb-3">
            A Legacy Built On Trust
          </p>
          <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#FAF9F6] tracking-wide leading-tight">
            Why High-Profile Families Choose <br />
            <span className="bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent font-light italic">
              Josh Photography
            </span>
          </h3>
        </div>

        {/* Stats Grid Layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                variants={cardVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative group bg-[#0B0712]/50 backdrop-blur-md border border-purple-500/10 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center transition-all duration-300 hover:border-purple-500/30 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                {/* Micro-glow mask overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Animated Icon Container */}
                <div className="mb-4 p-3.5 bg-purple-950/40 border border-purple-500/10 rounded-xl text-purple-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-400 z-10 relative">
                  <IconComponent size={22} strokeWidth={1.2} />
                </div>

                {/* Big Bold Counter Stat */}
                <h4 className="font-serif text-4xl md:text-5xl text-[#FAF9F6] tracking-wide group-hover:text-[#FAF9F6] transition-colors duration-300 z-10 relative">
                  {stat.id === 4 ? (
                    <span className="bg-gradient-to-r from-[#D4AF37] to-[#FAF9F6] bg-clip-text text-transparent font-medium">
                      {stat.number}
                    </span>
                  ) : (
                    stat.number
                  )}
                </h4>

                {/* Capitalized Title */}
                <p className="font-sans text-[16px] md:text-[17px] text-[#FAF9F6]/90 font-medium capitalize mt-3 tracking-wide z-10 relative">
                  {stat.label}
                </p>

                {/* Subtext Context */}
                <p className="font-sans text-xs md:text-sm text-purple-300/40 group-hover:text-purple-300/60 transition-colors duration-300 font-light mt-1.5 z-10 relative">
                  {stat.subtext}
                </p>
                
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}