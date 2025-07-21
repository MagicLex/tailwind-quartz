import * as React from 'react';
import { cn } from '../../utils/cn';

export interface LabelingProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  bold?: boolean;
  gray?: boolean;
}

export const Labeling = React.forwardRef<HTMLElement, LabelingProps>(
  ({ as: Component = 'span', bold = false, gray = false, className, children, ...props }, ref) => {
    return (
      <Component
        ref={ref}
        className={cn(
          'text-sm',
          bold ? 'font-bold' : 'font-normal',
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

Labeling.displayName = 'Labeling';