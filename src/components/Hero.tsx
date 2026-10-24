"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[38rem] bg-gradient-hero" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/25 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/3 right-[-10%] h-80 w-80 rounded-full bg-accentViolet/18 blur-[140px]" />

      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-7 text-center lg:text-left"
            variants={container}
            initial="hidden"
            animate="show"
          >
            

            <motion.h1
              variants={item}
              className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="block">Mahjabin Alif</span>
              <span className="gradient-text block">Lamiya</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-4 text-lg font-semibold text-foreground/90 sm:text-xl md:text-2xl"
            >
              CSE Student • Software Developer • AI-Integrated Web Applications
            </motion.p>

            <motion.p
              variants={item}
              className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg"
            >
              Computer Science and Engineering undergraduate focused on full-stack and AI-integrated web
              development using <span className="text-foreground">Next.js</span>,{" "}
              <span className="text-foreground">MongoDB</span>, and the{" "}
              <span className="text-foreground">Google Gemini API</span>. Experienced in building and
              deploying production web applications, technical team collaboration, and competitive AI
              hackathons.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
            >
              <a
                href="/resume.pdf"
                download="Mahjabin_Alif_Lamiya_Resume.pdf"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentViolet px-6 py-3 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]"
              >
                <FiDownload className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/10"
              >
                Contact Me
              </Link>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 border-t border-border/60 pt-6 lg:justify-start"
            >
              <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Connect</span>
              <a
                href="https://github.com/mahjabin-alif-lamiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub Profile"
              >
                <FiGithub className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mahjabinaalif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:alif03lamiya@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email Address"
              >
                <FiMail className="h-4 w-4" />
                Email
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-10 rounded-full bg-gradient-to-tr from-accent via-accentViolet to-cyan-400 opacity-30 blur-[120px]" />
              <div className="relative h-64 w-64 rounded-full p-[1px] sm:h-72 sm:w-72 md:h-80 md:w-80">
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent via-accentViolet to-cyan-400" />
                <div className="relative h-full w-full rounded-full bg-background p-1.5">
                  <div className="relative h-full w-full overflow-hidden rounded-full">
                    <Image
                      src="/profile.png"
                      alt="Portrait of Mahjabin Alif Lamiya"
                      fill
                      sizes="(max-width: 640px) 256px, (max-width: 768px) 288px, 320px"
                      className="object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
