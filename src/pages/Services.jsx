import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/Image5.png";

const Services = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on mount
    setVisible(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-[#fdfdfb] text-gray-800">
      <Navbar />

      <main
        className={`flex-grow transition-opacity duration-1000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-10 lg:px-20 py-16 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-extrabold text-[#ffc001] mb-12 tracking-wide mt-10 text-left">
              Our Services
              <span className="block h-1 w-24 bg-[#ffc001] rounded-full mt-4"></span>
            </h1>

            <section className="mb-12">
              <h2 className="text-3xl font-semibold text-[#ffc001] mb-6 relative inline-block group cursor-default">
                What We Offer
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ffc001] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h2>
              <ul className="list-disc pl-5 text-gray-700 text-lg leading-relaxed">
                <li>Custom taxi dispatch and fleet management</li>
                <li>Driver and trip tracking tools</li>
                <li>Analytics and reporting dashboards</li>
                <li>System customization and branding</li>
                <li>Dedicated support and onboarding</li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-semibold text-[#ffc001] mb-6 relative inline-block group cursor-default">
                Why Choose TaxiPro?
                <span className="absolute left-0 bottom-0 w-full h-1 bg-[#ffc001] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                We make it easier for taxi companies to scale and modernize their
                operations from booking to billing, all in one place.
              </p>
            </section>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img
              src={Image}
              alt="Taxi Services"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;

