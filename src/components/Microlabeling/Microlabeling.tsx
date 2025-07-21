import * as React from 'react';
import { cn } from '../../utils/cn';

export interface MicrolabelingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: React.ElementType;
  gray?: boolean;
}

export const Microlabeling = React.forwardRef<HTMLHeadingElement, MicrolabelingProps>(
  ({ as: Component = 'h6', gray = false, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-xs font-bold',
          gray ? 'text-gray' : 'text-black',
          className
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Microlabeling.displayName = 'Microlabeling';