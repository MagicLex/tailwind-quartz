import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import type { IconName } from '../Icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';
type Size = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  intent?: Intent;
  size?: Size;
  icon?: IconName;
  iconPosition?: 'left' | 'right';
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  loadingOnly?: boolean;
  target?: string;
  as?: React.ElementType;
}

const intentStyles: Record<Intent, string> = {
  primary: 'bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark disabled:bg-gray-light disabled:border-gray-light disabled:text-white focus:outline-none focus:ring-2 focus:ring-primary/60',
  secondary: 'bg-white text-primary border border-primary hover:bg-primary-lightest disabled:bg-gray-lightest disabled:text-black disabled:border-gray-light focus:outline-none focus:ring-2 focus:ring-primary/60',
  ghost: 'bg-transparent text-primary border border-transparent hover:bg-primary-lightest active:border-primary disabled:bg-transparent disabled:text-gray disabled:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/60',
  inline: 'bg-transparent text-primary border-none underline p-0 hover:no-underline disabled:text-gray disabled:no-underline focus:outline-none',
  alert: 'bg-white text-error border border-error hover:bg-error-lightest disabled:bg-gray-lightest disabled:text-black disabled:border-gray-light focus:outline-none focus:ring-2 focus:ring-error/60',
};

const sizeStyles: Record<Size, string> = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-4 py-2 text-sm',
  lg: 'px-6 py-3 text-base',
};

const iconSizes: Record<Size, 'sm' | 'md' | 'lg'> = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
};

const spinnerSizes: Record<Size, number> = {
  sm: 12,
  md: 16,
  lg: 20,
};

const baseStyles = 'relative inline-flex items-center rounded-sm font-bold transition-all duration-200 cursor-pointer disabled:cursor-default';

export const Button: React.FC<ButtonProps> = ({
  children,
  intent = 'primary',
  size = 'md',
  icon,
  iconPosition = 'left',
  href,
  external = false,
  isLoading = false,
  loadingOnly = false,
  disabled = false,
  target,
  className,
  type = 'button',
  as: Component,
  ...props
}) => {
  const paddingWithIcon = {
    sm: iconPosition === 'left' ? 'pl-8' : 'pr-8',
    md: iconPosition === 'left' ? 'pl-10' : 'pr-10',
    lg: iconPosition === 'left' ? 'pl-12' : 'pr-12',
  };

  const iconElement = icon && (!loadingOnly || !isLoading) && (
    <Icon 
      name={icon} 
      size={iconSizes[size]} 
      className={cn(
        "absolute top-1/2 -translate-y-1/2",
        iconPosition === 'left' ? 'left-3' : 'right-3'
      )}
      color={intent === 'primary' ? 'white' : 'currentColor'}
    />
  );

  const buttonContent = (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(
        baseStyles, 
        sizeStyles[size],
        icon ? paddingWithIcon[size] : '',
        'justify-center',
        intent !== 'inline' ? intentStyles[intent] : intentStyles.inline,
        className
      )}
      {...props}
    >
      {iconElement}
      {(!loadingOnly || !isLoading) && children}
      {isLoading && (
        <Spinner 
          size={spinnerSizes[size]} 
          className={cn(
            loadingOnly ? 'relative' : 'ml-2',
            !loadingOnly && 'relative'
          )}
          color={intent === 'primary' ? 'white' : 'currentColor'}
        />
      )}
    </button>
  );

  if (href && !disabled) {
    if (external) {
      return (
        <a
          href={href}
          target={target}
          {...(target === '_blank' ? { rel: 'noopener noreferrer' } : {})}
          className="inline-block"
        >
          {buttonContent}
        </a>
      );
    }

    if (Component) {
      return (
        <Component href={href} className="inline-block">
          {buttonContent}
        </Component>
      );
    }
    
    return (
      <a href={href} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
};