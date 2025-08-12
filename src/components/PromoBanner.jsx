import React from "react";
import { motion } from "framer-motion";
import BannerBG from "../assets/Image6.png";

const PromoBanner = ({ scrollToPricing }) => {
  return (
    <section
      className="relative w-full bg-cover bg-center py-10 sm:py-14 px-4 sm:px-8 lg:px-16"
      style={{
        backgroundImage: `url(${BannerBG})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#fff4d4] bg-opacity-80 backdrop-blur-md"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-4 px-2 font-extrabold text-gray-900"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.8rem)",
            lineHeight: 1.1,
          }}
        >
          Ready to Take Control of Your Taxi Business?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl text-gray-700 mb-8 px-4 sm:px-8"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.1rem)", lineHeight: 1.4 }}
        >
          Experience seamless fleet management, real-time driver tracking, and powerful admin tools — all in one platform.
        </motion.p>

        <motion.button
          onClick={scrollToPricing}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#ffc001] hover:bg-[#e6ae00] focus-visible:outline-[#e6ae00] text-white rounded-lg px-6 py-3 sm:py-4 font-semibold text-base shadow-lg transition-transform duration-300 active:scale-95"
          aria-label="Get Started Today"
        >
          Get Started Today
        </motion.button>
      </div>
    </section>
  );
};

export default PromoBanner;
