import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
  error?: boolean;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            'h-4 w-4 rounded-sm border border-gray-light text-primary focus:ring-2 focus:ring-primary/60 focus:ring-offset-0',
            error && 'border-label-red',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        />
        {label && (
          <span className="ml-2 text-sm font-normal text-black">{label}</span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';