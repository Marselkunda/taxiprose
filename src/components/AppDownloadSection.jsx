import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import AppImage from "../assets/app3.png"; // Ensure image has transparent background

const AppDownloadSection = () => {
  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left: Text + Buttons */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffc001] mb-4 leading-snug">
            Ride Smarter with TaxiPro App
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
            Book a ride in seconds, get real-time driver updates, and pay with ease – all from one powerful app.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            {/* App Store Button */}
            <a
              href="#"
              className="flex items-center px-6 py-3 bg-black text-white rounded-xl shadow-md hover:bg-[#ffc001] hover:text-black transition duration-300"
            >
              <FaApple className="text-2xl mr-3" />
              <div className="text-left">
                <p className="text-xs sm:text-sm">Download on the</p>
                <p className="text-base font-semibold">App Store</p>
              </div>
            </a>

            {/* Google Play Button */}
            <a
              href="#"
              className="flex items-center px-6 py-3 bg-[#34A853] text-white rounded-xl shadow-md hover:bg-[#ffc001] hover:text-black transition duration-300"
            >
              <FaGooglePlay className="text-2xl mr-3" />
              <div className="text-left">
                <p className="text-xs sm:text-sm">Get it on</p>
                <p className="text-base font-semibold">Google Play</p>
              </div>
            </a>
          </div>
        </div>

        {/* Right: App Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={AppImage}
            alt="Taxi App Preview"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownloadSection;
