import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'alert';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconName;
  intent?: Intent;
  size?: 'sm' | 'md' | 'lg';
}

const intentStyles: Record<Intent, string> = {
  primary: 'bg-primary text-white hover:bg-primary-light',
  secondary: 'bg-white text-primary border border-gray-lighter hover:bg-gray-lightest',
  ghost: 'bg-transparent text-primary hover:bg-gray-lightest',
  alert: 'bg-label-red text-white hover:bg-label-red/80',
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
  ({ icon, intent = 'ghost', size = 'md', className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-sm transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary/60',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          intentStyles[intent],
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