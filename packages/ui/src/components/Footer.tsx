import React from 'react';
import { ArrowCTAButton } from './ArrowCTAButton';
import { FilledActionButton } from './FilledActionButton';

export interface FooterProps {
  brandName?: string;
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({
  brandName = 'HallelX2 Labs',
  className = '',
}) => {
  return (
    <footer className={`relative w-full bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] pt-24 pb-12 px-4 md:px-8 overflow-hidden border-t border-[var(--color-graphite)]/30 ${className}`}>
      {/* Background organic backdrop image */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-screen">
        <img
          src="/images/cell_microscopy.jpg"
          alt="Bio-computing footer backdrop"
          className="w-full h-full object-cover filter blur-[1px]"
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto space-y-20">
        {/* Upper content row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Statement & CTA */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="font-sans text-[32px] md:text-[46px] leading-[1.1] tracking-[-0.02em] font-normal text-[var(--color-paper)] max-w-xl">
              We are engineering low-latency bio-computing, core retrieval engines, &amp; clinical operating systems.
            </h2>

            <div className="flex items-center gap-3">
              <FilledActionButton href="#contact" onLightCanvas={false}>
                WORK WITH US
              </FilledActionButton>
              <ArrowCTAButton href="#contact" ariaLabel="Contact HallelX2 Labs" />
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 font-sans">
            <div className="space-y-4">
              <div className="font-mono text-[12px] text-[var(--color-lichen)] uppercase tracking-[0.05em]">
                NAVIGATE
              </div>
              <ul className="space-y-3 text-[17px] text-[var(--color-paper)]">
                <li><a href="#overview" className="hover:underline">Overview</a></li>
                <li><a href="#stack" className="hover:underline">Architecture Stack</a></li>
                <li><a href="#axioms" className="hover:underline">Operating Axioms</a></li>
                <li><a href="/components" className="hover:underline">Shadcn Suite</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="font-mono text-[12px] text-[var(--color-lichen)] uppercase tracking-[0.05em]">
                CONNECT
              </div>
              <ul className="space-y-3 text-[17px] text-[var(--color-paper)]">
                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a></li>
                <li><a href="https://x.com" target="_blank" rel="noreferrer" className="hover:underline">X / Twitter</a></li>
                <li><a href="https://github.com/hallelx2" target="_blank" rel="noreferrer" className="hover:underline">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Giant Watermark Display Branding */}
        <div className="pt-12 border-t border-[var(--color-graphite)]/40 flex flex-col space-y-8">
          <div className="w-full text-center lg:text-left overflow-hidden">
            <span className="font-sans text-[clamp(60px,14vw,220px)] leading-[0.85] tracking-[-0.04em] font-normal text-[var(--color-paper)] select-none opacity-95 block">
              {brandName}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[12px] text-[var(--color-lichen)] uppercase tracking-[-0.02em]">
            <span>&copy; 2026 HALLELX2 LABS. ALL RIGHTS RESERVED.</span>
            <span>STATUS: ACTIVE OPERATIONAL FRAMEWORK // v2.2.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
