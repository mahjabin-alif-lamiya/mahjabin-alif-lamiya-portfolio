"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Achievements", href: "#achievements" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy-950/95 backdrop-blur-md shadow-lg border-b border-navy-800/80 py-3"
          : "bg-navy-950/90 backdrop-blur-sm border-b border-navy-900 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Brand Name */}
          <Link
            href="#home"
            className="flex flex-col group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md p-1"
            aria-label="Mahjabin Alif Lamiya - Home"
          >
            <span className="text-white text-lg sm:text-xl font-bold tracking-tight group-hover:text-blue-300 transition-colors">
              Mahjabin Alif Lamiya
            </span>
            <span className="text-xs text-blue-200/70 font-medium hidden sm:inline-block">
              Software Developer &bull; CSE Student
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-200 hover:text-white hover:bg-navy-850 px-3 py-2 rounded-md text-sm font-medium transition-all duration-150"
              >
                {link.name}
              </Link>
            ))}
            <div className="pl-2">
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-1.5 bg-accent hover:bg-accentHover text-white px-3.5 py-1.5 rounded-md text-xs font-semibold shadow-sm transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-1 bg-accent hover:bg-accentHover text-white px-2.5 py-1.5 rounded-md text-xs font-semibold"
              aria-label="Download Resume"
            >
              Resume
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg bg-navy-900 border border-navy-800 hover:bg-navy-850 focus:outline-none focus:ring-2 focus:ring-accent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <nav
          className="lg:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-5 space-y-1 shadow-2xl animate-fade-in"
          aria-label="Mobile Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-200 hover:text-white hover:bg-navy-900 block px-3 py-2.5 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 border-t border-navy-900">
            <a
              href="/resume.pdf"
              download
              className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-accentHover text-white px-4 py-2.5 rounded-md text-sm font-semibold transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Full Resume (PDF)
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
