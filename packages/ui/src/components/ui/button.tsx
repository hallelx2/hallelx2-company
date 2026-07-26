import * as React from 'react';
import { cn } from '../../lib/utils';
import { ArrowUpRight } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'arrow' | 'pill' | 'outline' | 'danger';
  size?: 'default' | 'sm' | 'lg' | 'icon' | 'pill';
  active?: boolean;
  onLightCanvas?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'default', active = false, onLightCanvas = false, children, ...props }, ref) => {
    let variantStyles = '';

    switch (variant) {
      case 'primary':
        variantStyles = onLightCanvas
          ? 'bg-[var(--color-abyssal-ink)] text-[var(--color-paper)] hover:opacity-90'
          : 'bg-[var(--color-paper)] text-[var(--color-abyssal-ink)] hover:opacity-90';
        break;
      case 'ghost':
      case 'outline':
        variantStyles = onLightCanvas
          ? 'bg-transparent text-[var(--color-abyssal-ink)] border border-[var(--color-graphite)] hover:bg-[var(--color-frost)]'
          : 'bg-transparent text-[var(--color-paper)] border border-[var(--color-graphite)] hover:border-[var(--color-lichen)]';
        break;
      case 'pill':
        if (active) {
          variantStyles = 'bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] border border-[var(--color-bioluminescent-lime)]';
        } else if (onLightCanvas) {
          variantStyles = 'bg-transparent text-[var(--color-graphite)] border border-[var(--color-graphite)] hover:text-[var(--color-abyssal-ink)] hover:border-[var(--color-abyssal-ink)]';
        } else {
          variantStyles = 'bg-transparent text-[var(--color-lichen)] border border-[var(--color-lichen)] hover:text-[var(--color-paper)] hover:border-[var(--color-paper)]';
        }
        break;
      case 'arrow':
        return (
          <button
            ref={ref}
            className={cn(
              'w-[40px] h-[40px] min-w-[40px] rounded-[8px] bg-[var(--color-bioluminescent-lime)] text-[var(--color-abyssal-ink)] flex items-center justify-center cursor-pointer transition-transform hover:scale-105 disabled:opacity-50 disabled:pointer-events-none',
              className
            )}
            {...props}
          >
            <ArrowUpRight size={20} strokeWidth={2} />
          </button>
        );
      case 'danger':
        variantStyles = 'bg-red-950/80 text-red-200 border border-red-800 hover:bg-red-900';
        break;
    }

    let sizeStyles = '';
    switch (size) {
      case 'sm':
        sizeStyles = 'px-3 py-1.5 text-[12px]';
        break;
      case 'lg':
        sizeStyles = 'px-6 py-3 text-[15px]';
        break;
      case 'icon':
        sizeStyles = 'w-9 h-9 p-0 flex items-center justify-center';
        break;
      case 'pill':
        sizeStyles = 'px-4 py-2 rounded-[12px]';
        break;
      default:
        sizeStyles = 'px-4 py-2 text-[13px]';
    }

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-[8px] font-mono uppercase tracking-[-0.26px] cursor-pointer transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
          variantStyles,
          sizeStyles,
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
