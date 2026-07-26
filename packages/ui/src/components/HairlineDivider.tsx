import React from 'react';

export interface HairlineDividerProps {
  onLightCanvas?: boolean;
  className?: string;
}

export const HairlineDivider: React.FC<HairlineDividerProps> = ({
  onLightCanvas = false,
  className = '',
}) => {
  const bgClass = onLightCanvas ? 'bg-[var(--color-lichen)]' : 'bg-[var(--color-graphite)]';

  return <div className={`w-full h-[1px] ${bgClass} ${className}`} />;
};
