import { useEffect, useRef, useState, ElementType } from 'react';

const RM = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

interface RiseProps {
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export default function Rise({ children, className = '', as: Component = 'div' }: RiseProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(RM);

  useEffect(() => {
    const o = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setOn(true);
          o.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden pb-2">
      <Component
        className={className}
        style={{
          transform: on ? 'none' : 'translateY(105%)',
          transition: 'transform .9s cubic-bezier(.2,.8,.2,1)',
        }}
      >
        {children}
      </Component>
    </div>
  );
}
