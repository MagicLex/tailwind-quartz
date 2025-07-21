import * as React from 'react';
import { cn } from '../../utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  size = 20, 
  color = 'currentColor',
  className,
  style,
  ...props 
}) => {
  return (
    <div 
      className={cn('inline-block relative', className)}
      style={{ 
        width: size, 
        height: size,
        ...style 
      }}
      {...props}
    >
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          className="absolute block rounded-full border-3 animate-spinner"
          style={{
            width: size,
            height: size,
            borderColor: `${color} transparent transparent transparent`,
            animationDelay: `${-0.45 + index * 0.15}s`,
          }}
        />
      ))}
    </div>
  );
};