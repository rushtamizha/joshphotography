"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiHome, FiInfo, FiImage, FiFilm, FiMenu, FiX } from "react-icons/fi";
import { FaWandMagicSparkles, FaWhatsapp } from "react-icons/fa6";
import { HiArrowUpRight } from "react-icons/hi2";

const navLinks = [
  { name: "Home", href: "/", icon: FiHome },
  { name: "Our Legacy", href: "/about", icon: FiInfo },
  { name: "Portfolio", href: "/portfolio", icon: FiImage },
  { name: "Testimonials", href: "/#testimonials", icon: FaWandMagicSparkles },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Dynamic Scroll Response
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed left-0 right-0 z-50 mx-auto w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isScrolled
          ? "top-5 max-w-7xl px-4 lg:px-6"
          : "top-0 max-w-7xl px-6 md:px-10 lg:px-12 py-8"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* High-End Glassmorphic Shell */}
      <div
        className={`relative flex items-center justify-between w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? "bg-[#0B0712]/65 backdrop-blur-2xl border border-purple-500/10 shadow-[0_12px_50px_rgba(7,3,15,0.8)] py-3.5 px-8 rounded-full"
            : "bg-transparent py-2 border-transparent rounded-none"
        }`}
      >
        {/* Subtle internal glow accent when scrolled */}
        {isScrolled && (
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-amber-500/5 rounded-full pointer-events-none" />
        )}

        {/* Brand Logo Identity System */}
        <Link
          href="/"
          className="z-50 flex items-center group cursor-pointer gap-4"
        >
          <div className="relative w-15 h-15 transition-transform duration-300 ease-out group-hover:scale-[1.03] overflow-hidden rounded-lg">
            <Image
              src="/logo.webp"
              alt="Josh Studios Logo"
              fill
              priority
              sizes="44px"
              className="object-cover"
            />
          </div>
          <h1 className="font-serif  text-xl md:text-2xl text-[#FAF9F6] tracking-wide transition-all duration-300">
            Josh{" "}
            <span className="text-[#D4AF37] font-light italic bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB] bg-clip-text text-transparent">
              Studios
            </span>
          </h1>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-[15px] text-[#FAF9F6]/80 font-sans tracking-wide capitalize transition-all duration-300 hover:text-[#FAF9F6] group"
            >
              {link.name}
              {/* Ethereal Purple & Gold micro-dot transition */}
              <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-[#D4AF37] rounded-full opacity-0 transition-all duration-400 ease-out group-hover:opacity-100 group-hover:scale-125 shadow-[0_0_8px_#D4AF37]"></span>
            </Link>
          ))}
        </nav>

        {/* Actions Segment */}
        <div className="flex items-center space-x-4">
          {/* Elite WhatsApp CTA */}
          <Link
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-purple-950/40 to-purple-900/40 border border-purple-500/20 text-[#FAF9F6] px-6 py-2.5 rounded-full hover:border-[#D4AF37]/50 transition-all duration-500 font-sans text-[14px] tracking-wide capitalize group shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]"
          >
            <FaWhatsapp className="text-[17px] text-[#D4AF37]" />
            <span className="group-hover:text-[#D4AF37] transition-colors duration-300">
              Inquire Now
            </span>
          </Link>

          {/* Luxury Minimal Menu Switch */}
          <button
            className="lg:hidden relative z-50 p-2 text-[#FAF9F6] hover:text-[#D4AF37] transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              {isMobileMenuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.div>
          </button>
        </div>

        {/* Masterpiece Mobile Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="  md:hidden absolute top-[calc(100%+16px)] right-0 w-[calc(100vw-2.5rem)] sm:w-[370px] bg-[#0B0712]/95 backdrop-blur-lg border border-purple-500/15 shadow-[0_40px_80px_rgba(0,0,0,0.9)] rounded-2xl sm:rounded-3xl overflow-hidden z-40"
            >
              {/* Internal Dynamic Background Glow */}
              <div className="absolute -right-16 -top-16 w-36 h-36 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-36 h-36 bg-amber-600/5 rounded-full backdrop-blur-3xl pointer-events-none" />

              <div className="flex flex-col p-4 md:p-6 relative z-10 backdrop-blur-2xl">
                <div className="text-[11px] font-sans tracking-[0.2em] uppercase text-purple-400/40 px-3 mb-2">
                  Navigation Menu
                </div>

                {navLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.04 * index,
                        duration: 0.5,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="group flex items-center justify-between py-3.5 px-3 rounded-xl hover:bg-white/[0.02] transition-all duration-300"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-2 bg-purple-950/30 border border-purple-500/10 rounded-xl text-purple-300/60 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/20 group-hover:bg-purple-900/30 transition-all duration-400">
                            <Icon size={18} />
                          </div>
                          <span className="font-sans text-[16px] tracking-wide capitalize text-[#FAF9F6]/85 group-hover:text-[#FAF9F6] transition-colors duration-300">
                            {link.name}
                          </span>
                        </div>
                        <HiArrowUpRight
                          size={16}
                          className="text-purple-400/30 group-hover:text-[#D4AF37] opacity-0 group-hover:opacity-100 transform translate-y-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-400"
                        />
                      </Link>
                    </motion.div>
                  );
                })}

                {/* Mobile Drawer Premium CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="mt-6 pt-4 border-t border-purple-500/10"
                >
                  <Link
                    href="https://wa.me/YOUR_PHONE_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-3 w-full bg-gradient-to-r from-purple-600 via-[#7C3AED] to-purple-700 text-[#FAF9F6] py-3.5 rounded-xl transition-all duration-300 font-sans text-[15px] tracking-wide capitalize font-medium shadow-[0_8px_30px_rgba(124,58,237,0.3)] border border-purple-400/20 active:scale-[0.99]"
                  >
                    <FaWhatsapp className="text-[19px] text-[#D4AF37]" />
                    <span>Initiate Consultation</span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}