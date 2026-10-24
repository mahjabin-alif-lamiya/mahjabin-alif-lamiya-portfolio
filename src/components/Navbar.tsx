"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

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
  const [active, setActive] = useState("home");
  const [progress, setProgress] = useState(0);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const doc = document.documentElement;
      const scrollTop = doc.scrollTop || document.body.scrollTop;
      const height = doc.scrollHeight - doc.clientHeight;
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);

      const sections = navLinks
        .map((link) => link.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      let current = "home";
      const offset = 160;
      for (let i = sections.length - 1; i >= 0; i -= 1) {
        const section = sections[i];
        if (section.offsetTop - offset <= scrollTop) {
          current = section.id;
          break;
        }
      }
      if (scrollTop < 200) {
        current = "home";
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[70] h-[3px] bg-gradient-to-r from-accent via-accentViolet to-cyan-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
        aria-hidden="true"
      />
      <header
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl shadow-lg shadow-slate-950/5 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between gap-4">
          <Link
            href="#home"
            className="group flex items-center gap-3 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label="Mahjabin Alif Lamiya - Home"
          >
            <div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accentViolet p-[1px] shadow-glow">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-background/90 text-sm font-bold">
                MA
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold tracking-tight group-hover:text-accent transition-colors">
                Mahjabin Alif Lamiya
              </span>
              <span className="text-xs text-muted-foreground">
                Software Developer • CSE Student
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-1 backdrop-blur-xl" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = active === id;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Toggle theme"
            >
              {mounted && theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
            </button>
            <a
              href="/resume.pdf"
              download="Mahjabin_Alif_Lamiya_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentViolet px-4 py-1.5 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
            >
              <FiDownload className="h-4 w-4" />
              Resume
            </a>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/80 lg:hidden"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden">
          <div className="absolute inset-x-4 top-16 rounded-2xl border border-border bg-background/95 p-4 shadow-2xl backdrop-blur-2xl">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent/10 hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-border pt-3">
                <button
                  onClick={() => {
                    setTheme(theme === "dark" ? "light" : "dark");
                  }}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-3 py-2 text-sm"
                >
                  {mounted && theme === "dark" ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
                  Toggle {mounted && theme === "dark" ? "Light" : "Dark"} Mode
                </button>
                <a
                  href="/resume.pdf"
                  download="Mahjabin_Alif_Lamiya_Resume.pdf"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accentViolet px-3 py-2 text-sm font-semibold text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <FiDownload className="h-4 w-4" />
                  Download Resume
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
      </header>
    </>
  );
}
