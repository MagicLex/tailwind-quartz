import * as React from 'react';
import { cn } from '../../utils/cn';

export interface IconLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
  gap?: 2 | 4 | 8 | 12;
  children: React.ReactNode;
}

const gapStyles = {
  2: 'gap-0.5',
  4: 'gap-1',
  8: 'gap-2',
  12: 'gap-3',
};

export const IconLabel: React.FC<IconLabelProps> = ({
  icon,
  gap = 8,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center',
        gapStyles[gap],
        className
      )}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
};
