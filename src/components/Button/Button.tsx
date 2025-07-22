import * as React from 'react';
import { cn } from '../../utils/cn';
import { Icon } from '../Icon';
import { Spinner } from '../Spinner';
import type { IconName } from '../Icon';

type Intent = 'primary' | 'secondary' | 'ghost' | 'inline' | 'alert';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  intent?: Intent;
  icon?: IconName;
  href?: string;
  external?: boolean;
  isLoading?: boolean;
  loadingOnly?: boolean;
  target?: string;
  as?: React.ElementType;
}

const intentStyles: Record<Intent, string> = {
  primary: 'bg-primary text-white border border-primary hover:bg-primary-dark hover:border-primary-dark disabled:bg-gray-light disabled:border-gray-light disabled:text-white focus:outline-none focus:ring-2 focus:ring-primary/60',
  secondary: 'bg-white text-primary border border-gray-light hover:bg-primary-lightest disabled:bg-gray-lightest disabled:text-black disabled:border-gray-light focus:outline-none focus:ring-2 focus:ring-primary/60',
  ghost: 'bg-transparent text-primary border border-transparent hover:bg-primary-lightest active:border-primary disabled:bg-transparent disabled:text-gray disabled:border-transparent focus:outline-none focus:ring-2 focus:ring-primary/60',
  inline: 'bg-transparent text-primary border-none underline p-0 hover:no-underline disabled:text-gray disabled:no-underline focus:outline-none',
  alert: 'bg-white text-error border border-gray-light hover:bg-error-lightest disabled:bg-gray-lightest disabled:text-black disabled:border-gray-light focus:outline-none focus:ring-2 focus:ring-error/60',
};

const baseStyles = 'inline-flex items-center justify-center px-4 py-2 rounded-sm font-bold text-sm transition-all duration-200 cursor-pointer disabled:cursor-default';

export const Button: React.FC<ButtonProps> = ({
  children,
  intent = 'primary',
  icon,
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
  const buttonContent = (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={cn(baseStyles, intentStyles[intent], className)}
      {...props}
    >
      {icon && (!loadingOnly || !isLoading) && (
        <Icon 
          name={icon} 
          size="md" 
          className="mr-2"
          color={intent === 'primary' ? 'white' : undefined}
        />
      )}
      {(!loadingOnly || !isLoading) && children}
      {isLoading && (
        <Spinner 
          size={16} 
          className={loadingOnly ? '' : 'ml-2'}
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