import { useState, useEffect } from 'react';
import {
  X,
  Download,
  Copy,
  Check,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Mail,
  ExternalLink,
  MapPin,
  Calendar,
  Sparkles,
  Printer,
} from 'lucide-react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, LOCATION, ROLES_DETAILED, HACKS_DETAILED, PROJECTS } from '../data';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `HARISH — Full Stack Developer
Email: ${EMAIL}
GitHub: ${GITHUB_URL}
LinkedIn: ${LINKEDIN_URL}
Location: ${LOCATION}

EDUCATION:
B.Tech in Artificial Intelligence & Data Science (2024–2028)
Sri Krishna College of Engineering & Technology (SKCET) — CGPA: 7.80/10
Senior Secondary (XII) – HSC (2024) — 90%
Secondary (X) – SSLC (2022) — 90%

EXPERIENCE:
1. Full Stack Developer — NuetreX.io (Oct 2025 – Jul 2026)
   - Architected & maintained React, Node, Express, MongoDB web apps for tech startup.
   - Led 2-3 end-to-end web projects, owning UI design, frontend architecture, and deployment.
2. Web Development Intern — Inamigos Foundation (May – Jun 2026)
   - Engineered responsive NGO awareness web platform; delivered UI/UX improvement audits.

KEY PROJECTS:
- ZenXora: Smart placement tracker with ATS resume parsing engine (<0.4s evaluation).
- ARG Academy: Production school portal serving hundreds daily (Lighthouse 95+).
- FactoryMind AI: Industrial IoT CNC lathe predictive maintenance prototype.
- SolarSync: Renewable energy monitoring with Spring Boot, React, and JWT.

CERTIFICATIONS:
- AI, ML & Data Science — Infosys Springboard
- AI/ML — Coursera
- NPTEL Certified Courses

