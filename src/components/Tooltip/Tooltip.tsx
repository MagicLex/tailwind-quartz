import * as React from 'react';
import { createPortal } from 'react-dom';
import { cn } from '../../utils/cn';

export interface TooltipProps {
  children: React.ReactElement;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}

export const Tooltip: React.FC<TooltipProps> = ({ 
  children, 
  content,
  placement = 'top',
  delay = 200
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const [position, setPosition] = React.useState({ top: 0, left: 0 });
  const triggerRef = React.useRef<HTMLElement>(null);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();

  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const calculatePosition = () => {
    if (!triggerRef.current) return;
    
    const rect = triggerRef.current.getBoundingClientRect();
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    
    switch (placement) {
      case 'top':
        setPosition({
          top: rect.top + scrollY - 8,
          left: rect.left + scrollX + rect.width / 2,
        });
        break;
      case 'bottom':
        setPosition({
          top: rect.bottom + scrollY + 8,
          left: rect.left + scrollX + rect.width / 2,
        });
        break;
      case 'left':
        setPosition({
          top: rect.top + scrollY + rect.height / 2,
          left: rect.left + scrollX - 8,
        });
        break;
      case 'right':
        setPosition({
          top: rect.top + scrollY + rect.height / 2,
          left: rect.right + scrollX + 8,
        });
        break;
    }
  };

  const handleMouseEnter = () => {
    calculatePosition();
    timeoutRef.current = setTimeout(() => setIsVisible(true), delay);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsVisible(false);
  };

  const tooltipClasses = cn(
    'absolute z-50 px-2 py-1 text-xs font-normal text-white bg-black rounded shadow-lg pointer-events-none whitespace-nowrap',
    placement === 'top' && '-translate-x-1/2 -translate-y-full',
    placement === 'bottom' && '-translate-x-1/2',
    placement === 'left' && '-translate-x-full -translate-y-1/2',
    placement === 'right' && '-translate-y-1/2'
  );

  return (
    <>
      {React.cloneElement(children, {
        ref: triggerRef,
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      {isVisible && createPortal(
        <div
          className={tooltipClasses}
          style={{ top: position.top, left: position.left }}
        >
          {content}
        </div>,
        document.body
      )}
    </>
  );
};