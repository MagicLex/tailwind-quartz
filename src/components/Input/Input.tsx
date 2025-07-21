import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';

type InputVariant = 'primary' | 'white';
type InputIntent = 'default' | 'error';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'width'> {
  variant?: InputVariant;
  intent?: InputIntent;
  label?: string;
  info?: string;
  icon?: IconName;
  rightIcon?: React.ReactNode;
  suffix?: string;
  width?: string | number;
  type?: 'text' | 'number' | 'password' | 'email' | 'url' | 'tel';
  optional?: boolean;
}

const variantStyles: Record<InputVariant, string> = {
  primary: 'bg-white border-gray-lighter',
  white: 'bg-gray-lightest border-gray-lighter',
};

const intentStyles: Record<InputIntent, string> = {
  default: 'focus:border-primary',
  error: 'border-label-red focus:border-label-red',
};

const baseStyles = 'block w-full px-3 py-2 text-sm font-normal text-black border rounded-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 disabled:opacity-50 disabled:cursor-not-allowed';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ 
    variant = 'primary',
    intent = 'default',
    label,
    info,
    icon,
    rightIcon,
    suffix,
    width = 'auto',
    type = 'text',
    optional,
    className,
    style,
    disabled,
    readOnly,
    ...props 
  }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const inputType = type === 'password' && showPassword ? 'text' : type;

    return (
      <div style={{ width }} className="w-full">
        {label && (
          <label className="mb-1 flex items-center justify-between">
            <span className="text-sm font-bold text-black">{label}</span>
            {optional && <span className="text-sm font-normal text-gray">optional</span>}
          </label>
        )}
        
        <div className="relative">
          {icon && (
            <Icon 
              name={icon} 
              size="md" 
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray"
            />
          )}
          
          <input
            ref={ref}
            type={inputType}
            disabled={disabled}
            readOnly={readOnly}
            className={cn(
              baseStyles,
              variantStyles[variant],
              intentStyles[intent],
              icon && 'pl-10',
              (suffix || rightIcon || type === 'password') && 'pr-10',
              className
            )}
            style={style}
            {...props}
          />
          
          {suffix && (
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-gray">
              {suffix}
            </span>
          )}
          
          {type === 'password' && (
            <button
              type="button"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray hover:text-black"
              onMouseDown={() => setShowPassword(true)}
              onMouseUp={() => setShowPassword(false)}
              onMouseLeave={() => setShowPassword(false)}
            >
              <Icon name={showPassword ? 'eye' : 'eyeOff'} size="md" />
            </button>
          )}
          
          {rightIcon && type !== 'password' && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              {rightIcon}
            </div>
          )}
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

Input.displayName = 'Input';