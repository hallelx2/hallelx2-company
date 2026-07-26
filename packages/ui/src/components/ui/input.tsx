import * as React from 'react';
import { cn } from '../../lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onLightCanvas?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type = 'text', onLightCanvas = false, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-11 w-full rounded-[8px] border bg-transparent px-3 py-2 text-[14px] font-mono tracking-[-0.26px] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[var(--color-graphite)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
          onLightCanvas
            ? 'border-[var(--color-graphite)] text-[var(--color-abyssal-ink)] focus-visible:border-[var(--color-abyssal-ink)]'
            : 'border-[var(--color-graphite)] text-[var(--color-paper)] focus-visible:border-[var(--color-bioluminescent-lime)]',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
