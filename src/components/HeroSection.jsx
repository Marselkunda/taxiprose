import React from "react";
import { motion } from "framer-motion";
import BannerImage from "../assets/2.png";

const HeroSection = ({ scrollToPricing, scrollToServices }) => {
  return (
    <section className="mt-16 sm:mt-20 md:mt-24 pt-12 w-full flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 gap-12 bg-[#fdfdfb]">
      {/* Left Text Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-snug sm:leading-tight"
        >
          Allt för din taxiverksamhet{" "}
          <span className="text-[#ffc001]">i en digital plattform</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4"
        >
          <button
            onClick={scrollToPricing}
            className="text-white px-6 py-3 rounded-lg text-base md:text-lg font-semibold shadow-md transition-all duration-300"
            style={{ backgroundColor: "#ffc001" }}
          >
           Kom igång
          </button>
          <button
            onClick={scrollToServices}
            className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
          >
            Utforska mer
          </button>
        </motion.div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="w-full lg:w-1/2 flex justify-center"
      >
        <img
          src={BannerImage}
          alt="Taxi Management"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl object-contain"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
