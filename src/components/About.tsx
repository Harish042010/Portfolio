import Rise from './Rise';
import avatarImg from '../assets/avatar.png';
import { ArrowDownRight, Code, Brain, Rocket, Trophy, FileText, CheckCircle2 } from 'lucide-react';

const H2 = 'font-display font-black leading-[1.05] text-[clamp(2.4rem,6vw,4.8rem)]';

interface AboutProps {
  onOpenResume?: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  const STATS = [
    { label: 'Years Building', value: '3+', icon: Code, highlight: 'Web & Systems' },
    { label: 'Products & Prototypes', value: '7+', icon: Rocket, highlight: 'Shipped & Tested' },
    { label: 'SKCET AI & DS CGPA', value: '7.80', icon: Brain, highlight: 'B.Tech 3rd Year' },
    { label: 'Hackathons & Honors', value: '4+', icon: Trophy, highlight: 'State & National' },
  ];

  const PILLARS = [
    'Clean Architecture & Scalable Node/React',
    'Sub-second ATS Resume Scoring Algorithms',
    'Production Lighthouse 95+ Performance',
  ];

  return (
    <section
      id="about"
      className="px-4 sm:px-6 md:px-14 pt-28 sm:pt-36 pb-20 md:pb-28 max-w-6xl mx-auto scroll-mt-12"
    >
      {/* Editorial Profile Grid */}
      <div className="grid md:grid-cols-[minmax(240px,380px)_1fr] gap-10 md:gap-16 items-center">
        {/* Animated Avatar with Spinning Text Ring */}
        <div className="relative w-52 sm:w-64 md:w-full aspect-square mx-auto flex items-center justify-center">
          <svg
            viewBox="0 0 300 300"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full text-deep animate-spin-slow pointer-events-none select-none"
          >
            <defs>
              <path
                id="ring"
                d="M150,150 m-128,0 a128,128 0 1,1 256,0 a128,128 0 1,1 -256,0"
              />
            </defs>
            <text fontSize="14.5" fontWeight="800" fill="currentColor">
              <textPath href="#ring" textLength="790" lengthAdjust="spacing">
                Full stack developer · Building ZenXora · Builder of things that ship · Student at SKCET ·
              </textPath>
            </text>
          </svg>

          {/* Profile Avatar Card */}
          <div className="w-[72%] h-[72%] rounded-full overflow-hidden shadow-2xl border-4 border-deep/20 bg-cream flex items-center justify-center group relative">
            <img
              src={avatarImg}
              alt="Harish - Full Stack Developer"
              width="320"
              height="320"
              decoding="async"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              loading="eager"
            />
            <div className="absolute inset-0 rounded-full bg-deep/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>

        {/* Bio Copy & Actions */}
        <div>
          {/* SEO Primary Heading */}
          <h1 className="sr-only">Harish — Full Stack Developer &amp; AI Systems Engineer</h1>

          {/* Status Capsule */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac/30 border border-lilac text-deep text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Currently Building ZenXora ATS &amp; Platform</span>
          </div>

          <Rise as="h2" className={H2}>Hi, I’m Harish.</Rise>

          <p className="mt-5 text-xl leading-relaxed max-w-xl text-ink/90 font-medium">
            I’m a full stack developer and third-year AI &amp; Data Science student at SKCET. I engineer robust web applications with <span className="font-bold text-deep">React, TypeScript, Node, Express, and MongoDB</span>, and I’ve shipped production platforms for a technology startup and a 20+ year legacy school.
          </p>

          <p className="mt-4 text-lg leading-relaxed max-w-xl text-ink/80">
            Currently engineering <span className="font-bold text-ink underline decoration-butter decoration-4 underline-offset-4">ZenXora</span> — an intelligent placement portal helping engineering graduates optimize their resumes with sub-second ATS scoring and land tier-1 software roles.
          </p>

          {/* Engineering Pillars Checklist */}
          <div className="mt-6 space-y-2.5">
            {PILLARS.map((p) => (
              <div key={p} className="flex items-center gap-2.5 text-xs sm:text-sm text-ink/85 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-deep shrink-0" />
                <span>{p}</span>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
            <a
              href="#work"
              className="bg-ink text-cream hover:bg-deep transition-all duration-200 font-bold rounded-full px-7 py-3.5 shadow-md flex items-center justify-center gap-2 hover:scale-102 text-center"
            >
              <span>Explore My Work</span>
              <ArrowDownRight className="w-4 h-4" />
            </a>

            {onOpenResume && (
              <button
                id="about-resume-btn"
                onClick={onOpenResume}
                className="bg-lilac hover:bg-butter text-ink transition-all duration-200 font-bold rounded-full px-7 py-3.5 shadow-sm flex items-center justify-center gap-2 cursor-pointer hover:scale-102 text-center"
              >
                <FileText className="w-4 h-4" />
                <span>View Resume</span>
              </button>
            )}

            <a
              href="#contact"
              className="border-2 border-ink hover:bg-ink hover:text-cream transition-all duration-200 font-bold rounded-full px-7 py-3.5 hover:scale-102 flex items-center justify-center text-center"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Bento Metric Counter Tiles */}
      <div className="mt-16 sm:mt-24 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 md:gap-6">
        {STATS.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-cream border-2 border-ink/10 rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 text-center hover:border-deep/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 mx-auto mb-2.5 sm:mb-3 rounded-2xl bg-lilac/20 flex items-center justify-center text-deep group-hover:scale-110 transition-transform">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-ink">
                {stat.value}
              </div>
              <div className="mt-1 text-xs md:text-sm font-bold text-ink/80">
                {stat.label}
              </div>
              <div className="text-[11px] font-semibold text-deep/70 mt-0.5">
                {stat.highlight}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
