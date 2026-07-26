import React from 'react';

export interface OutlinedGhostButtonProps {
  children: React.ReactNode;
  onLightCanvas?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const OutlinedGhostButton: React.FC<OutlinedGhostButtonProps> = ({
  children,
  onLightCanvas = false,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-[8px] font-mono text-[14px] tracking-[-0.26px] cursor-pointer transition-colors border";
  const colorClasses = onLightCanvas
    ? "bg-transparent text-[var(--color-abyssal-ink)] border-[var(--color-graphite)] hover:bg-[var(--color-frost)]"
    : "bg-transparent text-[var(--color-paper)] border-[var(--color-graphite)] hover:border-[var(--color-lichen)]";

  const combinedClasses = `${baseClasses} ${colorClasses} ${className}`;

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
