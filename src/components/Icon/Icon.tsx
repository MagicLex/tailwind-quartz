import * as React from 'react';
import { cn } from '../../utils/cn';
import { icons, IconName } from './icons';

export type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const sizeClasses: Record<IconSize, string> = {
  xxs: 'w-2 h-2',   // 8px
  xs: 'w-3 h-3',    // 12px
  sm: 'w-4 h-4',    // 16px
  md: 'w-5 h-5',    // 20px
  lg: 'w-6 h-6',    // 24px
  xl: 'w-9 h-9',    // 36px
};

export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: IconName;
  size?: IconSize;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'lg', 
  color,
  className,
  ...props 
}) => {
  const IconComponent = icons[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }

  return (
    <span 
      className={cn('inline-flex items-center justify-center', className)}
      style={{ color }}
      {...props}
    >
      {IconComponent(sizeClasses[size])}
    </span>
  );
};

// For backward compatibility with old API
export const GetIcon = Icon;