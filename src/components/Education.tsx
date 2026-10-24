"use client";

import { motion } from "framer-motion";
import { FiCalendar, FiBookOpen, FiAward } from "react-icons/fi";

const coursework = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Software Engineering",
  "Theory of Computation",
  "Computer Graphics",
  "Machine Learning",
];

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-cyan-400/10 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Academic Background</p>
          <h2 className="section-title font-display">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
        >
          <article className="group relative overflow-hidden rounded-3xl border border-border bg-card/80">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" />
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-accent/12 blur-3xl" />
            <div className="relative grid gap-8 p-6 sm:p-10 lg:grid-cols-[auto,1fr]">
              <div className="flex flex-col items-start gap-4">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent/25 to-accentViolet/25 text-accent">
                  <FiAward className="h-6 w-6" />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1 text-xs uppercase tracking-[0.4em] text-muted-foreground">
                  Undergraduate Degree
                </div>
              </div>
              <div>
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold sm:text-3xl">
                      Bachelor of Science in Computer Science and Engineering (CSE)
                    </h3>
                    <p className="mt-2 text-lg font-semibold text-accent">
                      Chittagong Independent University
                    </p>
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 text-sm text-muted-foreground">
                    <FiCalendar className="h-4 w-4" />
                    Expected Graduation: 2027
                  </div>
                </div>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  Rigorous undergraduate engineering curriculum combining strong core theoretical
                  foundations in algorithms and systems with modern software engineering practices,
                  databases, and applied machine learning.
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                    <FiBookOpen className="h-4 w-4" />
                    Relevant Coursework
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </section>
  );
}
