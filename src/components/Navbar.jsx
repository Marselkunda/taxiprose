import { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import TaxiProLogo from '../assets/TaxiPro.png';


function Navbar({ onSignUpClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleSignUpClick = () => {
    closeMenu();
    if (location.pathname === '/') {
      onSignUpClick?.();
    } else {
      navigate('/', { state: { scrollToRegister: true } });
    }
  };

  const linkBaseClass = 'transition px-3 py-1 rounded-md font-medium text-lg';
  const activeClass = 'text-[#ffc001] border-b-2 border-[#ffc001] pb-1';
  const inactiveClass = 'text-gray-700 hover:text-[#ffc001]';

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center h-16 w-full px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
          <img
            src={TaxiProLogo}
            alt="TaxiPro Logo"
            className="h-16 w-auto"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
          >
           Hem
          </NavLink>
          <NavLink
            to="/AboutUs"
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
          >
           Om oss
          </NavLink>
          <NavLink
            to="/Services"
            onClick={closeMenu}
            className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
          >
            Tjänster
          </NavLink>
          <NavLink
            to="/signin"
            onClick={closeMenu}
            className={({ isActive }) =>
              `border border-[#ffc001] px-4 py-2 rounded-lg hover:bg-[#fff4d4] transition ${
                isActive ? 'text-[#ffc001]' : 'text-gray-700'
              }`
            }
          >
            Logga in
          </NavLink>

          <button
            onClick={handleSignUpClick}
            className="bg-[#ffc001] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
          >
            Registrera
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <aside className="absolute top-16 right-4 w-64 bg-white shadow-lg rounded-xl z-50">
          <nav className="flex flex-col px-6 py-4 space-y-4">
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              Hem
            </NavLink>
            <NavLink
              to="/AboutUs"
              onClick={closeMenu}
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              Om oss
            </NavLink>
            <NavLink
              to="/Services"
              onClick={closeMenu}
              className={({ isActive }) => `${linkBaseClass} ${isActive ? activeClass : inactiveClass}`}
            >
              Tjänster
            </NavLink>
            <NavLink
              to="/signin"
              onClick={closeMenu}
              className={({ isActive }) =>
                `border border-[#ffc001] px-4 py-2 rounded-lg hover:bg-[#fff4d4] transition ${
                  isActive ? 'text-[#ffc001]' : 'text-gray-700'
                }`
              }
            >
              Logga in
            </NavLink>

            <button
              onClick={handleSignUpClick}
              className="bg-[#ffc001] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Registrera
            </button>
          </nav>
        </aside>
      )}
    </nav>
  );
}

export default Navbar;
