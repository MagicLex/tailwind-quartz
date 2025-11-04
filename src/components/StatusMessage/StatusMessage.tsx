import * as React from 'react';
import { cn } from '../../utils/cn';

export type StatusVariant = 'success' | 'error' | 'warning' | 'info';

export interface StatusMessageProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: StatusVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const variantStyles: Record<StatusVariant, string> = {
  success: 'bg-green-50 border-green-200 text-green-800',
  error: 'bg-red-50 border-red-200 text-red-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  info: 'bg-blue-50 border-blue-200 text-blue-800',
};

const iconColorStyles: Record<StatusVariant, string> = {
  success: 'text-green-600',
  error: 'text-red-600',
  warning: 'text-yellow-600',
  info: 'text-blue-600',
};

export const StatusMessage: React.FC<StatusMessageProps> = ({
  variant = 'info',
  icon,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center gap-2 p-2 rounded border',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {icon && (
        <div className={cn('flex-shrink-0', iconColorStyles[variant])}>
          {icon}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
};
