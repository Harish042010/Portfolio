import { useState, useRef, useEffect } from 'react';
import Rise from './Rise';
import { ROLES_DETAILED } from '../data';
import {
  Briefcase,
  Calendar,
  Building2,
  CheckCircle2,
  Sparkles,
  Award,
} from 'lucide-react';

const H2 = 'font-display font-bold leading-[1.05] text-[clamp(2.2rem,6vw,4.8rem)]';

export default function Experience() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !progressLineRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const start = windowHeight * 0.7;
      const totalHeight = rect.height;

      const progress = Math.min(1, Math.max(0, (start - rect.top) / totalHeight));
      progressLineRef.current.style.transform = `scaleY(${progress})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      id="experience"
      className="px-4 sm:px-6 md:px-14 py-20 md:py-28 max-w-6xl mx-auto scroll-mt-12"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-butter/40 border border-butter text-ink text-xs font-bold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5 text-deep" />
            Professional Journey
          </div>
          <Rise as="h2" className={H2}>Work Experience</Rise>
          <p className="mt-2 text-base md:text-lg text-ink/75 max-w-xl font-medium">
            Production engineering experience delivering scalable web software at startups and organizations.
          </p>
        </div>

        <div className="bg-cream border border-ink/15 rounded-full px-4 py-2 text-xs font-bold text-ink/70 flex items-center gap-2 shadow-sm self-start md:self-auto">
          <Briefcase className="w-3.5 h-3.5 text-deep" />
          <span>{ROLES_DETAILED.length} Roles Shipped</span>
        </div>
      </div>

      {/* Interactive Timeline Container */}
      <div ref={containerRef} className="relative mt-8">
        {/* Background Guide Line */}
        <div className="absolute left-3.5 sm:left-5 md:left-8 top-3 bottom-6 w-1 bg-ink/10 rounded-full" />

        {/* Animated Progress Line */}
        <div
          ref={progressLineRef}
          className="absolute left-3.5 sm:left-5 md:left-8 top-3 bottom-6 w-1 bg-gradient-to-b from-deep via-lilac to-butter origin-top rounded-full transition-transform duration-75 shadow-[0_0_12px_rgba(91,63,214,0.4)]"
          style={{ transform: 'scaleY(0)' }}
        />

        {/* Timeline Role Entries */}
        <div className="space-y-8 sm:space-y-12">
          {ROLES_DETAILED.map((role, idx) => {
            const isActive = activeCard === idx;

            return (
              <div
                key={role.organization}
                className="relative pl-9 sm:pl-14 md:pl-20 group"
                onMouseEnter={() => setActiveCard(idx)}
                onMouseLeave={() => setActiveCard(null)}
              >
                {/* Timeline Icon Node */}
                <div
                  className={`absolute left-0.5 sm:left-2 md:left-5 top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center transition-all duration-300 z-10 ${
                    isActive
                      ? 'bg-deep border-cream text-cream scale-125 shadow-lg shadow-deep/30'
                      : 'bg-cream border-deep text-deep shadow-sm'
                  }`}
                >
                  <Briefcase className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>

                {/* Timeline Card */}
                <article
                  className={`bg-cream border-2 rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 transition-all duration-300 shadow-sm ${
                    isActive
                      ? 'border-deep shadow-xl -translate-y-1 bg-gradient-to-br from-cream via-cream to-lilac/10'
                      : 'border-ink/10 hover:border-ink/25'
                  }`}
                >
                  {/* Top Bar: Date & Status Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2 text-deep font-bold text-xs sm:text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{role.period}</span>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-butter/50 border border-butter text-ink shadow-xs">
                      <Sparkles className="w-3 h-3 text-deep" />
                      {role.badge}
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="mt-2">
                    <h3 className="font-display font-bold text-xl sm:text-2xl md:text-3xl text-ink leading-snug">
                      {role.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1 text-ink/75 font-semibold text-sm sm:text-base">
                      <Building2 className="w-4 h-4 text-deep" />
                      <span>{role.organization}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="mt-4 text-sm sm:text-base md:text-lg text-ink/85 leading-relaxed font-normal">
                    {role.summary}
                  </p>

                  {/* Concrete Key Accomplishments */}
                  <div className="mt-6 pt-5 border-t border-ink/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-ink/60 mb-3">
                      Key Contributions &amp; Scope:
                    </h4>
                    <ul className="space-y-2.5">
                      {role.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2.5 text-xs sm:text-sm md:text-base text-ink/85"
                        >
                          <CheckCircle2 className="w-4 h-4 text-deep shrink-0 mt-0.5 sm:mt-1" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applied Technologies / Skills */}
                  <div className="mt-6 pt-4 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="text-[11px] font-bold text-ink/50 uppercase mr-1">
                      Applied:
                    </span>
                    {role.skills.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-bold px-3 py-1 rounded-full bg-ink/5 border border-ink/10 text-ink/85 hover:bg-ink hover:text-cream transition-colors duration-150"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
