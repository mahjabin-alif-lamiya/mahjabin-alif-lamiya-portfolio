"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiCpu, FiStar, FiUsers } from "react-icons/fi";

const stats = [
  {
    icon: FiBookOpen,
    value: "2027",
    label: "Expected Graduation",
    sublabel: "B.Sc. in CSE at Chittagong Independent University",
  },
  {
    icon: FiCpu,
    value: "6+",
    label: "Deployed Web Apps",
    sublabel: "Production deployments with live demos",
  },
  {
    icon: FiStar,
    value: "1st Place",
    label: "PROTICHAMP AI Champion",
    sublabel: "Healthcare Category • MediBondhu (2026)",
  },
  {
    icon: FiUsers,
    value: "Leadership",
    label: "Club & Tech Leadership",
    sublabel: "Treasurer (iSEC), CIU Robotics, IEEE CIU Branch",
  },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-accent/10 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Get to Know Me</p>
          <h2 className="section-title font-display">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
          <motion.div
            className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            <div className="glass-card-light p-6 sm:p-8">
              <p>
                I am a Computer Science and Engineering undergraduate at{" "}
                <strong className="text-foreground">Chittagong Independent University</strong>, passionate
                about developing modern, resilient web applications and integrating practical artificial
                intelligence capabilities into everyday software.
              </p>
              <p className="mt-4">
                My development expertise centers around modern web ecosystems, particularly{" "}
                <span className="text-foreground">React</span>,{" "}
                <span className="text-foreground">Next.js</span>,{" "}
                <span className="text-foreground">Tailwind CSS</span>,{" "}
                <span className="text-foreground">MongoDB</span>, and AI integrations with the{" "}
                <span className="text-foreground">Google Gemini API</span>. I have built and deployed
                multiple production web applications ranging from AI healthcare symptom tools and
                agricultural advisories to full-stack booking platforms and fleet management portals.
              </p>
              <p className="mt-4">
                Beyond solo projects, I actively contribute to collaborative engineering efforts—serving
                as an <strong className="text-foreground">IT Department Intern at YSSE</strong>, leading
                as <strong className="text-foreground">Treasurer</strong> of the Independent University
                Science and Engineering Club (iSEC), and participating in competitive hackathons and
                academic olympiads across the country.
              </p>
            </div>

            <div className="glass-card-light p-6 sm:p-7">
              <h3 className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                Spoken Languages
              </h3>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-foreground">Bengali</span>
                  <span className="text-muted-foreground">Native</span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm">
                  <span className="h-2 w-2 rounded-full bg-accent" />
                  <span className="text-foreground">English</span>
                  <span className="text-muted-foreground">Professional Working Proficiency</span>
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5 grid grid-cols-1 gap-4 sm:grid-cols-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-5 transition-transform hover:-translate-y-1"
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 + index * 0.08, duration: 0.7 }}
              >
                <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/15 blur-3xl transition-opacity group-hover:opacity-80" />
                <div className="relative flex items-start justify-between">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accentViolet/20 text-accent">
                    <stat.icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-extrabold tracking-tight text-foreground">{stat.value}</span>
                </div>
                <div className="relative mt-4">
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{stat.sublabel}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
