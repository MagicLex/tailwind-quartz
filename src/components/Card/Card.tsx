import * as React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  actions?: React.ReactNode;
  variant?: 'default' | 'readOnly';
  withShadow?: boolean;
}

const variantStyles = {
  default: 'bg-white border border-gray-lighter',
  readOnly: 'bg-gray-lightest border border-gray-lighter',
};

type CardComponent = React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
  Header: typeof CardHeader;
  Body: typeof CardBody;
  Footer: typeof CardFooter;
};

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ 
    title, 
    actions, 
    variant = 'default',
    withShadow = false,
    children, 
    className,
    ...props 
  }, ref) => {
    const hasHeader = title || actions;

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-sm overflow-hidden',
          variantStyles[variant],
          withShadow ? 'shadow-md' : '',
          className
        )}
        {...props}
      >
        {hasHeader && (
          <div className="flex items-center justify-between border-b border-gray-lighter bg-white px-5 py-4">
            {title && (
              <h3 className="text-lg font-bold text-black">{title}</h3>
            )}
            {actions && (
              <div className="flex items-center gap-2">{actions}</div>
            )}
          </div>
        )}
        
        <div className="p-5">
          {children}
        </div>
      </div>
    );
  }
);

Card.displayName = 'Card';

// Card subcomponents
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border-b border-gray-lighter bg-white px-5 py-4',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardHeader.displayName = 'Card.Header';

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody = React.forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('p-5', className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardBody.displayName = 'Card.Body';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'border-t border-gray-lighter bg-gray-lightest px-5 py-3',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = 'Card.Footer';

// Attach subcomponents to Card
(Card as any).Header = CardHeader;
(Card as any).Body = CardBody;
(Card as any).Footer = CardFooter;