import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
  uppercase?: boolean;
}

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ as: Component = 'h1', uppercase = false, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-xl font-bold text-black',
          uppercase && 'uppercase',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Title.displayName = 'Title';