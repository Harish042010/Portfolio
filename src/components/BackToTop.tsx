import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollPercent(Math.round(scrolled));
      setVisible(scrollTop > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      className="fixed bottom-20 right-3.5 sm:right-5 md:bottom-6 md:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-cream/90 backdrop-blur-md border border-ink/20 shadow-xl text-ink hover:bg-deep hover:text-cream hover:border-deep transition-all duration-300 flex items-center justify-center cursor-pointer group hover:scale-110 active:scale-95"
    >
      {/* Circular progress SVG */}
      <svg className="w-12 h-12 -rotate-90 absolute inset-0 pointer-events-none" viewBox="0 0 48 48">
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-ink/10"
          strokeWidth="2.5"
          fill="none"
        />
        <circle
          cx="24"
          cy="24"
          r="20"
          className="stroke-deep transition-all duration-100"
          strokeWidth="2.5"
          fill="none"
          strokeDasharray={125.6}
          strokeDashoffset={125.6 - (125.6 * scrollPercent) / 100}
        />
      </svg>
      <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
