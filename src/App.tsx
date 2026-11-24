import { useState, useEffect } from 'react';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import SocialDock from './components/SocialDock';
import About from './components/About';
import Gallery from './components/Gallery';
import Experience from './components/Experience';
import Toolbox from './components/Toolbox';
import Education from './components/Education';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

import NotFound from './components/NotFound';

const RM = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface WipeState {
  x: number;
  y: number;
  go: boolean;
  fade: boolean;
}

export default function App() {
  const [is404, setIs404] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const p = window.location.pathname;
      const base = import.meta.env.BASE_URL || '/';
      const cleanPath = p.replace(base, '/').replace(/\/+/g, '/');
      return cleanPath !== '/' && cleanPath !== '/index.html' && cleanPath !== '';
    }
    return false;
  });

  const [entered, setEntered] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return Boolean(window.location.hash);
    }
    return false;
  });

  const [wipe, setWipe] = useState<WipeState | null>(null);
  const [resumeOpen, setResumeOpen] = useState<boolean>(false);

  const handleEnter = (x: number, y: number) => {
    if (RM) {
      setEntered(true);
      window.scrollTo(0, 0);
      return;
    }

    setWipe({ x, y, go: false, fade: false });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setWipe((w) => (w ? { ...w, go: true } : null));
      });
    });

    setTimeout(() => {
      setEntered(true);
      window.scrollTo(0, 0);
    }, 950);

    setTimeout(() => {
      setWipe((w) => (w ? { ...w, fade: true } : null));
    }, 1000);

    setTimeout(() => {
      setWipe(null);
    }, 1600);
  };

  const handleReplay = () => {
    setEntered(false);
    window.scrollTo(0, 0);
    window.history.replaceState(null, '', window.location.pathname);
  };

  useEffect(() => {
    document.body.style.background = entered ? '#FBF7EF' : '#14111F';
  }, [entered]);

  if (is404) {
    return (
      <NotFound
        onGoHome={() => {
          window.history.pushState(null, '', '/');
          setIs404(false);
          setEntered(true);
        }}
      />
    );
  }

  return (
    <>
      {/* Top Scroll Reading Progress */}
      {entered && <ScrollProgress />}

      {/* Initial Interactive Spotlight Landing */}
      {!entered && <Landing onEnter={handleEnter} />}

      {/* Smooth Expanding Circular Wipe Transition */}
      {wipe && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-[100] bg-cream pointer-events-none"
          style={{
            clipPath: `circle(${wipe.go ? '150vmax' : '0px'} at ${wipe.x}px ${wipe.y}px)`,
            transition: 'clip-path 0.95s cubic-bezier(0.7, 0, 0.2, 1), opacity 0.6s',
            opacity: wipe.fade ? 0 : 1,
          }}
        />
      )}

      {/* Main Portfolio Sections */}
      {entered && (
        <div className="bg-cream text-ink min-h-screen relative selection:bg-lilac selection:text-ink w-full max-w-full overflow-x-hidden">
          {/* Floating Left Center Social Dock */}
          <SocialDock onOpenResume={() => setResumeOpen(true)} />

          {/* Top Pill Navigation */}
          <Navbar onOpenResume={() => setResumeOpen(true)} />

          <main>
            <About onOpenResume={() => setResumeOpen(true)} />
            <Gallery />
            <Experience />
            <Education />
            <Toolbox />
          </main>

          <Contact onReplay={handleReplay} />

          {/* Back to Top Floating Button with Scroll Ring */}
          <BackToTop />

          {/* Executive Resume Modal */}
          <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
        </div>
      )}
    </>
  );
}
