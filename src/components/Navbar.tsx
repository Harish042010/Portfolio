import { useState, useEffect } from 'react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { GITHUB_URL, LINKEDIN_URL, EMAIL } from '../data';
import {
  Menu,
  X,
  Mail,
  FileText,
  User,
  Layers,
  Briefcase,
  GraduationCap,
  MessageSquare,
  Wrench,
  ArrowRight,
} from 'lucide-react';

interface NavbarProps {
  onOpenResume?: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const sections = ['about', 'work', 'experience', 'education', 'toolbox', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'about', label: 'About', icon: User },
    { id: 'work', label: 'Work', icon: Layers },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'toolbox', label: 'Toolbox', icon: Wrench },
    { id: 'contact', label: 'Contact', icon: MessageSquare },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ========================================================
          DESKTOP & TABLET: Floating Pill Bar (hidden on mobile/tablet portrait)
         ======================================================== */}
      <nav
        aria-label="Primary Desktop"
        className="fixed left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center justify-between gap-1.5 lg:gap-2.5 rounded-full bg-cream/90 backdrop-blur-xl border border-ink/15 px-3 py-1.5 lg:px-3.5 lg:py-2 shadow-xl transition-all duration-300 max-w-[calc(100vw-2rem)]"
        style={{ top: 'calc(1rem + env(safe-area-inset-top, 0px))' }}
      >
        <a
          href="#about"
          className="font-display px-2.5 py-1 text-ink hover:text-deep transition-colors tracking-tight font-black text-sm lg:text-base flex items-center gap-2 shrink-0"
          aria-label="Harish, top of page"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>HARISH</span>
        </a>

        <div className="h-4 w-px bg-ink/15 mx-0.5 shrink-0" />

        {/* Desktop Links */}
        <div className="flex items-center gap-0.5 lg:gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`px-2.5 py-1.5 lg:px-3.5 rounded-full text-xs lg:text-sm font-bold transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-ink text-cream shadow-sm scale-102'
                    : 'text-ink/80 hover:bg-ink/10 hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="h-4 w-px bg-ink/15 mx-0.5 shrink-0" />

        {/* Resume Button & Social Shortcut */}
        <div className="flex items-center gap-1.5 lg:gap-2 shrink-0">
          {onOpenResume && (
            <button
              id="navbar-resume-btn"
              onClick={onOpenResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-3.5 rounded-full bg-lilac/30 hover:bg-deep hover:text-cream text-deep text-xs font-bold transition-all cursor-pointer border border-lilac shadow-xs"
              title="Preview / Download Resume"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="flex items-center justify-center w-8 h-8 rounded-full text-ink hover:text-cream hover:bg-ink transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
        </div>
      </nav>

      {/* ========================================================
          MOBILE TOP BRAND BAR: Clean Minimal Header (< md)
         ======================================================== */}
      <header
        className="fixed top-0 inset-x-0 z-40 md:hidden flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-cream/85 backdrop-blur-lg border-b border-ink/10"
        style={{ paddingTop: 'calc(0.75rem + env(safe-area-inset-top, 0px))' }}
      >
        <a
          href="#about"
          className="font-display font-black text-sm sm:text-base text-ink flex items-center gap-2 tracking-tight"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>HARISH</span>
        </a>

        <div className="flex items-center gap-1.5 sm:gap-2">
          {onOpenResume && (
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-1 px-2.5 py-1 sm:px-3 rounded-full bg-lilac/30 text-deep border border-lilac text-xs font-bold active:scale-95 transition-transform"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          )}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-8 h-8 rounded-full bg-ink/10 text-ink flex items-center justify-center active:scale-90 transition-transform"
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </header>

      {/* ========================================================
          UNIQUE MOBILE BOTTOM THUMB DOCK (Visible on < md)
         ======================================================== */}
      <div
        className="fixed inset-x-2 sm:inset-x-3 z-40 md:hidden flex justify-center pointer-events-none"
        style={{ bottom: 'calc(0.6rem + env(safe-area-inset-bottom, 0px))' }}
      >
        <nav
          aria-label="Mobile Bottom Thumb Navigation"
          className="pointer-events-auto w-full max-w-md bg-[#120F1F]/92 backdrop-blur-2xl border border-white/20 rounded-full px-1.5 sm:px-2 py-1 sm:py-1.5 shadow-[0_12px_40px_rgba(0,0,0,0.5)] flex items-center justify-between gap-0.5 text-cream"
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;

            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`flex-1 py-1.5 px-0.5 sm:px-1 rounded-full flex flex-col items-center justify-center gap-0.5 transition-all duration-200 cursor-pointer min-w-0 ${
                  isActive
                    ? 'bg-deep text-cream shadow-md shadow-deep/40 font-bold scale-105'
                    : 'text-cream/55 hover:text-cream active:scale-95'
                }`}
                aria-label={`Go to ${link.label}`}
              >
                <Icon className={`w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0 ${isActive ? 'text-butter' : ''}`} />
                <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight leading-none truncate max-w-full">
                  {link.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* ========================================================
          MOBILE FULLSCREEN DRAWER MODAL (< md)
         ======================================================== */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/75 backdrop-blur-md flex flex-col justify-end md:hidden animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="bg-cream border-t-2 border-ink rounded-t-3xl p-6 shadow-2xl relative space-y-5"
            onClick={(e) => e.stopPropagation()}
            style={{ paddingBottom: 'calc(2rem + env(safe-area-inset-bottom, 0px))' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-ink/10 pb-4">
              <div>
                <span className="font-display font-black text-xl text-ink">HARISH</span>
                <span className="block text-xs text-ink/60 font-semibold">Full Stack Developer · SKCET</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-8 h-8 rounded-full bg-ink/10 flex items-center justify-center text-ink cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Nav Links */}
            <div className="grid gap-2">
              {navLinks.map((link) => {
                const Icon = link.icon;
                const isActive = activeSection === link.id;

                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`flex items-center justify-between px-5 py-3 rounded-2xl text-base font-bold transition-all text-left cursor-pointer ${
                      isActive
                        ? 'bg-deep text-cream shadow-md'
                        : 'bg-ink/5 text-ink hover:bg-ink/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4 text-deep" />
                      <span>{link.label}</span>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </button>
                );
              })}
            </div>

            {/* Resume CTA for mobile */}
            {onOpenResume && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3.5 px-5 rounded-2xl bg-lilac hover:bg-butter text-ink font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm active:scale-98"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Executive Resume</span>
              </button>
            )}

            {/* Mobile Social Actions */}
            <div className="pt-2 border-t border-ink/10">
              <span className="text-xs font-bold text-ink/50 uppercase tracking-wider block mb-2.5">
                Connect Directly
              </span>
              <div className="grid grid-cols-3 gap-2">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-ink/5 text-ink hover:bg-ink hover:text-cream transition-colors text-xs font-bold gap-1.5"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-ink/5 text-ink hover:bg-ink hover:text-cream transition-colors text-xs font-bold gap-1.5"
                >
                  <LinkedinIcon className="w-4 h-4" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-lilac/30 text-deep hover:bg-deep hover:text-cream transition-colors text-xs font-bold gap-1.5"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
