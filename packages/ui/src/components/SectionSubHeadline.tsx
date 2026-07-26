import React from 'react';

export interface SectionSubHeadlineProps {
  children: React.ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
}

export const SectionSubHeadline: React.FC<SectionSubHeadlineProps> = ({
  children,
  variant = 'dark',
  className = '',
}) => {
  const colorClass = variant === 'dark' ? 'text-[var(--color-graphite)]' : 'text-[var(--color-abyssal-ink)]';

  return (
    <h2
      className={`text-heading-sm font-sans font-normal leading-[1.2] tracking-[-0.22px] ${colorClass} ${className}`}
    >
      {children}
    </h2>
  );
};
