import * as React from 'react';
import { cn } from '../../utils/cn';
import * as OutlineIcons from '@heroicons/react/24/outline';
import * as SolidIcons from '@heroicons/react/24/solid';

export type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type IconVariant = 'outline' | 'solid';

const sizeClasses: Record<IconSize, string> = {
  xxs: 'w-2 h-2',   // 8px
  xs: 'w-3 h-3',    // 12px
  sm: 'w-4 h-4',    // 16px
  md: 'w-5 h-5',    // 20px
  lg: 'w-6 h-6',    // 24px
  xl: 'w-9 h-9',    // 36px
};

// Create icon maps
const outlineIconMap = OutlineIcons as Record<string, React.ComponentType<any>>;
const solidIconMap = SolidIcons as Record<string, React.ComponentType<any>>;

// Get all available icon names (from outline icons as reference)
export type IconName = keyof typeof OutlineIcons;

export interface IconProps extends React.HTMLAttributes<SVGElement> {
  name: IconName;
  size?: IconSize;
  variant?: IconVariant;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 'lg',
  variant = 'outline',
  className,
  ...props 
}) => {
  const iconMap = variant === 'solid' ? solidIconMap : outlineIconMap;
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found in @heroicons/react`);
    return null;
  }

  return (
    <IconComponent
      className={cn(sizeClasses[size], className)}
      aria-hidden="true"
      {...props}
    />
  );
};

// For backward compatibility with old API
export const GetIcon = Icon;