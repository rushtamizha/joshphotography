"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowLeft, ArrowRight, Star } from "lucide-react";

// Import Swiper React components and modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styling lines
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    id: 1,
    quote: "Josh Photography Studios beautifully captured every emotion of our wedding day. Every photograph feels timeless, elegant, and deeply meaningful to our family.",
    author: "Aanya & Rahul Sharma",
    date: "2 weeks ago",
    location: "The Oberoi Udaivilas",
  },
  {
    id: 2,
    quote: "The absolute respect they showed for our traditional sacred rituals was breathtaking. They didn't just take pictures—they documented our family heritage with absolute poise.",
    author: "Meera & Vikram Patel",
    date: "1 month ago",
    location: "Umaid Bhawan Palace",
  },
  {
    id: 3,
    quote: "We are completely blown away by our cinematic film. The attention to sound design, real-time family voiceovers, and premium lighting feels like an actual high-end legacy film.",
    author: "Priya & Anand Kapoor",
    date: "2 months ago",
    location: "Suryagarh Jaisalmer",
  },
  {
    id: 4,
    quote: "Their team brought such a calm, professional presence to an otherwise chaotic day. They allowed us to completely live in the moment while capturing every ounce of raw emotion.",
    author: "Dia & Rohan Malhotra",
    date: "3 months ago",
    location: "Taj Lake Palace",
  },
];

export default function GoogleTestimonials() {
  return (
    <section id="testimonials" className="relative bg-[#07040A] py-24 md:py-32 overflow-hidden border-b border-purple-500/5">
      
      {/* Ambient Atmospheric Lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-600/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Custom Styles for Slider Focus states */}
      <style jsx global>{`
        .reviews-swiper .swiper-slide {
          opacity: 0.25;
          transform: scale(0.94);
          transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reviews-swiper .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
        }
        .reviews-swiper .swiper-pagination-bullet {
          background: #FAF9F6 !important;
          opacity: 0.15;
          width: 6px;
          height: 6px;
          margin: 0 5px !important;
          transition: all 0.4s ease;
        }
        .reviews-swiper .swiper-pagination-bullet-active {
          background: #D4AF37 !important;
          opacity: 1 !important;
          width: 20px;
          border-radius: 4px;
        }
      `}</style>

      <div className="relative w-full">
        
        {/* Editorial Section Header Layout */}
        <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-12 flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center space-x-2 bg-purple-950/40 border border-purple-500/10 rounded-full w-fit px-4 py-1.5 mb-4 backdrop-blur-md">
              <Sparkles size={13} className="text-[#D4AF37]" />
              <span className="font-sans text-xs md:text-sm tracking-wide text-purple-300/80 capitalize">
                Verified Client Appreciations
              </span>
            </div>
            <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#FAF9F6] tracking-wide leading-tight">
              Words From The <br />
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] bg-clip-text text-transparent font-light italic">
                Families We’ve Served
              </span>
            </h3>
          </div>

          {/* Navigation Controls Wrapper */}
          <div className="flex items-center space-x-4 mb-2">
            <button className="review-prev-btn p-4 rounded-full border border-purple-500/15 bg-[#0B0712]/40 text-[#FAF9F6]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300 focus:outline-none">
              <ArrowLeft size={18} strokeWidth={1.5} />
            </button>
            <button className="review-next-btn p-4 rounded-full border border-purple-500/15 bg-[#0B0712]/40 text-[#FAF9F6]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-all duration-300 focus:outline-none">
              <ArrowRight size={18} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Carousel Framework Layout Container */}
        <div className="w-full px-4 md:px-0">
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            className="reviews-swiper !overflow-visible"
            spaceBetween={20}
            slidesPerView={1.15}
            centeredSlides={true}
            loop={true}
            speed={900}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".review-next-btn",
              prevEl: ".review-prev-btn",
            }}
            pagination={{
              clickable: true,
              el: ".reviews-pagination",
            }}
            breakpoints={{
              768: { slidesPerView: 1.6, spaceBetween: 28 },
              1024: { slidesPerView: 2.2, spaceBetween: 36 },
              1440: { slidesPerView: 2.8, spaceBetween: 40 }
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative w-full bg-[#0B0712]/50 backdrop-blur-md border border-purple-500/10 rounded-2xl md:rounded-3xl p-8 md:p-10 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] min-h-[320px] md:min-h-[340px] group transition-all duration-300 hover:border-purple-500/20">
                  
                  {/* Top Block: Google Icon Blueprint & Star Metrics */}
                  <div>
                    <div className="flex items-center justify-between w-full mb-6">
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={15} className="text-[#D4AF37]" fill="#D4AF37" strokeWidth={0} />
                        ))}
                      </div>
                      
                      {/* Stylized Google Icon Component */}
                      <svg className="w-5 h-5 opacity-40 group-hover:opacity-80 transition-opacity duration-300" viewBox="0 0 24 24">
                        <path
                          fill="#FAF9F6"
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                          fill="#FAF9F6"
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                          fill="#FAF9F6"
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                        />
                        <path
                          fill="#FAF9F6"
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                      </svg>
                    </div>

                    {/* Core Quote Body Copy */}
                    <p className="font-sans text-[15px] md:text-[17px] text-[#FAF9F6]/80 font-light leading-relaxed tracking-wide mb-8">
                      “{item.quote}”
                    </p>
                  </div>

                  {/* Bottom Block: Identity Sign-Off Metadata */}
                  <div className="flex items-center justify-between pt-5 border-t border-purple-500/10 w-full">
                    <div className="flex flex-col space-y-0.5">
                      <span className="font-sans text-[15px] font-medium text-[#FAF9F6] tracking-wide">
                        {item.author}
                      </span>
                      <span className="font-sans text-xs text-[#D4AF37]/60 group-hover:text-[#D4AF37]/80 transition-colors duration-400 font-light tracking-wide capitalize">
                        {item.location}
                      </span>
                    </div>
                    <span className="font-sans text-[11px] text-purple-300/30 uppercase tracking-widest font-light shrink-0">
                      {item.date}
                    </span>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Custom Navigation Pagination Track */}
        <div className="reviews-pagination flex justify-center items-center mt-12 z-20 relative" />

      </div>
    </section>
  );
}