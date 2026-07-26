import React from 'react';

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderNavProps {
  brandName?: string;
  brandHref?: string;
  navItems?: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  onLightCanvas?: boolean;
  className?: string;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  brandName = 'hallelx2',
  brandHref = '/',
  navItems = [
    { label: 'PLATFORM', href: '#platform', active: false },
    { label: 'COMPANY', href: '#company', active: false },
    { label: 'NEWSROOM', href: '#newsroom', active: false },
  ],
  ctaLabel = 'WORK WITH US',
  ctaHref = '#contact',
  onLightCanvas = false,
  className = '',
}) => {
  const brandTextColor = onLightCanvas ? 'text-[var(--color-abyssal-ink)]' : 'text-[var(--color-paper)]';
  const navBorderColor = onLightCanvas ? 'border-[var(--color-graphite)] text-[var(--color-graphite)]' : 'border-[var(--color-lichen)] text-[var(--color-lichen)]';

  return (
    <header className={`w-full py-8 bg-transparent relative z-30 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 flex items-center justify-between gap-6">
        {/* Brand logo / mark */}
        <a href={brandHref} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-[8px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
          </div>
          <span className={`font-sans text-[22px] tracking-[-0.13px] ${brandTextColor}`}>
            {brandName}
          </span>
        </a>

        {/* Right Navigation Group */}
        <div className="flex items-center gap-3">
          <nav className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`font-mono text-[13px] tracking-[-0.02em] px-4 py-2 rounded-[12px] transition-all border ${
                  item.active
                    ? 'bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] border-[var(--color-bioluminescent-lime)]'
                    : navBorderColor
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Filled Action Button (WORK WITH US) */}
          <a
            href={ctaHref}
            className={`font-mono text-[13px] uppercase tracking-[-0.02em] px-4 py-2.5 rounded-[8px] transition-all ${
              onLightCanvas
                ? 'bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] hover:opacity-90'
                : 'bg-[var(--color-paper)] text-[var(--color-abyssal-ink)] hover:bg-[var(--color-bone-white)]'
            }`}
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
};
