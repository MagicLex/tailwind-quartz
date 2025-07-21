import * as React from 'react';
import { cn } from '../../utils/cn';

export interface DropdownProps {
  trigger: React.ReactElement;
  children: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end';
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ 
  trigger, 
  children,
  placement = 'bottom-start',
  className
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const placementClasses = {
    'bottom-start': 'top-full left-0 mt-1',
    'bottom-end': 'top-full right-0 mt-1',
  };

  return (
    <div ref={dropdownRef} className="relative inline-block">
      {React.cloneElement(trigger, {
        onClick: () => setIsOpen(!isOpen),
      })}
      
      {isOpen && (
        <div
          className={cn(
            'absolute z-40 min-w-[180px] bg-white border border-gray-lighter rounded-sm shadow-lg',
            placementClasses[placement],
            className
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export interface DropdownItemProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({ 
  icon,
  children,
  className,
  ...props 
}) => {
  return (
    <div
      className={cn(
        'flex items-center px-4 py-2 text-sm text-black hover:bg-gray-lightest cursor-pointer',
        className
      )}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </div>
  );
};

export const DropdownDivider: React.FC = () => (
  <div className="my-1 border-t border-gray-lighter" />
);