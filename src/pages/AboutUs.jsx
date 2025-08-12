import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "../assets/Image5.png";

const AboutUs = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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
            <h1 className="text-5xl font-extrabold mb-12 tracking-wide mt-10 text-left" style={{ color: "#ffc001" }}>
              About TaxiPro
              <span className="block h-1 w-24 rounded-full mt-4" style={{ backgroundColor: "#ffc001" }}></span>
            </h1>

            <section className="mb-12">
              <h2
                className="text-3xl font-semibold mb-6 relative inline-block group cursor-default"
                style={{ color: "#ffc001" }}
              >
                Our Mission & Goals
                <span
                  className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: "#ffc001" }}
                ></span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                At TaxiPro, our mission is to empower taxi businesses by providing
                a simple, efficient, and reliable management system. We aim to
                streamline operations, improve customer experience, and support
                sustainable growth for taxi companies of all sizes.
              </p>
            </section>

            <section>
              <h2
                className="text-3xl font-semibold mb-6 relative inline-block group cursor-default"
                style={{ color: "#ffc001" }}
              >
                About Our System
                <span
                  className="absolute left-0 bottom-0 w-full h-1 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  style={{ backgroundColor: "#ffc001" }}
                ></span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                TaxiPro is a comprehensive taxi management platform that helps you
                handle bookings, dispatch drivers, manage fleets, and analyze your
                business performance—all from one easy-to-use interface. Our system
                is designed to be user-friendly, scalable, and adaptable to your
                unique business needs.
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
              alt="Taxi Management"
              className="w-full max-w-md rounded-xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;

