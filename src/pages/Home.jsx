import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ServiceCards from "../components/ServiceCards";
import PricingSection from "../components/PricingSection";
// import PromoBanner from "../components/PromoBanner";
import AppDownloadSection from "../components/AppDownloadSection";
import RegistrationForm from "../components/RegistrationForm";
import Footer from "../components/Footer";

const Home = () => {
  const registerRef = useRef(null);
  const pricingRef = useRef(null);
  const servicesRef = useRef(null);
  const location = useLocation();

  const scrollToRegister = () => {
    registerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to top on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Scroll to register section if redirected with state
  useEffect(() => {
    if (location.state?.scrollToRegister) {
      scrollToRegister();
    }
  }, [location]);

  return (
    <div className="relative w-full min-h-screen bg-[#fdfdfb]">
      <Navbar onSignUpClick={scrollToRegister} />
      <HeroSection
        scrollToPricing={scrollToPricing}
        scrollToServices={scrollToServices}
      />
      <div ref={servicesRef}>
        <ServiceCards />
      </div>
      {/* <PromoBanner scrollToPricing={scrollToPricing} /> */}
      <div ref={pricingRef}>
        <PricingSection scrollToRegister={scrollToRegister} />
      </div>
      <AppDownloadSection />
      <div ref={registerRef}>
        <RegistrationForm />
      </div>
      <Footer />
    </div>
  );
};

export default Home;



