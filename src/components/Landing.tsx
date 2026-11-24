import { useEffect, useRef, useState, useCallback } from 'react';
import { ArrowRight, Sparkles, Code2, Database, Cpu, GraduationCap } from 'lucide-react';

const RM = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface LandingProps {
  onEnter: (x: number, y: number) => void;
}

export default function Landing({ onEnter }: LandingProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  // Smooth 3D perspective mouse tilt with damping
  useEffect(() => {
    if (RM) return;

    let targetRx = 0;
    let targetRy = 0;
    let currentRx = 0;
    let currentRy = 0;
    let rafId = 0;
    let active = true;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xRatio = (e.clientX / innerWidth) * 2 - 1; // -1 to 1
      const yRatio = (e.clientY / innerHeight) * 2 - 1; // -1 to 1
      targetRy = xRatio * 7;
      targetRx = -yRatio * 7;
    };

    const loop = () => {
      if (!active) return;
      currentRx += (targetRx - currentRx) * 0.08;
      currentRy += (targetRy - currentRy) * 0.08;

      setTilt({
        rx: Math.round(currentRx * 100) / 100,
        ry: Math.round(currentRy * 100) / 100,
      });

      rafId = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(loop);

    return () => {
      active = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Keyboard shortcut to enter
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onEnter(window.innerWidth / 2, window.innerHeight / 2);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onEnter]);

  const handleEnterClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const r = e.currentTarget.getBoundingClientRect();
      onEnter(r.left + r.width / 2, r.top + r.height / 2);
    },
    [onEnter],
  );

  return (
    <main className="relative min-h-[100svh] py-8 sm:py-10 lg:py-0 overflow-y-auto overflow-x-hidden bg-[#0C0A15] text-cream selection:bg-lilac selection:text-ink flex items-center justify-center">
      {/* Ambient Gradient Auras */}
      <div
        aria-hidden="true"
        className="absolute w-[620px] h-[620px] rounded-full bg-deep/25 blur-[140px] -top-32 -left-32 pointer-events-none animate-aura"
      />
      <div
        aria-hidden="true"
        className="absolute w-[520px] h-[520px] rounded-full bg-lilac/20 blur-[130px] -bottom-24 -right-24 pointer-events-none animate-aura"
        style={{ animationDelay: '3s' }}
      />
      <div
        aria-hidden="true"
        className="absolute w-[420px] h-[420px] rounded-full bg-butter/10 blur-[120px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* Cyber Grid Pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* 3D Gyroscopic Orbital Rings */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none"
      >
        <div className="absolute w-[min(92vw,740px)] aspect-square rounded-full border border-lilac/20 animate-orbit-3d" />
        <div className="absolute w-[min(72vw,560px)] aspect-square rounded-full border border-butter/25 animate-orbit-3d-rev border-dashed" />
        <div className="absolute w-[min(48vw,380px)] aspect-square rounded-full border-2 border-deep/40 animate-orbit-3d" />
      </div>

      {/* Spatial 3D Center Container */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-5xl px-4 sm:px-6 md:px-14 flex flex-col items-center text-center transition-transform duration-75 ease-out"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Top Floating Tech Satellite Badges */}
        <div className="w-full hidden lg:flex justify-between items-center pointer-events-none mb-4 px-4">
          <div className="animate-float-slow pointer-events-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-butter/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-default">
            <div className="w-7 h-7 rounded-lg bg-deep/40 text-butter flex items-center justify-center">
              <Code2 className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-cream">React 18 · TypeScript</div>
              <div className="text-[9px] font-mono text-cream/50">Modern Client Architecture</div>
            </div>
          </div>

          <div className="animate-float-rev pointer-events-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-lilac/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-default">
            <div className="w-7 h-7 rounded-lg bg-lilac/20 text-lilac flex items-center justify-center">
              <Database className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-cream">Node · Express · Mongo</div>
              <div className="text-[9px] font-mono text-cream/50">Scalable REST Services</div>
            </div>
          </div>
        </div>

        {/* Live Status Pill */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.06] border border-white/15 text-cream text-xs font-mono font-bold tracking-wider backdrop-blur-md shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-cream/80 uppercase">FULL STACK DEVELOPER · SKCET AI &amp; DS</span>
          </div>
        </div>

        {/* Grand Hero Name: HARISH (No H, No dot) */}
        <div className="relative my-2 sm:my-3">
          <h1
            aria-hidden="true"
            className="absolute inset-0 font-display font-black leading-[0.9] text-[clamp(3.1rem,16vw,13rem)] tracking-tight select-none blur-2xl opacity-40 bg-gradient-to-r from-butter via-lilac to-white bg-clip-text text-transparent pointer-events-none"
          >
            HARISH
          </h1>

          <h1 className="relative font-display font-black leading-[0.9] text-[clamp(3.1rem,16vw,13rem)] tracking-tight select-none">
            <span className="bg-gradient-to-r from-butter via-lilac to-white bg-clip-text text-transparent drop-shadow-sm">
              HARISH
            </span>
          </h1>
        </div>

        {/* Glowing Divider Rail */}
        <div className="w-full max-w-md my-4 sm:my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-lilac/60 to-butter/80" />
          <div className="w-2 h-2 rounded-full bg-butter animate-ping" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-lilac/60 to-butter/80" />
        </div>

        {/* Hero Tagline */}
        <p className="max-w-xl text-base sm:text-lg md:text-xl text-cream/85 font-medium leading-relaxed px-2">
          Engineering scalable web systems, sub-second algorithms, and production architectures with{' '}
          <span className="text-butter font-bold underline decoration-butter/40 decoration-2 underline-offset-4">
            React, TypeScript &amp; Node.js
          </span>
          .
        </p>

        {/* Mobile Tech Badges Grid (Visible on mobile only) */}
        <div className="lg:hidden mt-5 w-full max-w-xs grid grid-cols-2 gap-2 text-left">
          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-deep/40 text-butter flex items-center justify-center shrink-0">
              <Code2 className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-cream truncate">React · TS</div>
              <div className="text-[9px] font-mono text-cream/50 truncate">Modern UI</div>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-lilac/20 text-lilac flex items-center justify-center shrink-0">
              <Database className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-cream truncate">Node · Mongo</div>
              <div className="text-[9px] font-mono text-cream/50 truncate">REST APIs</div>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0">
              <Cpu className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-cream truncate">ATS Engine</div>
              <div className="text-[9px] font-mono text-emerald-400 truncate">&lt;0.4s Eval</div>
            </div>
          </div>

          <div className="bg-white/[0.04] border border-white/10 rounded-xl p-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-butter/20 text-butter flex items-center justify-center shrink-0">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-cream truncate">SKCET AI&amp;DS</div>
              <div className="text-[9px] font-mono text-butter truncate">7.80 CGPA</div>
            </div>
          </div>
        </div>

        {/* Bottom Floating Badges (Desktop) */}
        <div className="w-full hidden lg:flex justify-between items-center pointer-events-none mt-4 px-8">
          <div className="animate-float-rev pointer-events-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-emerald-400/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-default">
            <div className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
              <Cpu className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-cream">Sub-second ATS Algorithms</div>
              <div className="text-[9px] font-mono text-emerald-400">&lt; 0.4s Evaluation</div>
            </div>
          </div>

          <div className="animate-float-slow pointer-events-auto bg-white/[0.04] backdrop-blur-xl border border-white/10 hover:border-butter/50 px-4 py-2.5 rounded-2xl flex items-center gap-2.5 shadow-2xl transition-all duration-300 hover:scale-105 cursor-default">
            <div className="w-7 h-7 rounded-lg bg-butter/20 text-butter flex items-center justify-center">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-cream">SKCET AI &amp; Data Science</div>
              <div className="text-[9px] font-mono text-butter">CGPA: 7.80 / 10</div>
            </div>
          </div>
        </div>

        {/* Grand Enter Portal CTA Button */}
        <div className="mt-7 sm:mt-10 flex flex-col items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleEnterClick}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3.5 px-8 py-4 sm:px-12 sm:py-5 rounded-full bg-gradient-to-r from-lilac via-butter to-cream text-ink font-display font-extrabold text-base sm:text-lg shadow-[0_0_40px_rgba(184,164,255,0.45)] hover:shadow-[0_0_60px_rgba(255,233,168,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer overflow-hidden min-h-[52px]"
            id="enter-site-btn"
            type="button"
            aria-label="Enter portfolio"
          >
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />

            <Sparkles className="w-5 h-5 text-deep group-hover:rotate-45 transition-transform duration-300" />
            <span className="tracking-tight">ENTER PORTFOLIO</span>
            <div className="w-7 h-7 rounded-full bg-ink/10 flex items-center justify-center group-hover:translate-x-1 transition-transform">
              <ArrowRight className="w-4 h-4 text-ink" />
            </div>
          </button>

          {/* Keyboard Cue Pill */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-cream/45 pt-1">
            <span>PRESS</span>
            <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-cream/70 font-bold">
              SPACE
            </kbd>
            <span>OR</span>
            <kbd className="px-2 py-0.5 rounded bg-white/10 border border-white/15 text-cream/70 font-bold">
              ENTER
            </kbd>
            <span>TO ENTER</span>
          </div>
        </div>
      </div>

      {/* Top Right Quick Skip Button */}
      <div
        className="absolute top-5 right-6 md:right-14 z-20"
        style={{ paddingTop: 'env(safe-area-inset-top,0px)' }}
      >
        <button
          onClick={() => onEnter(window.innerWidth / 2, window.innerHeight / 2)}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.06] hover:bg-white/[0.12] text-cream/60 hover:text-cream text-xs font-bold transition-all cursor-pointer border border-white/10 backdrop-blur-md"
          aria-label="Skip landing and view portfolio"
        >
          <span>Skip</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Bottom Corner Info */}
      <div
        className="absolute bottom-5 inset-x-6 md:inset-x-14 flex items-center justify-between text-xs text-cream/35 z-20 pointer-events-none"
        style={{ paddingBottom: 'env(safe-area-inset-bottom,0px)' }}
      >
        <span>© {new Date().getFullYear()} Harish</span>
        <span className="font-mono text-[10px] hidden sm:inline">COIMBATORE / KRISHNAGIRI, TN</span>
      </div>
    </main>
  );
}
