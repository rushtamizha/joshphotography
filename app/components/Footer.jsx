"use client";

import { motion } from "framer-motion";
import { 
  FiSparkles, 
  FiInstagram, 
  FiYoutube, 
  FiMail, 
  FiPhone, 
  FiMapPin 
} from "react-icons/fi";
import { FaFacebookF, FaWandMagicSparkles } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";
FaWandMagicSparkles
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#050307] overflow-hidden border-t border-purple-500/10">
      
      {/* Background Cinematic Atmosphere Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* ========================================== */}
      {/* 01. MASTER FINAL CTA SECTION               */}
      {/* ========================================== */}
      <div className="relative z-10 hidden max-w-7xl mx-auto px-5 md:px-10 lg:px-12 pt-24 pb-20 border-b border-purple-500/10">
        <div className="bg-[#0B0712]/40 backdrop-blur-md border border-purple-500/10 rounded-3xl p-8 md:p-16 text-center max-w-5xl mx-auto relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
          
          {/* Internal Micro Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/[0.02] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-2 bg-purple-950/50 border border-purple-500/10 rounded-full px-4 py-1.5 backdrop-blur-sm">
              <FaWandMagicSparkles size={13} className="text-[#D4AF37]" />
              <span className="font-sans text-xs md:text-sm tracking-wide text-purple-300/80 capitalize">
                Begin Your Legacy Story
              </span>
            </div>

            <h2 className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#FAF9F6] tracking-wide leading-tight">
              Let’s Create Timeless <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent  ">
                Memories Together
              </span>
            </h2>

            <p className="font-sans text-sm md:text-[16px] text-[#FAF9F6]/60  max-w-2xl leading-relaxed">
              Capturing high-profile cultural weddings with absolute elegance, structural reverence, deep emotion, and premium cinematic beauty since 2002.
            </p>

            <motion.div 
              className="pt-6"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              <a 
                href="#contact" 
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] text-[#07040A] font-sans text-sm font-medium tracking-wide px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.25)] transition-all duration-300 hover:shadow-[0_15px_40px_rgba(212,175,55,0.4)]"
              >
                <span>Check Availability</span>
                <HiArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ========================================== */}
      {/* 02. LUXURY EDITORIAL FOOTER SECTION        */}
      {/* ========================================== */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12 pt-20 pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 lg:gap-12 pb-16 items-start">
          
          {/* Brand Presentation Block */}
          <div className="md:col-span-5 flex flex-col space-y-5 text-left">
            <div>
              <h3 className=" text-xl  text-[#FAF9F6] tracking-wide">
                Josh Photography <span className="  text-[#D4AF37]">Studios</span>
              </h3>
              <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#D4AF37]/60 font-medium mt-1">
                Documenting emotions in every frame
              </p>
            </div>
            <p className="font-sans text-sm text-[#FAF9F6]  leading-relaxed max-w-sm">
              Preserving high-profile weddings as timeless family legacies filled with genuine emotion, heritage tradition, and editorial elegance. Trusted by generations since 2002.
            </p>
          </div>

          {/* Quick Curated Navigation Directory */}
          <div className="md:col-span-3 flex flex-col space-y-4 text-left md:pl-8">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#FAF9F6] font-medium text-amber-300">
              Company
            </h4>
            <ul className="flex flex-col space-y-2.5 font-sans text-[14px]  text-[#FAF9F6]">
              {[{ name: "home" , link:"#"},{ name: "Our Legacy" , link:"about"},{ name: "Portfolio" , link:"portfolio"},{ name: "testimonials" , link:"#testimonials"} ].map((link, idx) => (
                <li key={idx} >
                  <a href={link.link} className="select-none hover:text-[#D4AF37] transition-colors duration-300 capitalize">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Contact Coordinates */}
          <div className="md:col-span-4 flex flex-col space-y-4 text-left">
            <h4 className="font-sans text-xs uppercase tracking-widest text-[#FAF9F6] font-medium text-amber-300">
              Studio Office
            </h4>
            <ul className="flex flex-col space-y-3.5 font-sans text-[14px]  text-[#FAF9F6]">
              <li className="flex items-center space-x-3">
                <FiMail size={14} className="text-purple-400 shrink-0" />
                <a href="mailto:joshphotography.v@gmail.com" className="hover:text-[#D4AF37] transition-colors duration-300">joshphotography.v@gmail.com</a>
              </li>
              <li className="flex items-center space-x-3">
                <FiPhone size={14} className="text-[#D4AF37] shrink-0" />
                <a href="tel:+917338078008" className="hover:text-[#D4AF37] transition-colors duration-300">  +917338078008 / +918050412444</a>
              </li>
      
              <li className="flex items-start space-x-3">
                <FiMapPin size={14} className="text-purple-400 shrink-0 mt-0.5" />
                <a target="_blank" href="https://maps.app.goo.gl/UsdASwtNHmqTxXeP6?g_st=awb" className="leading-relaxed hover:text-amber-300">Andrahalli Main Rd, Herohalli, <br/> Sunkadakatte, Bengaluru,<br/> Karnataka, India.</a>
              </li>
            </ul>
          </div>
        </div>

        {/* ========================================== */}
        {/* 03. ARCHITECTURAL CLOSING BOTTOM BAR        */}
        {/* ========================================== */}
        <div className="border-t border-purple-500/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
          
          {/* Studio Rights & Copyright Row */}
          <p className="font-sans text-xs text-[#FAF9F6]  tracking-wide text-center sm:text-left">
            © {currentYear} Josh Photography Studios. All Rights Preserved. Crafted with Heart & Authenticity.
          </p>

          {/* Symmetrical High-End Social Directory Handles & Return Action */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <a href="https://www.instagram.com/joshphotography_studios?igsh=NHBneXRkZXk1dGQ3" target="_blank" rel="noreferrer" className="p-2 text-[#FAF9F6]/40 hover:text-[#D4AF37] transition-colors duration-300" aria-label="Instagram Account">
                <FiInstagram size={16} />
              </a>
              <a href="https://www.facebook.com/share/16rDJmTVuq/" target="_blank" rel="noreferrer" className="p-2 text-[#FAF9F6]/40 hover:text-[#D4AF37] transition-colors duration-300" aria-label="Facebook Page">
                <FaFacebookF size={14} />
              </a>
            </div>

            {/* Smooth Top Navigation Anchor Button */}
            <button 
              onClick={handleScrollToTop}
              className="font-sans text-[11px] uppercase tracking-widest text-[#FAF9F6] hover:text-[#FAF9F6] transition-colors duration-300 border border-white/5 bg-white/[0.01] px-3 py-1.5 rounded-md text-xs"
            >
              Back To Top ↑
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}