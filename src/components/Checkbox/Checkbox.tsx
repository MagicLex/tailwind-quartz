import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: React.ReactNode;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ children, error, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded-sm border border-gray-light accent-primary focus:ring-2 focus:ring-primary/60 focus:ring-offset-0',
            error && 'border-label-red',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {children && (
          <span className="ml-2 text-sm font-normal text-black">{children}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';