CORE SKILLS:
React.js, TypeScript, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Python, Machine Learning, NLP, Arduino/IoT, Tailwind CSS, REST APIs, Git.`;

    navigator.clipboard?.writeText(text).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <div
      id="resume-modal"
      className="fixed inset-0 z-[200] bg-ink/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Harish Professional Resume"
    >
      <div
        className="bg-cream text-ink rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border-2 border-ink shadow-2xl relative flex flex-col my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Sticky Action Bar */}
        <div className="sticky top-0 z-20 bg-cream/95 backdrop-blur-md border-b border-ink/15 px-4 py-3 sm:px-6 sm:py-4 flex items-center justify-between gap-2 sm:gap-3 print:hidden">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="font-display font-bold text-xs sm:text-base text-ink truncate">
              Resume Preview
            </span>
            <span className="hidden md:inline-block text-xs font-semibold px-2 py-0.5 rounded-full bg-lilac/30 text-deep">
              Updated 2026
            </span>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            <a
              href={`${import.meta.env.BASE_URL}harish-resume.pdf`}
              download="Harish_Resume.pdf"
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-emerald-600 text-cream hover:bg-emerald-700 text-[11px] sm:text-xs font-bold transition-colors cursor-pointer shadow-sm"
              title="Download official PDF resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span><span className="hidden sm:inline">Download </span>PDF</span>
            </a>

            <button
              onClick={handleCopySummary}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-ink/5 hover:bg-ink hover:text-cream text-[11px] sm:text-xs font-bold transition-colors cursor-pointer border border-ink/10"
              title="Copy formatted plain text summary"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700 hidden sm:inline">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Copy Text</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-deep text-cream hover:bg-ink text-xs font-bold transition-colors cursor-pointer shadow-sm"
              title="Print via browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-ink/10 hover:bg-ink hover:text-cream flex items-center justify-center transition-colors cursor-pointer shrink-0"
              aria-label="Close resume preview"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet Content */}
        <div className="p-4 sm:p-8 md:p-10 space-y-6 sm:space-y-8 print:p-0">
          {/* Header */}
          <div className="border-b-2 border-ink/10 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-ink tracking-tight">
                  Harish
                </h1>
                <p className="text-deep font-bold text-base sm:text-lg mt-1">
                  Full Stack Developer · AI &amp; Data Science Student
                </p>
                <div className="flex items-center gap-2 text-ink/70 text-xs sm:text-sm mt-2">
                  <MapPin className="w-3.5 h-3.5 text-deep" />
                  <span>{LOCATION}</span>
                </div>
              </div>

              {/* Quick Contact Chips */}
              <div className="flex flex-col sm:items-end gap-1.5 text-xs text-ink/85 font-medium">
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-deep flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-deep" />
                  <span>{EMAIL}</span>
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep flex items-center gap-1.5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-deep" />
                  <span>github.com/Harish042010</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep flex items-center gap-1.5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-deep" />
                  <span>LinkedIn Profile</span>
                </a>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-deep flex items-center gap-1.5"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-deep" />
                  <span>@harijxse</span>
                </a>
              </div>
            </div>

            <p className="mt-4 text-ink/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
              Proactive Full Stack Engineer with proven production experience architecting scalable React, Node.js, and MongoDB platforms. Creator of ZenXora (smart placement &amp; ATS platform) with practical experience shipping commercial web software, AI/NLP tools, and IoT hardware prototypes.
            </p>
          </div>

          {/* Education */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Education
              </h2>
            </div>
            <div className="bg-white/70 border border-ink/10 rounded-2xl p-4 sm:p-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                <h3 className="font-display font-bold text-base text-ink">
                  Sri Krishna College of Engineering &amp; Technology (SKCET)
                </h3>
                <span className="text-xs font-bold text-deep px-2.5 py-0.5 rounded-full bg-lilac/30 w-fit">
                  2024 – 2028 · 3rd Year
                </span>
              </div>
              <p className="text-xs sm:text-sm text-ink/80 font-medium mt-1">
                B.Tech in Artificial Intelligence &amp; Data Science · <strong className="text-ink font-bold">CGPA: 7.80 / 10</strong>
              </p>
              <p className="text-xs text-ink/75 mt-2">
                Currently in third year, focusing on machine learning, data structures, system design, and scalable web engineering.
              </p>
              <div className="mt-2.5 space-y-1 text-xs text-ink/80">
                <p>• Consistently maintained a solid 7.80 / 10 CGPA across rigorous AI, ML, and CS core subjects</p>
                <p>• Active leader in technical campus clubs, coding bootcamps, and competitive hackathons</p>
                <p>• Coordinating department tech symposiums and student innovation initiatives</p>
              </div>
              <div className="mt-2.5 pt-2 border-t border-ink/5 flex flex-wrap gap-1">
                {['AI & Data Science', 'Algorithms', 'Database Management', 'Python', 'Team Leadership'].map((s) => (
                  <span key={s} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-ink/5 text-ink/80">
                    {s}
                  </span>
                ))}
              </div>

              {/* Secondary Education */}
              <div className="mt-3 pt-3 border-t border-ink/5 grid sm:grid-cols-2 gap-2 text-xs text-ink/80">
                <div>
                  <strong className="text-ink font-bold">Senior Secondary (XII) – HSC</strong>
                  <span className="text-ink/60 ml-1.5">2024 · 90%</span>
                </div>
                <div>
                  <strong className="text-ink font-bold">Secondary (X) – SSLC</strong>
                  <span className="text-ink/60 ml-1.5">2022 · 90%</span>
                </div>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-4">
              {ROLES_DETAILED.filter((r) => r.type === 'Work').map((role) => (
                <div
                  key={role.organization}
                  className="bg-white/70 border border-ink/10 rounded-2xl p-4 sm:p-5"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-display font-bold text-base text-ink">
                        {role.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-deep">
                        {role.organization}
                      </p>
                    </div>
                    <span className="text-xs font-bold text-ink/70 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-deep" />
                      {role.period}
                    </span>
                  </div>

                  <ul className="mt-3 space-y-1.5 text-xs sm:text-sm text-ink/85">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="text-deep font-bold">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3 pt-3 border-t border-ink/5 flex flex-wrap gap-1.5">
                    {role.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-ink/5 text-ink/80"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Key Projects */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Code className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Flagship Projects
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {PROJECTS.slice(0, 4).map((p) => (
                <div
                  key={p.id}
                  className="bg-white/70 border border-ink/10 rounded-2xl p-4 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <h3 className="font-display font-bold text-sm sm:text-base text-ink">
                        {p.name}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-butter/60 text-ink">
                        {p.status}
                      </span>
                    </div>
                    <p className="text-xs text-ink/80 leading-relaxed mb-3">
                      {p.blurb}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-ink/5">
                    <p className="text-[11px] font-bold text-deep mb-1.5">
                      {p.metrics}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {p.tags.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-semibold px-2 py-0.5 rounded bg-ink/5 text-ink/75"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Breakdown */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Technical Proficiencies
              </h2>
            </div>
            <div className="bg-white/70 border border-ink/10 rounded-2xl p-4 sm:p-5 space-y-3 text-xs sm:text-sm">
              <div>
                <strong className="text-deep font-bold">Languages &amp; Core: </strong>
                <span className="text-ink/85">JavaScript (ES6+), TypeScript, Python, Java, HTML5, CSS3, SQL.</span>
              </div>
              <div>
                <strong className="text-deep font-bold">Frameworks &amp; Libraries: </strong>
                <span className="text-ink/85">React.js, Node.js, Express.js, Spring Boot, Tailwind CSS, Bootstrap.</span>
              </div>
              <div>
                <strong className="text-deep font-bold">Databases &amp; Cloud: </strong>
                <span className="text-ink/85">MongoDB, PostgreSQL, MySQL, REST APIs, JSON Web Tokens (JWT).</span>
              </div>
              <div>
                <strong className="text-deep font-bold">AI/ML, NLP &amp; Hardware: </strong>
                <span className="text-ink/85">Scikit-learn, NLTK, Machine Learning Algorithms, Arduino, IoT Sensors.</span>
              </div>
              <div>
                <strong className="text-deep font-bold">Tools &amp; Workflows: </strong>
                <span className="text-ink/85">Git, GitHub, Postman, Vite, Lighthouse Optimization, Linux/Unix commands.</span>
              </div>
            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Certifications &amp; Training
              </h2>
            </div>
            <div className="bg-white/70 border border-ink/10 rounded-2xl p-4 sm:p-5 space-y-2 text-xs sm:text-sm">
              <div className="flex items-start gap-2">
                <span className="text-deep font-bold">•</span>
                <span className="text-ink/85">Certified Courses in AI, Machine Learning, and Data Science — <strong className="text-ink font-bold">Infosys Springboard</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-deep font-bold">•</span>
                <span className="text-ink/85">Certified Courses in AI/ML — <strong className="text-ink font-bold">Coursera</strong></span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-deep font-bold">•</span>
                <span className="text-ink/85">Certified Courses — <strong className="text-ink font-bold">NPTEL</strong></span>
              </div>
            </div>
          </section>

          {/* Hackathons & Leadership */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-deep" />
              <h2 className="font-display font-bold text-lg text-ink uppercase tracking-wider">
                Hackathons &amp; Honors
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {HACKS_DETAILED.map((h) => (
                <div
                  key={h.title}
                  className="bg-white/70 border border-ink/10 rounded-xl p-3 sm:p-4 text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <strong className="font-display font-bold text-ink text-sm">
                      {h.title}
                    </strong>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-deep text-cream">
                      {h.badge}
                    </span>
                  </div>
                  <p className="text-deep font-semibold mb-1">{h.role}</p>
                  <p className="text-ink/75 leading-relaxed">{h.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer info inside modal */}
        <div className="bg-ink/5 border-t border-ink/10 px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-ink/70 print:hidden">
          <span>Available for software engineering roles &amp; technical projects.</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-ink text-cream hover:bg-deep font-bold transition-colors cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
