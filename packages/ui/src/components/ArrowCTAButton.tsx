import React from 'react';

export interface ArrowCTAButtonProps {
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  className?: string;
}

export const ArrowCTAButton: React.FC<ArrowCTAButtonProps> = ({
  href,
  onClick,
  ariaLabel = 'Navigate',
  className = '',
}) => {
  const content = (
    <div
      className={`w-[40px] h-[40px] rounded-[8px] bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] flex items-center justify-center transition-transform duration-200 hover:scale-105 ${className}`}
      aria-label={ariaLabel}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7 17L17 7M17 7H7M17 7V17" />
      </svg>
    </div>
  );

  if (href) {
    return (
      <a href={href} aria-label={ariaLabel}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" aria-label={ariaLabel}>
      {content}
    </button>
  );
};
