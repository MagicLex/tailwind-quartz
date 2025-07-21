import * as React from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: 'sm' | 'md';
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-lighter text-black',
  primary: 'bg-primary-lighter text-primary',
  success: 'bg-label-green/10 text-label-green',
  warning: 'bg-label-yellow/10 text-label-orange',
  error: 'bg-label-red/10 text-label-red',
  info: 'bg-label-blue/10 text-label-blue',
};

const sizeStyles = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-2.5 py-1 text-sm',
};

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default',
  size = 'md',
  className,
  children,
  ...props 
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center font-bold rounded-sm',
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};