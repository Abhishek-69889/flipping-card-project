import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="px-4 mt-5 sm:px-6 lg:px-8 mx-auto max-w-screen-md fixed top-0 left-0 right-0 z-50 rounded-2xl bg-black/40 border-2 border-pink-500/30 transition-colors duration-300">
      <div className="flex items-center justify-between py-3">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={logo} className="w-10 ml-4" alt="Logo" />
        </a>

        {/* Hamburger Icon */}
        <div className="sm:hidden pr-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-6 items-center text-sm">
          <li><a href="#" className="hover:text-pink-500 transition">Home</a></li>
          <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
          <li><a onClick={closeMenu} href="#experience" className="hover:text-pink-500 transition">Experience</a></li>
          <li><a href="#services" className="hover:text-pink-500 transition">Services</a></li>
          <li><a href="#project" className="hover:text-pink-500 transition">Projects</a></li>
          <li><a href="#achievement" className="hover:text-pink-500 transition">Achievements</a></li>
          <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
        </ul>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="sm:hidden flex flex-col gap-4 pb-4 text-center text-sm">
          <li><a onClick={closeMenu} href="#" className="hover:text-pink-500 transition">Home</a></li>
          <li><a onClick={closeMenu} href="#about" className="hover:text-pink-500 transition">About</a></li>
          <li><a onClick={closeMenu} href="#experience" className="hover:text-pink-500 transition">Experience</a></li>
          <li><a onClick={closeMenu} href="#services" className="hover:text-pink-500 transition">Services</a></li>
          <li><a onClick={closeMenu} href="#project" className="hover:text-pink-500 transition">Projects</a></li>
          <li><a onClick={closeMenu} href="#achievement" className="hover:text-pink-500 transition">Achievements</a></li>
          <li><a onClick={closeMenu} href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Nav;
