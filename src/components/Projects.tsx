"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-accent/12 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Selected Work</p>
          <h2 className="section-title font-display">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Verified production web applications, solo AI hackathon submissions, and collaborative
            university software projects built with Next.js, React, and MongoDB.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isChampion = project.title === "MediBondhu";

            return (
              <motion.article
                key={project.id}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card/80 transition-transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.08 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/40 via-accentViolet/30 to-cyan-400/20" />
                  <div className="absolute inset-0 grid-overlay opacity-40" />
                  <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-accent/30 blur-3xl" />
                  <div className="relative flex h-full flex-col justify-between p-6">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 text-xs uppercase tracking-[0.3em] text-white">
                        0{index + 1} • {project.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-400/15 px-2.5 py-0.5 text-xs text-emerald-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                        Live
                      </span>
                    </div>
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{project.title}</h3>
                      {project.highlightBadge && (
                        <span
                          className={`mt-2 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${
                            isChampion
                              ? "border border-amber-300/60 bg-amber-300/20 text-amber-100"
                              : "border border-white/20 bg-white/10 text-white/80"
                          }`}
                        >
                          {project.highlightBadge}
                        </span>
                      )}
                    </div>
                  </div>
                  {isChampion && (
                    <div className="absolute left-0 top-4 rotate-[-12deg] rounded-r-full bg-gradient-to-r from-amber-400 to-orange-400 px-4 py-1 text-xs font-semibold text-slate-950 shadow-lg">
                      Champion
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-5 p-6">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.shortDescription}
                  </p>
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">
                      Technologies
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border/60 pt-4">
                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accentViolet px-3.5 py-1.5 text-xs font-semibold text-white"
                        aria-label={`View live demo of ${project.title}`}
                      >
                        <FiExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    )}
                    {project.clientRepo && project.id !== "recipehub" && (
                      <a
                        href={project.clientRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <FaGithub className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    <Link
                      href={`/projects/${project.id}`}
                      className="ml-auto inline-flex items-center gap-1 text-xs font-semibold text-accent"
                    >
                      Details
                      <FiArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
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
