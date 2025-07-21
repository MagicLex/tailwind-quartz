import * as React from 'react';
import { cn } from '../../utils/cn';

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
  gap?: string | number;
  direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
  align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  wrap?: boolean | 'reverse';
}

const directionClasses = {
  'row': 'flex-row',
  'column': 'flex-col',
  'row-reverse': 'flex-row-reverse',
  'column-reverse': 'flex-col-reverse',
};

const alignClasses = {
  'start': 'items-start',
  'center': 'items-center',
  'end': 'items-end',
  'stretch': 'items-stretch',
  'baseline': 'items-baseline',
};

const justifyClasses = {
  'start': 'justify-start',
  'center': 'justify-center',
  'end': 'justify-end',
  'between': 'justify-between',
  'around': 'justify-around',
  'evenly': 'justify-evenly',
};

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  ({ 
    as: Component = 'div', 
    className, 
    children, 
    gap,
    direction = 'row',
    align,
    justify,
    wrap,
    style,
    ...props 
  }, ref) => {
    const wrapClass = wrap === true ? 'flex-wrap' : wrap === 'reverse' ? 'flex-wrap-reverse' : '';
    
    return (
      <Component 
        ref={ref} 
        className={cn(
          'flex',
          directionClasses[direction],
          align && alignClasses[align],
          justify && justifyClasses[justify],
          wrapClass,
          className
        )}
        style={{
          gap: gap,
          ...style
        }}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Flex.displayName = 'Flex';