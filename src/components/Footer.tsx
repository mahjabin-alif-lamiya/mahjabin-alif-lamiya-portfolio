import Link from "next/link";
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/80">
      <div className="section-inner py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link href="#home" className="font-display text-lg font-semibold">
              Mahjabin Alif Lamiya
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              CSE Student • Software Developer • AI-Integrated Web Applications
            </p>
            <div className="mt-4 flex items-center gap-2">
              <a
                href="https://github.com/mahjabin-alif-lamiya"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/mahjabinaalif"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:alif03lamiya@gmail.com"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Email"
              >
                <FiMail className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <Link href="#about" className="hover:text-foreground">
              About
            </Link>
            <Link href="#skills" className="hover:text-foreground">
              Skills
            </Link>
            <Link href="#education" className="hover:text-foreground">
              Education
            </Link>
            <Link href="#experience" className="hover:text-foreground">
              Experience
            </Link>
            <Link href="#achievements" className="hover:text-foreground">
              Achievements
            </Link>
            <Link href="#projects" className="hover:text-foreground">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-foreground">
              Contact
            </Link>
            <Link href="#home" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 hover:text-foreground">
              Back to top
              <FiArrowUp className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>© {currentYear} Mahjabin Alif Lamiya. All rights reserved.</p>
          <p>Built with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
