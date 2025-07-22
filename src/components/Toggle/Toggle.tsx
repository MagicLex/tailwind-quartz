import * as React from 'react';
import { cn } from '../../utils/cn';

export interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLInputElement, ToggleProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only peer"
            {...props}
          />
          <div className={cn(
            'w-11 h-6 bg-gray-lighter rounded-sm border border-gray-light',
            'peer-checked:bg-primary peer-checked:border-primary',
            'peer-disabled:opacity-50 peer-disabled:cursor-not-allowed',
            'transition-all duration-200',
            className
          )} />
          <div className={cn(
            'absolute top-[2px] left-[2px] bg-white w-5 h-5 rounded-sm',
            'peer-checked:left-auto peer-checked:right-[2px]',
            'transition-all duration-200',
            'shadow-sm'
          )} />
        </div>
        {label && (
          <span className="ml-3 text-sm font-normal text-black">{label}</span>
        )}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';