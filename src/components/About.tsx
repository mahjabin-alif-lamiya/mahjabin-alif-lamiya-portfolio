export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-2">
            Get to Know Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            About Me
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-700 text-base md:text-lg leading-relaxed">
            <p>
              I am a Computer Science and Engineering undergraduate at{" "}
              <strong className="text-navy-950 font-semibold">Chittagong Independent University</strong>,
              passionate about developing modern, resilient web applications and integrating practical
              artificial intelligence capabilities into everyday software.
            </p>
            <p>
              My development expertise centers around modern web ecosystems, particularly{" "}
              <span className="text-navy-950 font-medium">React</span>,{" "}
              <span className="text-navy-950 font-medium">Next.js</span>,{" "}
              <span className="text-navy-950 font-medium">Tailwind CSS</span>,{" "}
              <span className="text-navy-950 font-medium">MongoDB</span>, and AI integrations with the{" "}
              <span className="text-navy-950 font-medium">Google Gemini API</span>. I have built and deployed
              multiple production web applications ranging from AI healthcare symptom tools and agricultural
              advisories to full-stack booking platforms and fleet management portals.
            </p>
            <p>
              Beyond solo projects, I actively contribute to collaborative engineering efforts—serving as an{" "}
              <strong className="text-navy-950 font-semibold">IT Department Intern at YSSE</strong>, leading
              as <strong className="text-navy-950 font-semibold">Treasurer</strong> of the Independent
              University Science and Engineering Club (iSEC), and participating in competitive hackathons and
              academic olympiads across the country.
            </p>

            {/* Spoken Languages */}
            <div className="pt-4 border-t border-slate-200">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-3">
                Spoken Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <strong>Bengali:</strong> Native
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 text-sm font-medium border border-slate-200">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  <strong>English:</strong> Professional Working Proficiency
                </span>
              </div>
            </div>
          </div>

          {/* Quick Highlight Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center font-bold mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-navy-950">2027</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Expected Graduation</p>
              <p className="text-xs text-slate-600 mt-0.5">B.Sc. in CSE at Chittagong Independent University</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center font-bold mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-navy-950">6+</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Deployed Web Apps</p>
              <p className="text-xs text-slate-600 mt-0.5">Production deployments with live users & demos</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center font-bold mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-navy-950">1st Place</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">PROTICHAMP AI Champion</p>
              <p className="text-xs text-slate-600 mt-0.5">Healthcare Category Champion (MediBondhu, 2026)</p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-accent flex items-center justify-center font-bold mb-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-2xl font-extrabold text-navy-950">Leadership</p>
              <p className="text-sm font-semibold text-slate-900 mt-1">Club & Tech Leadership</p>
              <p className="text-xs text-slate-600 mt-0.5">Treasurer (iSEC), CIU Robotics, IEEE CIU Branch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
