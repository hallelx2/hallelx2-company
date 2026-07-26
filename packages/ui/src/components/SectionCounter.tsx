import React from 'react';

export interface SectionCounterProps {
  current: number | string;
  total?: number | string;
  className?: string;
}

export const SectionCounter: React.FC<SectionCounterProps> = ({
  current,
  total,
  className = '',
}) => {
  const currentFormatted = typeof current === 'number' ? String(current).padStart(2, '0') : current;
  const totalFormatted = total ? (typeof total === 'number' ? String(total).padStart(2, '0') : total) : null;
  const label = totalFormatted ? `${currentFormatted} / ${totalFormatted}` : currentFormatted;

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-[9999px] border border-[var(--color-graphite)] text-[var(--color-graphite)] font-mono text-[13px] tracking-[-0.26px] ${className}`}
    >
      {label}
    </div>
  );
};
