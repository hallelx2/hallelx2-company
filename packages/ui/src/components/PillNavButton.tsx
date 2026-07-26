import React from 'react';

export interface PillNavButtonProps {
  children: React.ReactNode;
  active?: boolean;
  onLightSurface?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const PillNavButton: React.FC<PillNavButtonProps> = ({
  children,
  active = false,
  onLightSurface = false,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses = "inline-flex items-center px-4 py-2 rounded-[12px] font-mono text-[13px] tracking-[-0.26px] transition-colors cursor-pointer border";

  let variantClasses = '';
  if (active) {
    variantClasses = 'bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] border-[var(--color-bioluminescent-lime)]';
  } else if (onLightSurface) {
    variantClasses = 'bg-transparent text-[var(--color-graphite)] border-[var(--color-graphite)] hover:border-[var(--color-abyssal-ink)] hover:text-[var(--color-abyssal-ink)]';
  } else {
    variantClasses = 'bg-transparent text-[var(--color-lichen)] border-[var(--color-lichen)] hover:border-[var(--color-paper)] hover:text-[var(--color-paper)]';
  }

  const combinedClasses = `${baseClasses} ${variantClasses} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClasses}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {children}
    </button>
  );
};
