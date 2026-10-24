"use client";

import { motion } from "framer-motion";
import { FiAward, FiStar, FiTarget, FiZap } from "react-icons/fi";
import { FaTrophy } from "react-icons/fa";

interface Achievement {
  title: string;
  event: string;
  year?: string;
  awardType: "champion" | "finalist" | "achievement" | "semifinalist" | "participant";
  description: string;
}

const achievements: Achievement[] = [
  {
    title: "Champion",
    event: "PROTICHAMP AI Championship 1.0",
    year: "2026",
    awardType: "champion",
    description:
      "Won 1st Place Championship in the Healthcare category with MediBondhu, an AI-powered medical symptom guidance web app.",
  },
  {
    title: "Finalist",
    event: "NextGen Hackathon",
    year: "2025",
    awardType: "finalist",
    description:
      "Selected as a Hackathon Finalist for engineering innovative, scalable software solutions under competitive time constraints.",
  },
  {
    title: "Certificate of Achievement",
    event: "SciBlitz 2.0 AI Hackathon",
    year: "IEEE CUET Student Branch",
    awardType: "achievement",
    description:
      "Recognized for high-impact AI application development, presenting the foundation that evolved into the championship project MediBondhu.",
  },
  {
    title: "Semi-Finalist",
    event: "ICT Olympiad (Season 2 & Season 3)",
    year: "2025 & 2026",
    awardType: "semifinalist",
    description:
      "Advanced to national semi-finals across two consecutive seasons, testing algorithmic reasoning and computer science fundamentals.",
  },
  {
    title: "Semi-Finalist",
    event: "Bangla Innovator",
    awardType: "semifinalist",
    description:
      "Honored as a national semi-finalist for innovative technology proposals focused on local technological empowerment.",
  },
  {
    title: "Participant",
    event: "CUET CSE Fest DevOps Hackathon",
    year: "Preliminary Round",
    awardType: "participant",
    description:
      "Participated in hands-on continuous deployment, containerization, and infrastructure engineering challenges.",
  },
];

const badgeConfig = {
  champion: {
    label: "Champion",
    icon: FaTrophy,
    className: "border-amber-400/60 bg-amber-400/15 text-amber-300",
  },
  finalist: {
    label: "Finalist",
    icon: FiStar,
    className: "border-sky-400/60 bg-sky-400/15 text-sky-300",
  },
  achievement: {
    label: "Achievement",
    icon: FiAward,
    className: "border-violet-400/60 bg-violet-400/15 text-violet-300",
  },
  semifinalist: {
    label: "Semi-Finalist",
    icon: FiTarget,
    className: "border-slate-300/40 bg-slate-300/10 text-slate-200",
  },
  participant: {
    label: "Participant",
    icon: FiZap,
    className: "border-border bg-background/70 text-muted-foreground",
  },
} as const;

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-amber-400/12 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Recognition & Honors</p>
          <h2 className="section-title font-display">
            Competitions & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Verified competitive awards, hackathon outcomes, and national olympiad recognitions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => {
            const config = badgeConfig[item.awardType];
            const Icon = config.icon;
            const isChampion = item.awardType === "champion";

            return (
              <motion.article
                key={`${item.event}-${index}`}
                className={`group relative overflow-hidden rounded-2xl border transition-transform hover:-translate-y-1 ${
                  isChampion
                    ? "border-amber-400/60 bg-gradient-to-br from-amber-400/12 via-card/80 to-card/80"
                    : "border-border bg-card/80"
                }`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              >
                {isChampion && (
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-amber-400/18 blur-3xl" />
                )}
                <div className="relative flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs ${config.className}`}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {config.label}
                    </span>
                    {item.year && (
                      <span className="text-xs text-muted-foreground">{item.year}</span>
                    )}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{item.event}</h3>
                    <p className="mt-1 text-sm text-accent">{item.title}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
