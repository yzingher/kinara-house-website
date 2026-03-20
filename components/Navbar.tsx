"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Vision", href: "/vision" },
  { label: "Experience", href: "/experience" },
  { label: "Who We Are", href: "/who" },
  { label: "Membership", href: "/membership" },
  { label: "FAQ", href: "/faq" },
];

const APPLY_URL = "https://dw7d97j0izd.typeform.com/to/ldsXW19a";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#c9a84c]/20 shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Wordmark */}
            <Link href="/" className="flex-shrink-0" onClick={closeMobile}>
              <span className="font-playfair text-[#c9a84c] tracking-[0.25em] text-sm md:text-base font-semibold uppercase">
                KINARA HOUSE
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[#f5f0e8]/80 hover:text-[#c9a84c] text-sm tracking-widest uppercase font-inter font-medium transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-6 py-3 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ml-2"
              >
                Apply Now
              </a>
            </nav>

            {/* Mobile Hamburger */}
            <button
              className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block w-6 h-px bg-[#c9a84c] transition-all duration-300 origin-center ${
                  mobileOpen ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-[#c9a84c] transition-all duration-300 ${
                  mobileOpen ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block w-6 h-px bg-[#c9a84c] transition-all duration-300 origin-center ${
                  mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#1a1a1a]/98 backdrop-blur-xl flex flex-col pt-24 pb-12 px-8 lg:hidden"
          >
            <nav className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMobile}
                    className="block text-2xl font-playfair text-[#f5f0e8] hover:text-[#c9a84c] transition-colors duration-300 py-2 border-b border-[#c9a84c]/10"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="mt-10"
            >
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="block w-full text-center bg-[#c9a84c] text-[#1a1a1a] hover:bg-[#b8973b] px-8 py-4 font-semibold tracking-widest uppercase text-sm transition-all duration-300"
              >
                Apply Now
              </a>
            </motion.div>

            <div className="mt-auto">
              <p className="font-playfair text-[#c9a84c]/50 text-xs tracking-widest uppercase text-center">
                Where Desire Meets Elegance
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
