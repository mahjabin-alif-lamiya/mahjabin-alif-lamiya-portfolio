"use client";

import { motion } from "framer-motion";
import {
  SiC,
  SiCplusplus,
  SiCss,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiGoogle,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import { FiCode, FiCpu, FiDatabase, FiLayout, FiServer, FiTool } from "react-icons/fi";

interface SkillCategory {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: { name: string; icon?: React.ComponentType<{ className?: string }> }[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: FiCode,
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "PHP", icon: SiPhp },
    ],
  },
  {
    title: "Frontend Development",
    icon: FiLayout,
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Framer Motion" },
    ],
  },
  {
    title: "Backend & Authentication",
    icon: FiServer,
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "JWT Authentication" },
      { name: "RESTful APIs" },
    ],
  },
  {
    title: "Databases & Cloud Data",
    icon: FiDatabase,
    skills: [
      { name: "MongoDB Atlas", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "MySQL", icon: SiMysql },
    ],
  },
  {
    title: "AI & APIs",
    icon: FiCpu,
    skills: [{ name: "Google Gemini API", icon: SiGoogle }],
  },
  {
    title: "Tools & Platforms",
    icon: FiTool,
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code" },
      { name: "XAMPP" },
      { name: "Google Colab" },
    ],
  },
];

const marqueeSkills = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "MongoDB",
  "Node.js",
  "Google Gemini API",
  "Framer Motion",
  "Firebase",
  "Vercel",
  "Git",
  "Express.js",
];

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-72 bg-gradient-to-b from-accentViolet/12 to-transparent" />
      <div className="section-inner">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
        >
          <p className="section-kicker">Technical Stack</p>
          <h2 className="section-title font-display">
            Verified <span className="gradient-text">Skills</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-4 mx-auto max-w-2xl text-base text-muted-foreground">
            Verified technologies, frameworks, and developer tools acquired through university
            coursework, internship tasks, production projects, and competitive hackathons.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 transition-transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
              <div className="relative flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/25 to-accentViolet/25 text-accent">
                  <category.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="relative mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-accent/60 hover:text-foreground"
                  >
                    {skill.icon ? <skill.icon className="h-4 w-4" /> : null}
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 overflow-hidden rounded-full border border-border bg-card/60 py-2 mask-fade-x">
          <div className="flex w-max animate-marquee items-center gap-6">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <div key={`${skill}-${index}`} className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="uppercase tracking-[0.4em]">{skill}</span>
                <span className="h-1 w-1 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
