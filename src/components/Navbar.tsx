'use client';

import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Checklist', href: '#checklist' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="flex-shrink-0 flex items-center space-x-3">
            <img 
              src="/gallery/nextdoor/logo.jpeg" 
              alt="Anna Clean Service" 
              className="h-10 w-10 rounded-full object-cover border-2 border-white/80 shadow-md bg-white"
            />
            <span className={`text-xl sm:text-2xl font-black tracking-tight ${scrolled ? 'text-blue-600' : 'text-white drop-shadow-md'}`}>
              Anna Clean Service
            </span>
          </a>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-blue-400 ${
                  scrolled ? 'text-gray-700' : 'text-white drop-shadow-sm'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="tel:9137317373"
              className={`inline-flex items-center px-3.5 py-2 text-sm font-bold rounded-xl transition-all ${
                scrolled 
                ? 'text-gray-700 hover:text-blue-600 bg-gray-100 hover:bg-gray-200' 
                : 'text-white bg-white/15 hover:bg-white/25 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4 mr-1.5 text-blue-400" />
              (913) 731-7373
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-4 py-2 text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-700 shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5" />
              Get Free Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <a
              href="tel:9137317373"
              className={`md:hidden inline-flex items-center p-2 rounded-lg ${
                scrolled ? 'bg-blue-50 text-blue-600' : 'bg-white/20 text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-lg ${
                scrolled ? 'text-gray-700' : 'text-white'
              } hover:text-blue-400 focus:outline-none`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[30rem] opacity-100 bg-white border-b shadow-xl' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-3 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-gray-800 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4 border-t border-gray-100 space-y-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-blue-600 text-white font-bold rounded-xl text-sm shadow"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Get Free Estimate
            </a>
            
            <a
              href="tel:9137317373"
              className="w-full inline-flex items-center justify-center px-4 py-3 bg-gray-100 text-gray-800 font-bold rounded-xl text-sm hover:bg-gray-200 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2 text-blue-600" />
              Call / Text: (913) 731-7373
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
