import React from 'react';

export interface PublicationTagProps {
  label: string;
  onLightCanvas?: boolean;
  className?: string;
}

export const PublicationTag: React.FC<PublicationTagProps> = ({
  label,
  onLightCanvas = false,
  className = '',
}) => {
  const textColor = onLightCanvas ? 'text-[var(--color-graphite)]' : 'text-[var(--color-lichen)]';

  return (
    <div className={`inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[-0.26px] ${textColor} ${className}`}>
      <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-bioluminescent-lime)] inline-block flex-shrink-0" />
      <span>{label}</span>
    </div>
  );
};
