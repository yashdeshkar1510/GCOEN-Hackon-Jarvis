'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '#about', label: 'About' },
];

export default function LandingNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 no-underline group">
            <div className="w-9 h-9 bg-[#2563EB] rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className={`font-bold text-base md:text-lg tracking-tight transition-colors ${scrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              AI Emergency Triage Assistant
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline ${
                  scrolled
                    ? 'text-gray-600 hover:text-[#2563EB] hover:bg-blue-50'
                    : 'text-gray-600 hover:text-[#2563EB] hover:bg-blue-50/60'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/dashboard"
              className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 no-underline ${
                scrolled
                  ? 'text-gray-700 hover:text-[#2563EB] hover:bg-blue-50 border border-gray-200'
                  : 'text-gray-700 hover:text-[#2563EB] hover:bg-white/80 border border-gray-200'
              }`}
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 rounded-lg text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] shadow-md hover:shadow-lg transition-all duration-200 no-underline"
            >
              Hospital Access
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-[#2563EB] hover:bg-blue-50 transition-all no-underline"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link href="/dashboard" className="block text-center px-4 py-2.5 rounded-lg text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-blue-50 no-underline">
                  Login
                </Link>
                <Link href="/dashboard" className="block text-center px-4 py-2.5 rounded-lg text-sm font-semibold bg-[#2563EB] text-white hover:bg-[#1d4ed8] no-underline">
                  Hospital Access
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
