"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight } from "lucide-react";

// Import Swiper React components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const stories = [
  {
    id: 1,
    title: "The Royal Union at Udaipur",
    category: "Hindu Wedding",
    src: "/Hero/hero1.jpg",
    alt: "Grand regal Indian wedding portrait"
  },
  {
    id: 2,
    title: "Grace & Devotion",
    category: "Christian Ceremony",
    src: "/Hero/hero2.jpg",
    alt: "Bright elegant veil ceremony"
  },
  {
    id: 3,
    title: "A Symphony of Sacred Rituals",
    category: "Traditional Nikkah",
    src: "/Hero/hero3.jpg",
    alt: "Intricate traditional wedding rituals"
  },
  {
    id: 4,
    title: "The Golden Hour Waltz",
    category: "Reception Story",
    src: "/Hero/hero4.jpg",
    alt: "Bright laughing couple during golden hour"
  },
  {
    id: 5,
    title: "Whispers of the Heritage Legacy",
    category: "Intimate Muhurtham",
    src: "/Hero/hero5.jpg",
    alt: "Vibrant ethnic bridal details"
  },
  {
    id: 6,
    title: "Whispers of the Heritage Legacy",
    category: "Intimate Muhurtham",
    src: "/Hero/hero6.jpg",
    alt: "Vibrant ethnic bridal details"
  }
];

export default function WeddingStories() {
  return (
    <section className="relative bg-[#07040A] py-24 md:py-32 overflow-hidden border-b border-purple-500/5">
      
      {/* Background Ambient Violet Illumination */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[110px] pointer-events-none" />

      {/* Custom Styles for Luxury Swiper Pagination & Center Focus */}
      <style jsx global>{`
        .stories-swiper .swiper-slide {
          opacity: 0.3;
          transform: scale(0.9);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .stories-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .stories-swiper .swiper-pagination-bullet {
          background: #FAF9F6 !important;
          opacity: 0.2;
          width: 7px;
          height: 7px;
          margin: 0 6px !important;
          transition: all 0.4s ease;
        }
        .stories-swiper .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          opacity: 1 !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>

      <div className="relative w-full">
        {/* Section Header Text Container */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center space-x-2 bg-purple-950/40 border border-purple-500/10 rounded-full w-fit px-4 py-1.5 mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span className="font-sans text-xs md:text-sm tracking-wide text-purple-300/80 capitalize">
                Our Curated Portfolios
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] tracking-wide leading-tight">
              Stories Filled With <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-light italic">
                Love, Tradition & Emotion
              </span>
            </h3>
            <p className="font-sans text-sm md:text-[16px] text-[#FAF9F6]/60 font-light mt-4 leading-relaxed">
              Every wedding carries its own soul, emotions, and beautiful traditions. We preserve each fleeting moment with timeless elegance and deep, heartfelt storytelling.
            </p>
          </div>

          {/* Luxury Custom Navigation Buttons (Desktop Only) */}
          <div className="hidden md:flex items-center space-x-4 mb-2">
            <button className="swiper-prev-btn p-4 rounded-full border border-purple-500/15 bg-[#0B0712]/40 text-[#FAF9F6]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300 focus:outline-none">
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="swiper-next-btn p-4 rounded-full border border-purple-500/15 bg-[#0B0712]/40 text-[#FAF9F6]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300 focus:outline-none">
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Full-width Symmetrical Swiper Component Layout */}
        <div className="w-full px-4 md:px-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="stories-swiper !overflow-visible"
            spaceBetween={16}
            slidesPerView={1.2}
            centeredSlides={true}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-next-btn",
              prevEl: ".swiper-prev-btn",
            }}
            pagination={{
              clickable: true,
              el: ".stories-pagination",
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 2.8, spaceBetween: 32 },
              1440: { slidesPerView: 3.5, spaceBetween: 40 }
            }}
          >
            {stories.map((story) => (
              <SwiperSlide key={story.id}>
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] md:aspect-[4/5] rounded-2xl md:rounded-3xl overflow-hidden border border-purple-500/10 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">
                  
                  {/* Subtle Gradient Veil for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07040A] via-[#07040A]/10 to-transparent opacity-80 z-10 pointer-events-none group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Bright, Vibrant High-End Event Image */}
                  <img
                    src={story.src}
                    alt={story.alt}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 select-none"
                    loading="lazy"
                  />

                  {/* Absolute Positioned Content Metadata Overlay */}
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20 flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <span className="font-sans text-xs md:text-sm text-[#D4AF37] tracking-wider capitalize mb-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                      {story.category}
                    </span>
                    <h4 className="font-serif text-lg md:text-xl lg:text-2xl text-[#FAF9F6] tracking-wide capitalize">
                      {story.title}
                    </h4>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Dynamic Pagination Bullets Wrapper */}
        <div className="stories-pagination flex justify-center items-center mt-12 z-20 relative" />
        
      </div>
    </section>
  );
}