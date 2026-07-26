import * as React from 'react';
import { cn } from '../../lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  onLightCanvas?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, onLightCanvas = false, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-[20px] p-8 border transition-colors',
        onLightCanvas
          ? 'bg-[var(--color-paper)] text-[var(--color-abyssal-ink)] border-[var(--color-lichen)]'
          : 'bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] border-[var(--color-graphite)]',
        className
      )}
      {...props}
    />
  )
);
Card.displayName = 'Card';

export const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-2 mb-6', className)} {...props} />
  )
);
CardHeader.displayName = 'CardHeader';

export const CardTitle = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        'text-heading-sm font-sans font-normal leading-[1.2] tracking-[-0.22px]',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

export const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-body font-sans text-[var(--color-graphite)] leading-[1.3] tracking-[-0.018px]', className)}
      {...props}
    />
  )
);
CardDescription.displayName = 'CardDescription';

export const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('space-y-4', className)} {...props} />
  )
);
CardContent.displayName = 'CardContent';

export const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('pt-6 mt-6 flex items-center justify-between border-t border-current/10', className)} {...props} />
  )
);
CardFooter.displayName = 'CardFooter';
