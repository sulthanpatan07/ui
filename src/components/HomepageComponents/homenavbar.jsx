// src/components/Navbar.jsx
import React from "react";

function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 shadow-md bg-white sticky top-0 z-50">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-pink-600">
        Skill<span className="text-indigo-600">2</span>Earn
      </h1>

      {/* Nav Links */}
      <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
        <a href="#" className="hover:text-pink-600 transition">
          Home
        </a>
        <a href="#about" className="hover:text-pink-600 transition">
          About
        </a>
        <a href="#services" className="hover:text-pink-600 transition">
          Services
        </a>
        <a href="#contact" className="hover:text-pink-600 transition">
          Contact
        </a>
      </nav>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="px-4 py-2 rounded-full border border-pink-600 text-pink-600 hover:bg-pink-50 transition">
          <a href="/login" className="hover:text-pink-600 transition">
            Login
          </a>
        </button>
        <button className="px-4 py-2 rounded-full bg-pink-600 text-white hover:bg-pink-700 shadow-md transition">
          Register
        </button>
      </div>
    </header>
  );
}

export default Navbar;
