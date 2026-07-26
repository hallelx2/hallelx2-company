import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export interface ArrowCTAButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
  ariaLabel?: string;
}

export const ArrowCTAButton: React.FC<ArrowCTAButtonProps> = ({
  onClick,
  href,
  className = '',
  ariaLabel = 'Navigate',
}) => {
  const baseClasses = "w-[40px] h-[40px] min-w-[40px] rounded-[8px] bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105";

  const combinedClasses = `${baseClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses} aria-label={ariaLabel}>
        <ArrowUpRight size={20} strokeWidth={2} />
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} aria-label={ariaLabel}>
      <ArrowUpRight size={20} strokeWidth={2} />
    </button>
  );
};
