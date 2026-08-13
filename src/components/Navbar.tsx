'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-black/90 backdrop-blur-xl text-white sticky top-0 z-50 border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col group z-50">
              <span className="text-brand-gold font-serif font-bold text-3xl tracking-widest group-hover:text-white transition-colors duration-500">
                ASBJ
              </span>
              <span className="text-[0.65rem] text-gray-400 tracking-[0.25em] font-medium uppercase mt-1 group-hover:text-gray-300 transition-colors duration-500">
                Legal & Pertanahan
              </span>
            </Link>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {[
              ['Tentang', '#tentang'],
              ['Layanan', '#layanan'],
              ['Portofolio', '#galeri'],
              ['Insight', '#berita']
            ].map(([label, href]) => (
              <Link key={label} href={href} className="relative text-xs font-semibold uppercase tracking-widest text-gray-300 hover:text-brand-gold transition-colors duration-300 group py-2">
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            <Link href="#kontak" className="inline-flex items-center justify-center px-8 py-3 bg-white text-brand-black text-xs font-semibold uppercase tracking-widest hover:bg-brand-gold transition-all duration-500">
              Konsultasi
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white hover:text-brand-gold focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-8 h-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden fixed inset-0 bg-brand-black/95 backdrop-blur-2xl transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        } pt-24`}
      >
        <div className="flex flex-col px-6 py-8 space-y-8">
          {[
            ['Tentang Kami', '#tentang'],
            ['Fokus Layanan', '#layanan'],
            ['Portofolio', '#galeri'],
            ['Berita & Insight', '#berita']
          ].map(([label, href]) => (
            <Link 
              key={label} 
              href={href} 
              onClick={() => setIsOpen(false)}
              className="text-xl font-serif text-gray-200 hover:text-brand-gold border-b border-white/5 pb-4 transition-colors"
            >
              {label}
            </Link>
          ))}
          <Link 
            href="#kontak" 
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-black text-xs font-bold uppercase tracking-widest mt-8"
          >
            Mulai Konsultasi
          </Link>
        </div>
      </div>
    </nav>
  );
}
