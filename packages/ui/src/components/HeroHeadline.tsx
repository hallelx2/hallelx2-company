import React from 'react';

export interface HeroHeadlineProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  children,
  className = '',
}) => {
  return (
    <h1
      className={`font-sans font-normal text-hero text-[var(--color-paper)] leading-[1.0] tracking-[-0.03em] select-text ${className}`}
    >
      {children}
    </h1>
  );
};

