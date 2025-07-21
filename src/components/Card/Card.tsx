import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'default' | 'readOnly';
  withShadow?: boolean;
}

const variantStyles = {
  default: 'bg-white border border-gray-lighter',
  readOnly: 'bg-gray-lightest border border-gray-lighter',
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    title, 
    actions, 
    variant = 'default',
    withShadow = false,
    children, 
    className,
    ...props 
  }, ref) => {
    const hasHeader = title || actions;

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-sm overflow-hidden',
          variantStyles[variant],
          withShadow && 'shadow-md',
          className
        )}
        {...props}
      >
        {hasHeader && (
          <div className="flex items-center justify-between border-b border-gray-lighter bg-gray-lightest px-5 py-4">
            {title && (
              <h3 className="text-lg font-bold text-black">{title}</h3>
            )}
            {actions && (
              <div className="flex items-center gap-2">{actions}</div>
            )}
          </div>
        )}
        
        <div className="p-5">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';