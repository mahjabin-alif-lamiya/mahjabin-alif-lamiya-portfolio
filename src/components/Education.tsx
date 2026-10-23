export default function Education() {
  const coursework = [
    "Data Structures & Algorithms",
    "Database Management Systems",
    "Software Engineering",
    "Theory of Computation",
    "Computer Graphics",
    "Machine Learning",
  ];

  return (
    <section id="education" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-2">
            Academic Background
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Education
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Degree Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            {/* Top Accent Bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent via-blue-500 to-navy-700" />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-accent font-semibold text-xs tracking-wide uppercase mb-2">
                  Undergraduate Degree
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950 tracking-tight">
                  Bachelor of Science in Computer Science and Engineering (CSE)
                </h3>
                <p className="text-base sm:text-lg font-semibold text-accent mt-1">
                  Chittagong Independent University
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-300 text-slate-800 text-xs sm:text-sm font-medium">
                  <svg className="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Expected Graduation: 2027
                </span>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              Rigorous undergraduate engineering curriculum combining strong core theoretical foundations
              in algorithms and systems with modern software engineering practices, databases, and applied machine learning.
            </p>

            {/* Relevant Coursework */}
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 mb-3">
                Relevant Coursework
              </h4>
              <div className="flex flex-wrap gap-2">
                {coursework.map((course) => (
                  <span
                    key={course}
                    className="inline-flex items-center px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-800 text-xs sm:text-sm font-medium hover:border-blue-300 transition-colors"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
