import Rise from './Rise';
import { EDUCATION_DATA } from '../data';
import { GraduationCap, MapPin, Award, CheckCircle2, BookOpen, School } from 'lucide-react';

const H2 = 'font-display font-bold leading-[1.05] text-[clamp(2.2rem,6vw,4.8rem)]';

export default function Education() {
  const college = EDUCATION_DATA[0];
  const schooling = EDUCATION_DATA.slice(1);

  const appliedSkills = [
    'AI & Data Science',
    'Algorithms',
    'Database Management',
    'Python',
    'Team Leadership',
  ];

  return (
    <section
      id="education"
      className="px-4 sm:px-6 md:px-14 py-20 md:py-28 max-w-6xl mx-auto scroll-mt-12"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter/40 border border-butter text-ink text-xs font-bold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5 text-deep" />
            Academic Foundations
          </div>
          <Rise as="h2" className={H2}>Education</Rise>
          <p className="mt-2 text-base md:text-lg text-ink/75 max-w-xl font-medium">
            Rigorous training in AI, data science algorithms, and computer systems alongside strong schooling credentials.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-cream border border-ink/15 rounded-full px-4 py-2 text-xs font-bold text-ink/70">
          <BookOpen className="w-4 h-4 text-deep" />
          <span>Undergraduate &amp; Secondary Education</span>
        </div>
      </div>

      {/* Primary College Card */}
      <div className="bg-gradient-to-br from-cream via-cream to-lilac/10 border-2 border-deep/30 hover:border-deep rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group mb-8">
        {/* Subtle decorative glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-lilac/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          {/* Top header row */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-ink/10">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-2.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-deep text-cream text-xs font-bold">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>{college.period}</span>
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-butter/60 text-ink">
                  B.Tech Undergrad
                </span>
              </div>

              <h3 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
                {college.degree}
              </h3>
              <p className="text-sm sm:text-base md:text-lg font-bold text-deep mt-1.5">
                {college.institution}
              </p>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-ink/70 font-semibold mt-1">
                <MapPin className="w-3.5 h-3.5 text-deep" />
                <span>{college.location}, Tamil Nadu</span>
              </div>
            </div>

            {/* CGPA Badge */}
            <div className="bg-cream border-2 border-deep/30 rounded-2xl p-4 sm:p-5 text-center shadow-md shrink-0 w-full sm:w-auto">
              <div className="text-[11px] font-bold uppercase tracking-wider text-deep mb-0.5">CGPA Score</div>
              <div className="font-display font-black text-3xl sm:text-4xl text-ink">
                7.80 <span className="text-base font-bold text-ink/50">/ 10</span>
              </div>
              <div className="text-[11px] font-semibold text-emerald-700 bg-emerald-500/15 rounded-full px-2 py-0.5 mt-1.5">
                Consistent Record
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="mt-5 text-sm sm:text-base md:text-lg text-ink/85 leading-relaxed font-normal">
            Currently in third year, focusing on machine learning, data structures, system design, and scalable web engineering.
          </p>

          {/* Key Contributions & Scope */}
          <div className="mt-6 pt-5 border-t border-ink/10">
            <h4 className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3.5 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-deep" />
              <span>Key Contributions &amp; Scope:</span>
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-ink/85">
                <CheckCircle2 className="w-4 h-4 text-deep shrink-0 mt-0.5 sm:mt-1" />
                <span>Consistently maintained a solid 7.80 / 10 CGPA across rigorous AI, ML, and CS core subjects</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-ink/85">
                <CheckCircle2 className="w-4 h-4 text-deep shrink-0 mt-0.5 sm:mt-1" />
                <span>Active leader in technical campus clubs, coding bootcamps, and competitive hackathons</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-ink/85">
                <CheckCircle2 className="w-4 h-4 text-deep shrink-0 mt-0.5 sm:mt-1" />
                <span>Coordinating department tech symposiums and student innovation initiatives</span>
              </li>
            </ul>
          </div>

          {/* Applied Technologies / Competencies */}
          <div className="mt-6 pt-4 border-t border-ink/10 flex flex-wrap items-center gap-2">
            <span className="text-[11px] font-bold text-ink/50 uppercase mr-1">
              Applied:
            </span>
            {appliedSkills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-bold px-3 py-1 rounded-full bg-cream border border-ink/15 text-ink shadow-xs hover:border-deep hover:bg-ink hover:text-cream transition-colors duration-150 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Schooling Section */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <School className="w-4 h-4 text-deep" />
          <h4 className="font-display font-bold text-lg sm:text-xl text-ink">
            Schooling &amp; Pre-University Foundation
          </h4>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {schooling.map((sch) => (
            <div
              key={sch.degree}
              className="bg-cream border-2 border-ink/10 rounded-2xl p-5 sm:p-6 hover:border-deep/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold px-2.5 py-0.5 rounded-full bg-butter/50 text-ink">
                    {sch.period}
                  </span>
                  <div className="text-right">
                    <span className="font-display font-extrabold text-xl text-deep">
                      {sch.grade}
                    </span>
                    <span className="text-[11px] text-ink/50 font-semibold block">Academic Score</span>
                  </div>
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-ink leading-snug">
                  {sch.degree}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-deep mt-1">
                  {sch.institution}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-ink/5 flex items-center justify-between text-xs text-ink/60 font-medium">
                <span>{sch.location}</span>
                <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md">
                  Distinction (90%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
