import React from 'react';
import { PillNavButton } from './PillNavButton';
import { FilledActionButton } from './FilledActionButton';

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
    { label: 'Overview', href: '#overview', active: true },
    { label: 'Platform', href: '#platform' },
    { label: 'Research', href: '#research' },
    { label: 'Newsroom', href: '#newsroom' },
  ],
  ctaLabel = 'Work With Us',
  ctaHref = '#contact',
  onLightCanvas = false,
  className = '',
}) => {
  const brandTextColor = onLightCanvas ? 'text-[var(--color-abyssal-ink)]' : 'text-[var(--color-paper)]';

  return (
    <header className={`w-full py-6 px-4 md:px-8 bg-transparent ${className}`}>
      <div className="max-w-[1200px] mx-auto flex items-center justify-between gap-4">
        {/* Brand logo / mark */}
        <a href={brandHref} className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-[8px] bg-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] flex items-center justify-center">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-bioluminescent-lime)]"></span>
          </div>
          <span className={`font-sans text-[22px] tracking-[-0.13px] ${brandTextColor}`}>
            {brandName}
          </span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-2">
          {navItems.map((item) => (
            <PillNavButton
              key={item.label}
              href={item.href}
              active={item.active}
              onLightSurface={onLightCanvas}
            >
              {item.label}
            </PillNavButton>
          ))}
        </nav>

        {/* CTA */}
        <div>
          <FilledActionButton href={ctaHref} onLightCanvas={!onLightCanvas}>
            {ctaLabel}
          </FilledActionButton>
        </div>
      </div>
    </header>
  );
};
