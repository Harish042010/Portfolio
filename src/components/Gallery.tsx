import { useState, useEffect } from 'react';
import Rise from './Rise';
import { PROJECTS } from '../data';
import { GithubIcon } from './BrandIcons';
import {
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Globe,
  Code2,
  Terminal,
  Activity,
  Layers,
  Cpu,
  Smartphone,
  ArrowUpRight,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Zap,
  Shield,
  Gauge,
  Radio,
  BarChart3,
  Check,
} from 'lucide-react';

const H2 = 'font-display font-bold leading-[1.05] text-[clamp(2.2rem,6vw,4.8rem)]';

export default function Gallery() {
  const [activeProjectId, setActiveProjectId] = useState<string>(PROJECTS[0].id);

  // Interactive Live Simulator States for the Showcase
  const [atsScoreState, setAtsScoreState] = useState<'idle' | 'parsing' | 'done'>('done');
  const [telemetryTick, setTelemetryTick] = useState(0);

  // Live sensor tick animation
  useEffect(() => {
    const interval = setInterval(() => {
      setTelemetryTick((t) => (t + 1) % 100);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const activeProject =
    PROJECTS.find((p) => p.id === activeProjectId) ||
    PROJECTS[0];

  const activeIndex = PROJECTS.findIndex((p) => p.id === activeProject.id);

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % PROJECTS.length;
    setActiveProjectId(PROJECTS[nextIdx].id);
  };

  const handlePrev = () => {
    const prevIdx = (activeIndex - 1 + PROJECTS.length) % PROJECTS.length;
    setActiveProjectId(PROJECTS[prevIdx].id);
  };

  const runAtsSimulation = () => {
    setAtsScoreState('parsing');
    setTimeout(() => {
      setAtsScoreState('done');
    }, 850);
  };

  const getStatusBadge = (status: string) => {
    const s = status.toLowerCase();
    if (s.includes('shipped') || s.includes('live') || s.includes('delivered')) {
      return {
        pill: 'bg-emerald-500/10 text-emerald-800 border-emerald-500/30',
        dot: 'bg-emerald-500 animate-pulse',
      };
    }
    if (s.includes('development') || s.includes('ongoing')) {
      return {
        pill: 'bg-purple-500/10 text-purple-900 border-purple-500/30',
        dot: 'bg-purple-500 animate-ping',
      };
    }
    return {
      pill: 'bg-amber-500/10 text-amber-900 border-amber-500/30',
      dot: 'bg-amber-500',
    };
  };

  const getCategoryIcon = (cat: string) => {
    if (cat === 'Full Stack') return Globe;
    if (cat === 'AI & IoT') return Cpu;
    return Smartphone;
  };

  const CatIcon = getCategoryIcon(activeProject.category);
  const statusBadge = getStatusBadge(activeProject.status);

  return (
    <section id="work" className="px-4 sm:px-6 md:px-14 py-20 md:py-28 max-w-7xl mx-auto scroll-mt-12">
      {/* Studio Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 md:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-lilac/30 border border-lilac text-deep text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Project Studio
          </div>
          <Rise as="h2" className={H2}>Work &amp; Architecture</Rise>
          <p className="mt-2 text-base md:text-lg text-ink/75 max-w-2xl font-medium">
            Explore live software systems, sub-second algorithms, and IoT platforms through an interactive project studio.
          </p>
        </div>

        {/* Global Project Nav & Index Count */}
        <div className="flex items-center gap-3">
          <div className="bg-cream border border-ink/15 rounded-full px-4 py-2 text-xs font-mono font-bold text-ink/80 flex items-center gap-2 shadow-sm">
            <span className="text-deep font-extrabold">{String(activeIndex + 1).padStart(2, '0')}</span>
            <span className="text-ink/30">/</span>
            <span>{String(PROJECTS.length).padStart(2, '0')}</span>
            <span className="text-ink/40 hidden sm:inline">PROJECTS</span>
          </div>

          <div className="flex items-center gap-1 bg-cream border border-ink/15 rounded-full p-1 shadow-sm">
            <button
              onClick={handlePrev}
              aria-label="Previous project"
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink/70 hover:bg-ink hover:text-cream transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next project"
              className="w-8 h-8 rounded-full flex items-center justify-center text-ink/70 hover:bg-ink hover:text-cream transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 7 HIGHLIGHTED PROJECTS COMMAND DECK */}
      <div className="mb-10">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-deep bg-lilac/30 border border-lilac px-3 py-1 rounded-full flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5" />
              <span>7 Highlighted Projects</span>
            </span>
            <span className="text-xs font-semibold text-ink/65 hidden md:inline">
              Select any card to load its live simulation &amp; architecture specifications
            </span>
          </div>
          <span className="text-xs font-mono font-bold text-ink/50 self-start sm:self-auto">
            {activeIndex + 1} of {PROJECTS.length} Selected
          </span>
        </div>

        {/* 7 Project Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {PROJECTS.map((p, idx) => {
            const isSelected = p.id === activeProject.id;
            const badge = getStatusBadge(p.status);
            const Icon = getCategoryIcon(p.category);

            return (
              <button
                key={p.id}
                onClick={() => setActiveProjectId(p.id)}
                className={`group p-4 sm:p-5 rounded-2xl sm:rounded-3xl border-2 transition-all duration-300 text-left flex flex-col justify-between cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? 'bg-deep text-cream border-deep shadow-xl shadow-deep/30 ring-2 ring-deep scale-[1.02] -translate-y-1'
                    : 'bg-cream/95 hover:bg-ink/5 border-ink/15 text-ink hover:border-deep/40 hover:-translate-y-0.5 shadow-xs'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-0 right-0 w-28 h-28 bg-butter/15 rounded-full blur-2xl pointer-events-none" />
                )}

                <div>
                  {/* Card Top: Number & Category Pill */}
                  <div className="flex items-center justify-between gap-2 mb-2.5">
                    <span
                      className={`font-mono text-xs font-black px-2 py-0.5 rounded-md ${
                        isSelected ? 'bg-butter text-ink shadow-xs' : 'bg-ink/10 text-ink/70'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <span
                      className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 shrink-0 ${
                        isSelected ? 'bg-white/15 text-cream' : 'bg-ink/5 text-ink/70'
                      }`}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{p.category}</span>
                    </span>
                  </div>

                  {/* Project Title */}
                  <h4
                    className={`font-display font-extrabold text-sm sm:text-base leading-snug ${
                      isSelected ? 'text-cream' : 'text-ink group-hover:text-deep'
                    }`}
                  >
                    {p.name}
                  </h4>

                  {/* Concrete Metrics / Subtitle */}
                  {p.metrics && (
                    <div
                      className={`text-[10px] font-mono font-bold mt-1.5 truncate ${
                        isSelected ? 'text-butter' : 'text-deep'
                      }`}
                    >
                      {p.metrics.split('·')[0].trim()}
                    </div>
                  )}

                  {/* Short Blurb */}
                  <p
                    className={`text-[11px] mt-1.5 line-clamp-2 leading-relaxed ${
                      isSelected ? 'text-cream/80' : 'text-ink/65'
                    }`}
                  >
                    {p.blurb}
                  </p>
                </div>

                {/* Card Bottom: Status & Indicator */}
                <div
                  className={`mt-3.5 pt-2.5 border-t flex items-center justify-between text-[11px] font-semibold ${
                    isSelected
                      ? 'border-white/20 text-cream/90'
                      : 'border-ink/10 text-ink/70'
                  }`}
                >
                  <span className="flex items-center gap-1.5 truncate max-w-[130px]">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isSelected ? 'bg-butter animate-pulse' : badge.dot.split(' ')[0]
                      }`}
                    />
                    <span className="truncate">{p.status}</span>
                  </span>

                  <span
                    className={`text-[10px] font-bold flex items-center gap-0.5 transition-transform ${
                      isSelected ? 'text-butter' : 'text-deep group-hover:translate-x-0.5'
                    }`}
                  >
                    <span>{isSelected ? 'Loaded ↗' : 'Inspect →'}</span>
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* MAIN CINEMATIC SHOWCASE STAGE */}
      <div className="bg-gradient-to-br from-[#120F1F] via-[#18132A] to-[#0E0C17] text-cream rounded-2xl sm:rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden relative w-full max-w-full">
        {/* Ambient atmospheric glows */}
        <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-lilac/15 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-deep/30 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-12 gap-8 sm:gap-10 p-5 sm:p-8 md:p-14 items-center">
          {/* Left Column: Project Narrative & Deep Specifications */}
          <div className="lg:col-span-6 space-y-6">
            {/* Meta Tags Bar */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-cream text-xs font-bold uppercase tracking-wider">
                <CatIcon className="w-3.5 h-3.5 text-butter" />
                <span>{activeProject.category}</span>
              </span>

              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{activeProject.status}</span>
              </span>

              {activeProject.year && (
                <span className="text-xs font-mono font-bold text-cream/50 bg-white/5 px-2.5 py-1 rounded-md">
                  {activeProject.year}
                </span>
              )}
            </div>

            {/* Project Heading */}
            <h3 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-cream tracking-tight leading-[1.08]">
              {activeProject.name}
            </h3>

            {/* Concrete Metrics Callout Badge */}
            {activeProject.metrics && (
              <div className="p-3.5 rounded-2xl bg-white/10 border border-white/15 text-butter text-xs sm:text-sm font-bold flex items-center gap-2.5 shadow-sm">
                <Gauge className="w-4 h-4 shrink-0 text-butter" />
                <span>{activeProject.metrics}</span>
              </div>
            )}

            {/* Narrative Overview */}
            <p className="text-cream/85 text-base sm:text-lg leading-relaxed font-normal">
              {activeProject.blurb}
            </p>

            {/* Technical Feats Checklist */}
            {activeProject.highlights && activeProject.highlights.length > 0 && (
              <div className="space-y-2.5 pt-1">
                <span className="text-xs font-bold text-butter uppercase tracking-wider block mb-1">
                  Core Engineering Feats:
                </span>
                {activeProject.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-xs sm:text-sm text-cream/90">
                    <CheckCircle2 className="w-4 h-4 text-butter shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Technology Stack Pills */}
            <div className="pt-2">
              <span className="text-xs font-bold text-cream/60 uppercase tracking-wider block mb-2">
                Tech Stack &amp; Libraries:
              </span>
              <div className="flex flex-wrap gap-2">
                {activeProject.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-bold px-3 py-1.5 rounded-xl bg-white/10 border border-white/10 text-cream shadow-xs"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {activeProject.href && (
                <a
                  href={activeProject.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-lilac hover:bg-butter text-ink text-xs sm:text-sm font-bold rounded-full transition-all duration-200 shadow-xl hover:scale-102 active:scale-95 text-center"
                >
                  <Globe className="w-4 h-4" />
                  <span>Launch Live Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}

              {activeProject.github && (
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-white/10 hover:bg-white/20 text-cream border border-white/15 text-xs sm:text-sm font-bold rounded-full transition-all duration-200 hover:scale-102 text-center"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Inspect Code</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Live Interactive Device / Simulator Console */}
          <div className="lg:col-span-6">
            <div className="bg-[#090710]/95 border border-white/15 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-2xl">
              {/* Device Window Topbar */}
              <div className="bg-white/5 border-b border-white/10 px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between gap-1">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500/90" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-500/90" />
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-500/90" />
                </div>

                <div className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-md bg-black/40 border border-white/10 text-[10px] sm:text-[11px] font-mono text-cream/70 flex items-center gap-1.5 truncate max-w-[150px] sm:max-w-none">
                  <Shield className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">{activeProject.id}.local</span>
                </div>

                <div className="flex items-center gap-1 text-[10px] font-mono text-emerald-400 shrink-0">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>24ms</span>
                </div>
              </div>

              {/* Dynamic Interactive Simulator Content based on Project */}
              <div className="p-4 sm:p-6 font-mono text-xs space-y-4">
                {/* Simulator Section 1: Dynamic Telemetry Block */}
                {activeProject.id === 'zenxora' ? (
                  /* ZenXora Interactive ATS Simulator */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-cream/70 border-b border-white/5 pb-2">
                      <span className="text-butter font-bold flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        ATS RESUME ENGINE EVALUATOR
                      </span>
                      <button
                        onClick={runAtsSimulation}
                        className="px-2.5 py-1 rounded bg-lilac/30 hover:bg-lilac text-cream hover:text-ink text-[10px] font-bold transition-colors cursor-pointer flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Re-evaluate
                      </button>
                    </div>

                    <div className="bg-black/60 rounded-xl p-4 border border-white/10 space-y-2.5">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Candidate File:</span>
                        <span className="text-cream font-bold">Harish_Resume.pdf</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Job Spec:</span>
                        <span className="text-lilac font-bold">Full Stack Engineer</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Algorithm Latency:</span>
                        <span className="text-emerald-400 font-bold">&lt; 0.38 seconds</span>
                      </div>

                      <div className="pt-2">
                        <div className="flex justify-between text-[11px] mb-1">
                          <span className="text-cream/70">JD Match Ratio:</span>
                          <span className="text-butter font-extrabold text-sm">
                            {atsScoreState === 'parsing' ? 'Calculating...' : '96.4%'}
                          </span>
                        </div>
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r from-butter to-emerald-400 transition-all duration-700 ${
                              atsScoreState === 'parsing' ? 'w-[30%]' : 'w-[96%]'
                            }`}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center pt-1">
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="text-lg font-bold text-butter">95%+</div>
                        <div className="text-[10px] text-cream/50 uppercase">Parser Precision</div>
                      </div>
                      <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                        <div className="text-lg font-bold text-lilac">&lt; 0.4s</div>
                        <div className="text-[10px] text-cream/50 uppercase">Evaluation Time</div>
                      </div>
                    </div>
                  </div>
                ) : activeProject.id === 'factorymind-ai' ? (
                  /* FactoryMind AI Lathe Telemetry Simulator */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-cream/70 border-b border-white/5 pb-2">
                      <span className="text-amber-400 font-bold flex items-center gap-1.5">
                        <Radio className="w-3.5 h-3.5 text-amber-400" />
                        CNC LATHE ACCELEROMETER TELEMETRY
                      </span>
                      <span className="text-emerald-400 text-[10px]">FREQ: 2.4 kHz</span>
                    </div>

                    <div className="bg-black/60 rounded-xl p-4 border border-white/10 space-y-2">
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Vibration Amplitude:</span>
                        <span className="text-emerald-400 font-bold">0.038 mm/s (Normal)</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Bearing Temp:</span>
                        <span className="text-butter font-bold">42.8 °C</span>
                      </div>
                      <div className="flex justify-between text-[11px]">
                        <span className="text-cream/60">Spindle Degradation Risk:</span>
                        <span className="text-emerald-400 font-bold">&lt; 2.1% (Safe)</span>
                      </div>

                      {/* Animated Waveform Bars */}
                      <div className="pt-3 flex items-end gap-1 h-14 w-full">
                        {[20, 35, 60, 40, 80, 50, 30, 90, 45, 65, 30, 75, 40, 55, 70, 85, 35, 50].map(
                          (val, idx) => {
                            const dynamicVal = Math.min(100, (val + telemetryTick * 3) % 95 + 10);
                            return (
                              <div
                                key={idx}
                                className="flex-1 bg-gradient-to-t from-deep via-lilac to-amber-400 rounded-t-sm transition-all duration-300"
                                style={{ height: `${dynamicVal}%` }}
                              />
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* General High-Tech Architecture Simulator */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs text-cream/70 border-b border-white/5 pb-2">
                      <span className="text-lilac font-bold flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-lilac" />
                        SYSTEM ARCHITECTURE &amp; PIPELINE
                      </span>
                      <span className="text-emerald-400 text-[10px]">ACTIVE</span>
                    </div>

                    <div className="bg-black/60 rounded-xl p-4 border border-white/10 space-y-2 text-[11px] leading-relaxed">
                      <p className="text-butter">&gt; system.status: Operational</p>
                      <p className="text-cream/80">
                        &gt; architecture: {activeProject.architecture || 'Microservice Architecture'}
                      </p>
                      <p className="text-emerald-400">&gt; telemetry: {activeProject.metrics}</p>
                      <p className="text-cream/50">// Verified Production Readiness</p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-bold">
                      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                        <div className="text-butter font-bold text-xs">React UI</div>
                        <div className="text-cream/50">Component Tree</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                        <div className="text-lilac font-bold text-xs">REST APIs</div>
                        <div className="text-cream/50">Low Latency</div>
                      </div>
                      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                        <div className="text-emerald-400 font-bold text-xs">Data Layer</div>
                        <div className="text-cream/50">Secured &amp; Indexed</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Bottom Console Status Bar */}
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-cream/60">
                  <span className="flex items-center gap-1 text-emerald-400">
                    <Activity className="w-3 h-3" />
                    STATUS: ALL SYSTEMS NOMINAL
                  </span>
                  <span>BUILD ID: 2026-PROD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
