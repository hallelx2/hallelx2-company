import * as React from 'react';
import { cn } from '../../lib/utils';

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-[8px] bg-[var(--color-graphite)]/30 border border-[var(--color-graphite)]/20', className)}
      {...props}
    />
  );
}
