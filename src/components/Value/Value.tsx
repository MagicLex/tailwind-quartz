import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ValueProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: 'default' | 'primary';
}

export const Value = React.forwardRef<HTMLElement, ValueProps>(
  ({ as: Component = 'span', variant = 'default', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'font-mono text-base font-bold',
          variant === 'primary' ? 'text-primary' : 'text-black',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Value.displayName = 'Value';