import React from 'react';
import { HairlineDivider } from './HairlineDivider';

export interface FooterProps {
  brandName?: string;
  tagline?: string;
  copyrightYear?: number;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = 'hallelx2',
  tagline = 'Architectural intelligence & precision biological computation.',
  copyrightYear = 2026,
  className = '',
}) => {
  return (
    <footer className={`w-full bg-[var(--color-void)] text-[var(--color-paper)] py-16 px-4 md:px-8 ${className}`}>
      <div className="max-w-[1200px] mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-[6px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] flex items-center justify-center">
                <span className="w-2 h-2 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
              </div>
              <span className="font-sans text-[24px] tracking-[-0.14px] text-[var(--color-paper)]">
                {brandName}
              </span>
            </div>
            <p className="font-sans text-[18px] text-[var(--color-graphite)] max-w-sm leading-[1.3] tracking-[-0.018px]">
              {tagline}
            </p>
          </div>

          <div className="space-y-3 font-mono text-[13px] tracking-[-0.26px]">
            <div className="text-[var(--color-lichen)] uppercase font-mono mb-2">Navigation</div>
            <div><a href="#overview" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Overview</a></div>
            <div><a href="#platform" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Platform</a></div>
            <div><a href="#research" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Research</a></div>
            <div><a href="#newsroom" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Newsroom</a></div>
          </div>

          <div className="space-y-3 font-mono text-[13px] tracking-[-0.26px]">
            <div className="text-[var(--color-lichen)] uppercase font-mono mb-2">Contact & Legal</div>
            <div><a href="mailto:info@hallelx2.com" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">info@hallelx2.com</a></div>
            <div><a href="#privacy" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Privacy Policy</a></div>
            <div><a href="#terms" className="text-[var(--color-graphite)] hover:text-[var(--color-paper)] transition-colors">Terms of Service</a></div>
          </div>
        </div>

        <HairlineDivider onLightCanvas={false} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[13px] text-[var(--color-graphite)] tracking-[-0.26px]">
          <div>© {copyrightYear} {brandName}. All rights reserved.</div>
          <div className="flex items-center gap-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
            <span>Instrumentation Status: Active</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
