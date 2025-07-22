import * as React from 'react';
import { cn } from '../../utils/cn';

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  children?: React.ReactNode;
  error?: boolean;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ children, error, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <input
          ref={ref}
          type="radio"
          className={cn(
            'h-4 w-4 border border-gray-light text-primary focus:ring-2 focus:ring-primary/60 focus:ring-offset-0',
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

Radio.displayName = 'Radio';