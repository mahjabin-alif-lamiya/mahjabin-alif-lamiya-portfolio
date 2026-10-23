import Link from "next/link";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            Verified production web applications, solo AI hackathon submissions, and collaborative
            university software projects built with Next.js, React, and MongoDB.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual Card Banner */}
                <div className="h-44 bg-gradient-to-br from-navy-950 via-navy-900 to-secondary p-5 flex flex-col justify-between relative overflow-hidden">
                  {/* Subtle decorative grid/glow */}
                  <div
                    className="absolute -right-6 -bottom-6 w-32 h-32 rounded-full bg-accent/20 blur-2xl pointer-events-none"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -left-6 -top-6 w-24 h-24 rounded-full bg-blue-400/10 blur-xl pointer-events-none"
                    aria-hidden="true"
                  />

                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-navy-800 text-blue-200 border border-navy-700">
                      0{index + 1} &bull; {project.category}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs text-emerald-400 font-semibold bg-emerald-950/70 border border-emerald-800 px-2.5 py-0.5 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    {project.highlightBadge && (
                      <span className="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {project.highlightBadge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <p className="text-slate-600 text-sm leading-relaxed mb-5 min-h-[4rem]">
                    {project.shortDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Technologies
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Live Demo Link */}
                  {project.liveLink && project.liveLink !== "#" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-accent hover:bg-accentHover text-white px-3.5 py-2 rounded-lg text-xs font-semibold shadow-sm transition-colors"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  )}

                  {/* Source Code Links (verified only) */}
                  {project.clientRepo && (
                    <a
                      href={project.clientRepo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 px-3 py-2 rounded-lg text-xs font-semibold transition-colors"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Code
                    </a>
                  )}

                  {/* Project Details Link */}
                  <Link
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center gap-1 ml-auto text-accent hover:text-accentHover text-xs font-semibold hover:underline py-2"
                  >
                    Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
