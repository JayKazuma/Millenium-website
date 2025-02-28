"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  return (
    <header className="bg-gradient-to-r from-green-800/30 via-blue-600/30 to-red-700/30 shadow-md fixed w-full z-50">
      
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          

          {/* Centered Navigation for Desktop */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: "Home", href: "/" },
              { name: "Products", href: "/products" },
              { name: "Machineries", href: "/machineries" },
              { name: "History", href: "/history" },
              { name: "Contact Us", href: "/contactus" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-white font-medium transition hover:text-gray-300 ${pathname === link.href ? "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-white" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Find Us Link */}
            <a
              href="https://maps.app.goo.gl/wAjjdnmb7onYbHhX8"
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-white font-medium transition hover:text-gray-300"
            >
              Find Us
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="absolute right-4 md:hidden">
            <button
              className="rounded-sm bg-gray-100 p-2 text-gray-700 transition hover:text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Animated Fullscreen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center text-white z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl"
              onClick={() => setIsMenuOpen(false)}
            >
              &times;
            </button>
            <nav className="space-y-6 text-2xl font-medium text-center">
              {[
                { name: "Home", href: "/" },
                { name: "Products", href: "/products" },
                { name: "Machineries", href: "/machineries" },
                { name: "History", href: "/history" },
                { name: "Contact Us", href: "/contactus" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block hover:text-gray-400 ${pathname === link.href ? "underline underline-offset-8" : ""
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* Find Us Link in Mobile Menu */}
              <a
                href="https://maps.app.goo.gl/wAjjdnmb7onYbHhX8"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-gray-400"
              >
                Find Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
