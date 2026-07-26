import * as React from 'react';
import { cn } from '../../lib/utils';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onLightCanvas?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, onLightCanvas = false, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[100px] w-full rounded-[8px] border bg-transparent px-3 py-2 text-[14px] font-mono tracking-[-0.26px] transition-colors placeholder:text-[var(--color-graphite)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
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
Textarea.displayName = 'Textarea';
