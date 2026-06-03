"use client";

import { motion } from "framer-motion";
import { Sparkles, MessageCircle, CalendarDays, Camera, Film, Library } from "lucide-react";

const steps = [
  {
    phase: "Phase 01",
    title: "The Initial Consultation",
    description: "A profound conversation where we unpack your cultural vision, timeline logistics, family expectations, and emotional priorities.",
    icon: MessageCircle,
    color: "group-hover:border-purple-500/30"
  },
  {
    phase: "Phase 02",
    title: "Bespoke Scheduling & Planning",
    description: "Tailoring shot lists around delicate family rituals, coordinate lighting directions, and structure timelines for a peaceful workflow.",
    icon: CalendarDays,
    color: "group-hover:border-amber-500/20"
  },
  {
    phase: "Phase 03",
    title: "The Wedding Preservation",
    description: "An elite, unobtrusive execution blending into your grand celebration, capturing raw human expressions with cinematic poise.",
    icon: Camera,
    color: "group-hover:border-purple-500/30"
  },
  {
    phase: "Phase 04",
    title: "Editorial Post-Production",
    description: "Meticulous color grading, structural frame cleanups, and sound design tailored to match fine-art legacy standards.",
    icon: Film,
    color: "group-hover:border-amber-500/20"
  },
  {
    phase: "Phase 05",
    title: "Luxury Heirloom Delivery",
    description: "Presenting your breathtaking wedding stories through museum-quality physical master albums and premium private digital archives.",
    icon: Library,
    color: "group-hover:border-purple-500/30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function ExperienceSection() {
  return (
    <section className="relative   bg-[#07040A] py-14 md:py-22 overflow-hidden border-b border-purple-500/5">
      
      {/* Background Atmosphere Lighting Elements */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 md:px-10 lg:px-12 w-full">
        
        {/* Editorial Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
          <div className="flex items-center space-x-2 bg-purple-950/40 border border-purple-500/10 rounded-full w-fit px-4 py-1.5 mb-4 mx-auto backdrop-blur-md">
            <Sparkles size={13} className="text-[#D4AF37]" />
            <span className="font-sans text-xs md:text-sm tracking-wide text-purple-300 capitalize">
              The Client Journey
            </span>
          </div>
          <h3 className=" text-3xl  text-[#FAF9F6] tracking-wide leading-tight">
            The{" "}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent  ">
              Josh Experience
            </span>
          </h3>
          <p className="font-sans text-sm md:text-[16px] text-[#FAF9F6]   mt-4 leading-relaxed max-w-2xl mx-auto">
            From the very first conversation to the final album delivery, every experience with Josh Photography Studios is designed with elegance, absolute professionalism, and heartfelt care — creating family memories that feel timeless forever.
          </p>
        </div>

        {/* Structural Linear Journey Layout */}
        <motion.div 
          className="relative flex flex-col space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Central Connecting Timeline Path Line (Desktop Only) */}
          <div className="absolute left-[31px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-purple-500/20 via-amber-500/10 to-transparent pointer-events-none hidden md:block" />

          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative flex flex-col md:flex-row items-start md:space-x-8 w-full text-left"
              >
                {/* Left Side Icon Column Block */}
                <div className="flex items-center space-x-4 md:space-x-0 shrink-0 z-10 mb-4 md:mb-0">
                  <div className="p-4 bg-[#0B0712] border border-white/5 rounded-2xl text-purple-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-400 shadow-xl">
                    <IconComponent size={22} strokeWidth={1.2} />
                  </div>
                  
                  {/* Phase Marker Visible Only on Mobile to Maintain Rhythm */}
                  <span className=" text-xs tracking-widest text-[#D4AF37]/50 uppercase md:hidden">
                    {step.phase}
                  </span>
                </div>

                {/* Right Side Content Informational Layout Grid */}
                <div className={`w-full bg-[#0B0712]/30 backdrop-blur-md border border-white/[0.02] rounded-2xl p-6 md:p-8 transition-all duration-400 hover:bg-[#0B0712]/60 ${step.color}`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full mb-2 gap-1">
                    <h4 className="font-sans text-[17px] md:text-[18px] font-medium tracking-wide text-[#FAF9F6]/90 group-hover:text-[#FAF9F6] transition-colors duration-300">
                      {step.title}
                    </h4>
                    {/* Phase Marker Displayed on Desktop */}
                    <span className=" text-xs tracking-widest text-[#D4AF37]/40 group-hover:text-[#D4AF37]/70 transition-colors duration-400 uppercase hidden md:inline">
                      {step.phase}
                    </span>
                  </div>
                  
                  <p className="font-sans text-sm md:text-[15px] text-[#FAF9F6]/60  leading-relaxed group-hover:text-[#FAF9F6]/75 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}