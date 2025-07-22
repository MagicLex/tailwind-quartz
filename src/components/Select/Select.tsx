import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
}

const baseStyles = 'block w-full px-3 py-2 pr-10 text-sm font-normal text-black border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed appearance-none';

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    label,
    error,
    hint,
    className,
    children,
    ...props 
  }, ref) => {
    const helpText = error || hint;
    
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 block text-sm font-medium text-gray-900">
            {label}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              baseStyles,
              'bg-white border-gray-light',
              error && 'border-red-500 focus:ring-red-500/60',
              className
            )}
            {...props}
          >
            {children}
          </select>
          
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <svg className="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        {helpText && (
          <p className={cn(
            'mt-1 text-sm',
            error ? 'text-red-600' : 'text-gray-500'
          )}>
            {helpText}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';