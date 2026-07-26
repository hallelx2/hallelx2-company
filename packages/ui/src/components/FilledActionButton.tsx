import React from 'react';

export interface FilledActionButtonProps {
  children: React.ReactNode;
  onLightCanvas?: boolean;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const FilledActionButton: React.FC<FilledActionButtonProps> = ({
  children,
  onLightCanvas = false,
  onClick,
  href,
  className = '',
}) => {
  const baseClasses = "inline-flex items-center justify-center px-4 py-2 rounded-[8px] font-mono text-[13px] uppercase tracking-[-0.26px] cursor-pointer transition-opacity hover:opacity-90";
  const colorClasses = onLightCanvas
    ? "bg-[var(--color-abyssal-ink)] text-[var(--color-paper)]"
    : "bg-[var(--color-paper)] text-[var(--color-abyssal-ink)]";

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
