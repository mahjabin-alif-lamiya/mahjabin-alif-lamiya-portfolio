export default function Experience() {
  const leadershipRoles = [
    {
      role: "Treasurer",
      organization: "Independent University Science and Engineering Club (iSEC)",
      description:
        "Overseeing organizational budget allocation, financial tracking, and logistical resources for departmental engineering workshops and technical events.",
      badge: "Elected Officer",
    },
    {
      role: "Executive Member",
      organization: "CIU Robotics Club",
      description:
        "Collaborating on robotics projects, technical workshops, hardware-software integration activities, and student engineering exhibitions.",
      badge: "Executive",
    },
    {
      role: "Content Coordinator",
      organization: "IEEE CIU Student Branch",
      description:
        "Coordinating technical content, promotional releases, educational announcements, and workshop communications for the university IEEE student branch.",
      badge: "Coordinator",
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-2">
            Work & Leadership
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Experience & Leadership
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Internship Card */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-accent" />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold">
                    Current Role
                  </span>
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                    Professional Internship
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-navy-950">
                  IT Department Intern
                </h3>
                <p className="text-base font-semibold text-accent mt-0.5">
                  YSSE
                </p>
              </div>

              <div className="sm:text-right shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Currently Serving
                </span>
              </div>
            </div>

            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Serving as an intern in the IT Department at YSSE. Contributing to organizational IT
              initiatives, supporting software and digital operational workflows, and collaborating with cross-functional
              teams on technical task executions.
            </p>
          </div>

          {/* Leadership & Co-Curricular Heading */}
          <div>
            <h3 className="text-xl font-bold text-navy-950 mb-4 flex items-center gap-2">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Student Organization Leadership
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {leadershipRoles.map((item) => (
                <div
                  key={item.organization}
                  className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-50 text-accent">
                        {item.badge}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-navy-950">
                      {item.role}
                    </h4>
                    <p className="text-xs font-semibold text-slate-600 mt-1 mb-3">
                      {item.organization}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
