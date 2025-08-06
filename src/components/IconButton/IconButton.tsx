import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'alert';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  intent?: Intent;
  neutral?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const intentStyles: Record<Intent, string> = {
  primary: 'bg-primary text-white border border-primary hover:bg-primary-light',
  secondary: 'bg-white text-primary border border-primary hover:bg-gray-lightest',
  ghost: 'bg-transparent text-primary border border-transparent hover:bg-gray-lightest',
  alert: 'bg-label-red text-white border border-label-red hover:bg-label-red/80',
};

const neutralStyles: Record<Intent, string> = {
  primary: 'bg-black text-white border border-black hover:bg-gray-dark',
  secondary: 'bg-white text-black border border-black hover:bg-gray-lightest',
  ghost: 'bg-transparent text-black border border-transparent hover:bg-gray-lightest',
  alert: 'bg-label-red text-white border border-label-red hover:bg-label-red/80',
};

const sizeStyles = {
  sm: 'p-1',
  md: 'p-2',
  lg: 'p-3',
};

const iconSizes = {
  sm: 'sm' as const,
  md: 'md' as const,
  lg: 'lg' as const,
};

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, intent = 'ghost', neutral = false, size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-colors',
          'focus:outline-none focus:ring-2',
          neutral ? 'focus:ring-gray/60' : 'focus:ring-primary/60',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          neutral ? neutralStyles[intent] : intentStyles[intent],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        <Icon name={icon} size={iconSizes[size]} />
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';