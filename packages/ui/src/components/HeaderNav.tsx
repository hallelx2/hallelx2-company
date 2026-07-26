import React from 'react';

export interface HeaderNavProps {
  brandName?: string;
  brandHref?: string;
  className?: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  brandName = 'HallelX2',
  brandHref = '/',
  className = '',
}) => {
  return (
    <header className={`w-full pt-6 pb-4 px-6 md:px-12 bg-transparent relative z-30 flex items-center justify-between gap-6 ${className}`}>
      {/* HallelX2 Brand Logo Icon & Mark */}
      <a href={brandHref} className="flex items-center gap-3 group">
        <div className="w-9 h-9 rounded-full bg-[#0d1b2a] border border-[#415a77]/50 flex items-center justify-center shadow-sm">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#60a5fa" fillOpacity="0.2" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round"/>
            <circle cx="12" cy="12" r="3" fill="#93c5fd"/>
          </svg>
        </div>
        <span className="font-sans text-[26px] font-normal tracking-[-0.04em] text-white">
          {brandName}
        </span>
      </a>

      {/* IntegratedBio Floating Nav Pill Header Group */}
      <div className="flex items-center gap-1 bg-white/90 backdrop-blur-md p-1.5 rounded-full border border-white/20">
        <div className="flex items-center px-4 gap-6 font-mono text-[11px] text-[#0f172a] tracking-[0.03em] font-normal uppercase">
          <a href="#stack" className="hover:opacity-75 transition-opacity">PLATFORM</a>
          <a href="#axioms" className="hover:opacity-75 transition-opacity">COMPANY</a>
          <a href="/components" className="hover:opacity-75 transition-opacity">NEWSROOM</a>
        </div>

        <a
          href="#contact"
          className="bg-[#0f172a] hover:bg-[#1e293b] text-white font-mono text-[11px] uppercase tracking-[0.03em] px-5 py-2.5 rounded-full transition-all"
        >
          WORK WITH US
        </a>
      </div>
    </header>
  );
};
