"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

// Premium bright, high-contrast cultural wedding imagery
const heroImages = [
  // {
  //   src: "/hero/01.jpg",
  //   alt: "Royal cultural wedding entrance and grand celebrations",
  // },
  {
    src: "/hero/02.jpg",
    alt: "Bright emotional candid couple moment",
  },
  {
    src: "/hero/03.jpg",
    alt: "Vibrant traditional wedding sacred rituals",
  },
  {
    src: "/hero/04.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/05.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/06.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/07.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/08.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/09.jpg",
    alt: "Luxury editorial couple portrait",
  },
  {
    src: "/hero/10.jpg",
    alt: "Luxury editorial couple portrait",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#07040A] flex flex-col lg:flex-row items-center justify-center overflow-hidden pt-28 pb-12 lg:py-0"
    >
      {/* Premium Ambient Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-purple-600/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Structural Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        {/* Left Column: Brand Typography & Action CTAs */}
        <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          {/* Tagline Ribbon */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-2 bg-purple-950/40 border border-purple-500/10 rounded-full px-4 py-2 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-[#D4AF37]" />
            <span className="font-sans text-xs md:text-sm tracking-wide text-[#FAF9F6] capitalize">
              Preserving Timeless Cultural Weddings Since 2002
            </span>
          </motion.div>

          {/* Master Title */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className=" text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-[#FAF9F6] tracking-wide leading-[1.15] md:leading-[1.1]"
          >
            Luxury Wedding Storytelling <br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent  ">
              Rooted In Emotion & Culture
            </span>
          </motion.h2>

          {/* Luxury Subtext Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-[15px] sm:text-[16px] md:text-[18px] text-white max-w-xl leading-relaxed font-normal"
          >
            At Josh Photography Studios, we believe weddings are not simply
            celebrations — they are sacred family legacies woven with raw
            emotion, deep blessing, and timeless traditions.
          </motion.p>

          {/* Premium Interactive Action Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center gap-4 pt-2 w-full sm:w-auto"
          >
            <Link
              href="/portfolio"
              className="group flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-800 text-[#FAF9F6] px-8 py-3.5 rounded-full font-sans text-[15px] tracking-wide capitalize font-medium transition-all duration-300 shadow-[0_10px_25px_rgba(124,58,237,0.25)] hover:shadow-[0_15px_30px_rgba(124,58,237,0.35)] w-full sm:w-auto active:scale-[0.98]"
            >
              <span>Explore Wedding Stories</span>
              <ArrowRight
                size={16}
                className="transform group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </motion.div>
        </div>

        {/* Right Column: High-Visibility Mobile Responsive Auto-Slider */}
        <div className="lg:col-span-5 w-full order-1 lg:order-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[280px] sm:h-[400px] md:h-[480px] lg:h-[540px] rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] relative"
          >
            {/* Custom Styling Overrides for Swiper Pagination Dots to match Purple/Gold branding */}
            <style jsx global>{`
              .swiper-pagination-bullet {
                background: #faf9f6 !important;
                opacity: 0.3;
                width: 6px;
                height: 6px;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                background: #d4af37 !important;
                opacity: 1 !important;
                width: 20px;
                border-radius: 4px;
              }
            `}</style>

            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              effect={"fade"}
              fadeEffect={{ crossFade: true }}
              speed={1200}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                dynamicBullets: false,
              }}
              className="w-full h-full"
            >
              {heroImages.map((image, index) => (
                <SwiperSlide key={index} className="relative w-full h-full">
                  {/* Subtle luxury vignette gradient overlay to ground the images */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07040A]/40 via-transparent to-[#07040A]/20 z-10 pointer-events-none" />
                  <Image
                    fill
                    src={image.src}
                    alt={image.alt}
                    className="object-cover select-none"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={index === 0}
                    loading={index === 0 ? undefined : "lazy"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
