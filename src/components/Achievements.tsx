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
    description: "Won 1st Place Championship in the Healthcare category with MediBondhu, an AI-powered medical symptom guidance web app.",
  },
  {
    title: "Finalist",
    event: "NextGen Hackathon",
    year: "2025",
    awardType: "finalist",
    description: "Selected as a Hackathon Finalist for engineering innovative, scalable software solutions under competitive time constraints.",
  },
  {
    title: "Certificate of Achievement",
    event: "SciBlitz 2.0 AI Hackathon",
    year: "IEEE CUET Student Branch",
    awardType: "achievement",
    description: "Recognized for high-impact AI application development, presenting the foundation that evolved into the championship project MediBondhu.",
  },
  {
    title: "Semi-Finalist",
    event: "ICT Olympiad (Season 2 & Season 3)",
    year: "2025 & 2026",
    awardType: "semifinalist",
    description: "Advanced to national semi-finals across two consecutive seasons, testing algorithmic reasoning and computer science fundamentals.",
  },
  {
    title: "Semi-Finalist",
    event: "Bangla Innovator",
    awardType: "semifinalist",
    description: "Honored as a national semi-finalist for innovative technology proposals focused on local technological empowerment.",
  },
  {
    title: "Participant",
    event: "CUET CSE Fest DevOps Hackathon",
    year: "Preliminary Round",
    awardType: "participant",
    description: "Participated in hands-on continuous deployment, containerization, and infrastructure engineering challenges.",
  },
];

function AwardBadge({ type }: { type: Achievement["awardType"] }) {
  switch (type) {
    case "champion":
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
          <svg className="w-3.5 h-3.5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Champion
        </span>
      );
    case "finalist":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-900 border border-blue-300 text-xs font-bold uppercase tracking-wider">
          Finalist
        </span>
      );
    case "achievement":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-300 text-xs font-bold uppercase tracking-wider">
          Achievement
        </span>
      );
    case "semifinalist":
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold uppercase tracking-wider">
          Semi-Finalist
        </span>
      );
    default:
      return (
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-xs font-medium uppercase tracking-wider">
          Participant
        </span>
      );
  }
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-accent mb-2">
            Recognition & Honors
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-950 tracking-tight">
            Competitions & Achievements
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm sm:text-base">
            Verified competitive awards, hackathon outcomes, and national olympiad recognitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between ${
                item.awardType === "champion"
                  ? "bg-gradient-to-br from-amber-50/50 via-white to-slate-50 border-amber-300 shadow-sm hover:shadow-md ring-1 ring-amber-200"
                  : "bg-white border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <AwardBadge type={item.awardType} />
                  {item.year && (
                    <span className="text-xs font-medium text-slate-500">
                      {item.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy-950 mb-1">
                  {item.event}
                </h3>
                <p className="text-xs font-semibold text-accent mb-3">
                  {item.title}
                </p>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
