import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TextProps extends React.HTMLAttributes<HTMLParagraphElement> {
  as?: React.ElementType;
}

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(
  ({ as: Component = 'p', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-base font-normal text-black', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Text.displayName = 'Text';