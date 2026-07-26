import React from 'react';

export interface HeroHeadlineProps {
  children: React.ReactNode;
  className?: string;
  terminateWithPeriod?: boolean;
}

export const HeroHeadline: React.FC<HeroHeadlineProps> = ({
  children,
  className = '',
  terminateWithPeriod = true,
}) => {
  const textContent = typeof children === 'string' && terminateWithPeriod && !children.endsWith('.')
    ? `${children}.`
    : children;

  return (
    <h1
      className={`text-hero text-[var(--color-paper)] font-sans font-normal text-left tracking-[-4.74px] leading-[1.0] ${className}`}
    >
      {textContent}
    </h1>
  );
};
