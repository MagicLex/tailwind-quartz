import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  variant?: 'primary' | 'white';
  intent?: 'default' | 'error';
  info?: string;
  optional?: boolean;
}

const variantStyles = {
  primary: 'bg-white border-gray-lighter',
  white: 'bg-gray-lightest border-gray-lighter',
};

const intentStyles = {
  default: 'focus:border-primary',
  error: 'border-label-red focus:border-label-red',
};

const baseStyles = 'block w-full px-3 py-2 pr-10 text-sm font-normal text-black border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed appearance-none';

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ 
    label,
    options,
    placeholder,
    variant = 'primary',
    intent = 'default',
    info,
    optional,
    className,
    ...props 
  }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="mb-1 flex items-center justify-between">
            <span className="text-sm font-bold text-black">{label}</span>
            {optional && <span className="text-sm font-normal text-gray">optional</span>}
          </label>
        )}
        
        <div className="relative">
          <select
            ref={ref}
            className={cn(
              baseStyles,
              variantStyles[variant],
              intentStyles[intent],
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          
          <Icon 
            name="chevronDown" 
            size="md" 
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray"
          />
        </div>
        
        {info && (
          <p className={cn(
            'mt-1 text-sm',
            intent === 'error' ? 'text-label-red' : 'text-gray'
          )}>
            {info}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';