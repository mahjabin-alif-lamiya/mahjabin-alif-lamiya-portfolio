"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCopy, FiExternalLink, FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const verifiedEmail = "alif03lamiya@gmail.com";
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(verifiedEmail);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-cyan-400/12 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Get In Touch</p>
          <h2 className="section-title font-display">
            Contact & <span className="gradient-text">Opportunities</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            I am currently open to Software Engineering internships, entry-level developer roles, and collaborative technical projects. Feel free to reach out directly.
          </p>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-6">
          <motion.div
            className="relative overflow-hidden rounded-3xl border border-border bg-card/80 text-center"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9 }}
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-accent/18 blur-[120px]" />
            <div className="relative flex flex-col items-center gap-6 p-8 sm:p-12">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accentViolet/25 text-accent">
                <FiMail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl">Send an Email</h3>
                <p className="mt-2 max-w-md text-muted-foreground">
                  Reach out directly for interviews, project discussions, or portfolio feedback.
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`mailto:${verifiedEmail}`}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentViolet px-6 py-3 text-sm font-semibold text-white shadow-glow"
                >
                  <FiMail className="h-4 w-4" />
                  {verifiedEmail}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent/10"
                  aria-label="Copy email address"
                >
                  <FiCopy className="h-4 w-4" />
                  {copied ? "Copied" : "Copy Email"}
                </button>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <motion.a
              href="https://github.com/mahjabin-alif-lamiya"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-accent/12 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accentViolet/25 text-foreground">
                  <FaGithub className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">GitHub Profile</p>
                  <p className="mt-1 text-lg font-semibold">mahjabin-alif-lamiya</p>
                </div>
                <FiExternalLink className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mahjabinaalif"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.15 }}
            >
              <div className="absolute -right-12 -top-12 h-28 w-28 rounded-full bg-sky-400/12 blur-3xl" />
              <div className="relative flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/25 to-accent/25 text-foreground">
                  <FaLinkedin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">LinkedIn Profile</p>
                  <p className="mt-1 text-lg font-semibold">mahjabinaalif</p>
                </div>
                <FiExternalLink className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
