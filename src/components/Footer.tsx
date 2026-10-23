import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white border-t border-navy-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-navy-900">
          <div>
            <Link href="#home" className="text-xl font-bold text-white hover:text-blue-300 transition-colors">
              Mahjabin Alif Lamiya
            </Link>
            <p className="text-xs text-slate-400 mt-1">
              CSE Student &bull; Software Developer &bull; AI-Integrated Web Applications
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300">
            <Link href="#about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="#skills" className="hover:text-white transition-colors">
              Skills
            </Link>
            <Link href="#education" className="hover:text-white transition-colors">
              Education
            </Link>
            <Link href="#experience" className="hover:text-white transition-colors">
              Experience
            </Link>
            <Link href="#achievements" className="hover:text-white transition-colors">
              Achievements
            </Link>
            <Link href="#projects" className="hover:text-white transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {currentYear} Mahjabin Alif Lamiya. All rights reserved.
          </p>
          <p className="text-slate-400">
            Built with Next.js, TypeScript &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
