// FloatingSocialButtons.jsx
"use client";

import { motion } from "framer-motion";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { LogoWhatsApp, Instagram } from "react-icons/fa";

export default function FloatingSocialButtons() {
  const WhatsAppLink = "https://wa.me/917338078008";
  const InstagramLink =
    "https://www.instagram.com/joshphotography_studios?igsh=NHBneXRkZXk1dGQ3";

  const FacebookLink = "https://www.facebook.com/share/16rDJmTVuq/";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Instagram Button - Floats above WhatsApp */}
      <motion.a
        href={InstagramLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#E1306C] via-[#F77737] to-[#E1306C] text-white shadow-[0_8px_30px_rgba(225,48,108,0.4)] hover:shadow-[0_8px_40px_rgba(225,48,108,0.6)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#E1306C] focus:ring-offset-2 focus:ring-offset-[#07040A]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          opacity: { duration: 0.4 },
          x: { duration: 1 },
          scale: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <BsInstagram size={24} />
      </motion.a>

      <motion.a
        href={FacebookLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-[#1877F2] via-[#0D6EFD] to-[#1877F2] text-white shadow-[0_8px_30px_rgba(24,119,242,0.4)] hover:shadow-[0_8px_40px_rgba(24,119,242,0.6)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#1877F2] focus:ring-offset-2 focus:ring-offset-[#07040A]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          opacity: { duration: 0.4 },
          x: { duration: 1,delay:0.2 },
          scale: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <BsFacebook size={24} />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href={WhatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 focus:ring-offset-[#07040A]"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{ scale: 1.15, rotate: -5 }}
        whileTap={{ scale: 0.95 }}
        transition={{
          opacity: { duration: 0.4, delay: 0.1 },
          x: { duration: 1, delay: 0.3 },
          scale: { type: "spring", stiffness: 400, damping: 10 },
        }}
      >
        <BsWhatsapp size={24} />
      </motion.a>
    </div>
  );
}
