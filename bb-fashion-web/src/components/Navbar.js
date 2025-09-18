import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/assets/logo.jpg"
              alt="BB Fashion Logo"
              className="h-10 sm:h-12"
            />
          </div>

          {/* 🔎 Search Bar (Always visible) */}
          <div className="flex-1 max-w-md mx-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-light"
              />
              <button className="absolute right-2 top-2 text-gray-500 hover:text-primary-dark">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 15l5.5 5.5M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-medium">
            {['Home', 'About', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-gray-700 hover:text-primary-dark transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            {/* CTA */}
            <Link
              to="/shop"
              className="hidden md:inline-block px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
            >
              Shop Now
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-700 focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 bg-gray-50 p-4 rounded-lg shadow-md">
            {['Home', 'About', 'Blog', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="block text-center py-2 text-gray-700 hover:bg-primary-light hover:text-primary-dark transition-colors rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </Link>
            ))}

            {/* CTA for mobile */}
            <Link
              to="/shop"
              className="mt-2 px-4 py-2 bg-primary-dark text-white font-semibold rounded-lg hover:bg-primary-light transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
