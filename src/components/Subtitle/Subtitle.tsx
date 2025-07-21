import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
}

export const Subtitle = React.forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ as: Component = 'h2', className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn('text-lg font-bold text-black', className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Subtitle.displayName = 'Subtitle';