import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleRegisterClick = (e) => {
    e.preventDefault();
    navigate("/", { state: { scrollToRegister: true } });
  };

  return (
    <footer className="bg-[#fff7e0] py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8">

          {/* Brand & Description */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">TaxiPro</h2>
            <p className="mt-3 max-w-xs text-gray-700">
              Smart hantering av taxiverksamhet<br />
              enkelt och effektivt. Utvecklad för åkerier och förare i Sverige.
            </p>
            <div className="flex space-x-4 mt-5 text-2xl">
              <a href="#" className="text-gray-600 hover:text-[#ffc001] transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ffc001] transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-600 hover:text-[#ffc001] transition">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Produkter</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-gray-600 hover:text-[#ffc001] transition">Åkarie-webbapp</Link></li>
              <li><Link to="#" className="text-gray-600 hover:text-[#ffc001] transition">Förar-mobilapp</Link></li>
              {/* <li><Link to="#" className="text-gray-600 hover:text-[#ffc001] transition">Fleet Tracking</Link></li> */}
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Snabblänkar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#ffc001] transition">
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/AboutUs" className="text-gray-600 hover:text-[#ffc001] transition">
                  Om oss
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#ffc001] transition">
                  Tjänster
                </Link>
              </li>
              <li>
                <a
                  href="/"
                  onClick={handleRegisterClick}
                  className="text-gray-600 hover:text-[#ffc001] transition cursor-pointer"
                >
                  Registrera
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Kontakta oss</h3>
            <ul className="space-y-2 text-gray-700">
              {/* <li>Sweden</li> */}
              {/* <li>info@taxipro.se</li> */}
              <li>
              <a href="mailto:info@taxipro.se" className="text-gray-600 hover:text-[#ffc001] transition">
                  info@taxipro.se
                </a>
              </li>

              {/* <li>+46 123 456 789</li> */}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-300 mt-8 pt-5 text-center text-gray-600 text-sm">
          © {new Date().getFullYear()} TaxiPro i Sverige AB. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;



