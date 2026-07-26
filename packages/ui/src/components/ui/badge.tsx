import * as React from 'react';
import { cn } from '../../lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'tag' | 'outline' | 'solid';
  onLightCanvas?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = 'tag', onLightCanvas = false, children, ...props }, ref) => {
    if (variant === 'tag') {
      return (
        <div
          ref={ref}
          className={cn(
            'inline-flex items-center gap-2 font-mono text-[13px] uppercase tracking-[-0.26px]',
            onLightCanvas ? 'text-[var(--color-graphite)]' : 'text-[var(--color-lichen)]',
            className
          )}
          {...props}
        >
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--color-bioluminescent-lime)] inline-block flex-shrink-0" />
          <span>{children}</span>
        </div>
      );
    }

    let variantStyles = '';
    if (variant === 'solid') {
      variantStyles = 'bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)]';
    } else {
      variantStyles = onLightCanvas
        ? 'border border-[var(--color-graphite)] text-[var(--color-graphite)]'
        : 'border border-[var(--color-lichen)] text-[var(--color-lichen)]';
    }

    return (
      <div
        ref={ref}
        className={cn(
          'inline-flex items-center px-2.5 py-0.5 rounded-[9999px] font-mono text-[12px] uppercase tracking-[-0.26px]',
          variantStyles,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Badge.displayName = 'Badge';
