import { useState } from 'react';
import Rise from './Rise';
import { ROW1, ROW2, HACKS_DETAILED, SKILL_CATEGORIES } from '../data';
import { Trophy, Wrench, Sparkles, CheckCircle2, Code2, Server, Cpu, GitBranch } from 'lucide-react';

const H2 = 'font-display font-bold leading-[1.05] text-[clamp(2.2rem,6vw,4.8rem)]';

function Row({ items, rev }: { items: string[]; rev?: boolean }) {
  const pills = (dup: boolean) => (
    <ul
      className={`flex gap-3 pr-3 ${dup ? 'dup' : ''}`}
      aria-hidden={dup || undefined}
    >
      {items.map((x) => (
        <li
          key={x}
          className="shrink-0 border-2 border-ink rounded-full px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-base md:text-lg font-bold bg-cream hover:bg-ink hover:text-cream transition-colors duration-200 select-none shadow-sm cursor-default"
        >
          {x}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mqw overflow-hidden py-1 w-full max-w-full">
      <div className={`mq ${rev ? 'r' : ''}`}>
        {pills(false)}
        {pills(true)}
      </div>
    </div>
  );
}

export default function Toolbox() {
  const [activeSkillCategory, setActiveSkillCategory] = useState<number>(0);

  const CATEGORY_ICONS = [Code2, Server, Cpu, GitBranch];

  return (
    <section id="toolbox" className="py-24 overflow-hidden scroll-mt-12 w-full max-w-full">
      {/* Header */}
      <div className="px-4 sm:px-6 md:px-14 mb-8 sm:mb-10 max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac/30 border border-lilac text-deep text-xs font-bold uppercase tracking-wider mb-3">
          <Wrench className="w-3.5 h-3.5" />
          Skills &amp; Leadership
        </div>
        <Rise as="h2" className={H2}>Toolbox</Rise>
        <p className="mt-2 text-base sm:text-lg text-ink/75 max-w-xl font-medium">
          Technologies and tools I use to architect full-stack applications, ML models, and interactive user interfaces.
        </p>
      </div>

      {/* Marquee Pill Rows */}
      <div className="grid gap-4 w-full">
        <Row items={ROW1} />
        <Row items={ROW2} rev />
      </div>

      {/* Interactive Categorized Skills Matrix */}
      <div className="px-4 sm:px-6 md:px-14 mt-16 sm:mt-20 max-w-6xl mx-auto">
        <div className="bg-cream border-2 border-ink/10 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-deep uppercase tracking-wider block mb-1">
                Detailed Skill Proficiencies
              </span>
              <h3 className="font-display font-bold text-xl sm:text-2xl text-ink">
                Technical Capabilities Matrix
              </h3>
            </div>

            {/* Category Navigation Tabs */}
            <div className="flex items-center gap-1.5 bg-ink/5 p-1 rounded-full border border-ink/10 overflow-x-auto scrollbar-none">
              {SKILL_CATEGORIES.map((cat, idx) => {
                const Icon = CATEGORY_ICONS[idx % CATEGORY_ICONS.length];
                const isActive = activeSkillCategory === idx;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveSkillCategory(idx)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 whitespace-nowrap ${
                      isActive
                        ? 'bg-deep text-cream shadow-sm'
                        : 'text-ink/70 hover:text-ink'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Display */}
          {(() => {
            const currentCat = SKILL_CATEGORIES[activeSkillCategory];
            return (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm text-ink/70">
                    {currentCat.description}
                  </p>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-butter/60 text-ink">
                    {currentCat.badge}
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {currentCat.skills.map((s) => (
                    <div
                      key={s.name}
                      className="bg-white/80 border border-ink/10 rounded-2xl p-3.5 flex items-center justify-between gap-2 shadow-xs hover:border-deep/30 transition-colors"
                    >
                      <span className="font-bold text-ink text-xs sm:text-sm">
                        {s.name}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-lilac/30 text-deep whitespace-nowrap">
                        {s.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}
        </div>
      </div>

      {/* Hackathons & Leadership Section */}
      <div className="px-4 sm:px-6 md:px-14 mt-16 sm:mt-24 max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-deep" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-ink">
            Hackathons and leadership
          </h2>
        </div>
        <p className="text-ink/70 text-sm sm:text-base mb-6 sm:mb-8 max-w-xl">
          Competitive problem solving, hackathon leadership, and technical coordination on state and national stages.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {HACKS_DETAILED.map((hack, i) => (
            <li
              key={hack.title}
              className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-md border-2 border-ink/10 hover:border-deep/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between ${
                i % 3 === 0
                  ? 'bg-butter/60'
                  : i % 3 === 1
                  ? 'bg-lilac/40'
                  : 'bg-white'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-ink text-cream">
                    {hack.badge}
                  </span>
                  <span className="text-xs font-semibold text-ink/70">
                    {hack.role}
                  </span>
                </div>

                <p className="font-display font-bold text-2xl text-ink mt-2">
                  {hack.title}
                </p>
                <p className="mt-3 text-sm md:text-base text-ink/80 leading-relaxed">
                  {hack.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-ink/10 flex items-center gap-2 text-xs font-bold text-deep">
                <CheckCircle2 className="w-4 h-4 text-deep" />
                <span>Verified Achievement</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
