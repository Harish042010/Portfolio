import { useState } from 'react';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, InstagramIcon } from './BrandIcons';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL } from '../data';

interface SocialDockProps {
  onOpenResume?: () => void;
}

export default function SocialDock({}: SocialDockProps) {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const socialLinks = [
    {
      name: 'GitHub',
      href: GITHUB_URL,
      icon: GithubIcon,
      isExternal: true,
    },
    {
      name: 'LinkedIn',
      href: LINKEDIN_URL,
      icon: LinkedinIcon,
      isExternal: true,
    },
    {
      name: 'Instagram',
      href: INSTAGRAM_URL,
      icon: InstagramIcon,
      isExternal: true,
    },
    {
      name: 'Email',
      href: `mailto:${EMAIL}`,
      icon: Mail,
      isExternal: false,
    },
  ];

  return (
    <aside
      aria-label="Social Profiles"
      className="fixed left-3 lg:left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center pointer-events-auto"
    >
      {/* Top subtle decorative dash */}
      <div className="w-0.5 h-6 bg-gradient-to-b from-transparent to-ink/20 rounded-full mb-2" />

      {/* Floating Glassmorphic Social Dock - Only Social Icons */}
      <div className="bg-cream/90 backdrop-blur-xl border border-ink/15 shadow-2xl rounded-full p-1.5 flex flex-col items-center gap-2 transition-all duration-300 hover:border-deep/30 hover:shadow-deep/15">
        {socialLinks.map((item, idx) => {
          const Icon = item.icon;
          const isHovered = hoveredIdx === idx;

          return (
            <div
              key={item.name}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <a
                href={item.href}
                target={item.isExternal ? '_blank' : undefined}
                rel={item.isExternal ? 'noopener noreferrer' : undefined}
                aria-label={item.name}
                className="w-10 h-10 rounded-full flex items-center justify-center text-ink/80 hover:text-cream hover:bg-ink transition-all duration-200 transform hover:scale-110 active:scale-95 group focus:outline-none focus:ring-2 focus:ring-deep/50"
              >
                <Icon className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
              </a>

              {/* Tooltip on the right */}
              <div
                className={`absolute left-14 px-3 py-1 bg-ink text-cream text-xs font-bold rounded-lg shadow-xl whitespace-nowrap pointer-events-none transition-all duration-200 flex items-center gap-1.5 ${
                  isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`}
              >
                <span>{item.name}</span>
                {item.isExternal && <span className="text-[10px] text-butter">↗</span>}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-ink rotate-45" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom subtle decorative dash */}
      <div className="w-0.5 h-6 bg-gradient-to-t from-transparent to-ink/20 rounded-full mt-2" />
    </aside>
  );
}
