import React from 'react';
import { ArrowCTAButton } from './ArrowCTAButton';
import { FilledActionButton } from './FilledActionButton';

export interface FooterProps {
  brandName?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = 'hallelx2',
  className = '',
}) => {
  return (
    <footer className={`relative w-full bg-[var(--color-void)] text-[var(--color-paper)] pt-24 pb-12 px-6 md:px-10 overflow-hidden border-t border-[var(--color-graphite)]/40 ${className}`}>
      {/* Subtle background laboratory telemetry texture */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-screen">
        <img
          src="/images/cell_microscopy.jpg"
          alt="Bio-computing footer darkroom backdrop"
          className="w-full h-full object-cover filter blur-[2px]"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto space-y-20">
        {/* Upper content row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Statement & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-sans text-[32px] md:text-[42px] leading-[1.1] tracking-[-0.006em] font-normal text-[var(--color-paper)] max-w-xl">
              Precision biological computation at laboratory scale.
            </h2>

            <div className="flex items-center gap-4">
              <FilledActionButton href="#contact" onLightCanvas={false}>
                WORK WITH US
              </FilledActionButton>
              <ArrowCTAButton href="#contact" ariaLabel="Contact hallelx2" />
            </div>
          </div>

          {/* Navigation Columns — Roboto Mono links per style guide */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 font-mono">
            <div className="space-y-4">
              <div className="font-mono text-[13px] text-[var(--color-graphite)] uppercase tracking-[-0.02em]">
                NAVIGATION
              </div>
              <ul className="space-y-3 font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.02em]">
                <li><a href="#platform" className="hover:text-[var(--color-paper)] transition-colors">PLATFORM</a></li>
                <li><a href="#company" className="hover:text-[var(--color-paper)] transition-colors">COMPANY</a></li>
                <li><a href="#newsroom" className="hover:text-[var(--color-paper)] transition-colors">NEWSROOM</a></li>
                <li><a href="/components" className="hover:text-[var(--color-paper)] transition-colors">SHADCN SUITE</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="font-mono text-[13px] text-[var(--color-graphite)] uppercase tracking-[-0.02em]">
                CONNECT
              </div>
              <ul className="space-y-3 font-mono text-[13px] text-[var(--color-lichen)] tracking-[-0.02em]">
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-paper)] transition-colors">LINKEDIN</a></li>
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-paper)] transition-colors">X / TWITTER</a></li>
                <li><a href="https://github.com/hallelx2" target="_blank" rel="noreferrer" className="hover:text-[var(--color-paper)] transition-colors">GITHUB</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Architectural Display Branding */}
        <div className="pt-12 border-t border-[var(--color-graphite)]/40 flex flex-col space-y-8">
          <div className="w-full text-left overflow-hidden">
            <span className="font-sans text-[clamp(60px,13vw,200px)] leading-[0.85] tracking-[-0.03em] font-normal text-[var(--color-paper)] select-none block">
              {brandName}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[13px] text-[var(--color-graphite)] uppercase tracking-[-0.02em]">
            <span>&copy; 2026 HALLELX2 LABS. ALL RIGHTS RESERVED.</span>
            <span>INSTRUMENTATION TELEMETRY // v2.4.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

