import * as React from 'react';
import { cn } from '../../utils/cn';

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  hover?: boolean;
}

export const Table: React.FC<TableProps> = ({ 
  striped = false,
  hover = false,
  className,
  children,
  ...props 
}) => {
  return (
    <div className="w-full overflow-x-auto">
      <table
        className={cn(
          'w-full text-sm text-left',
          className
        )}
        {...props}
      >
        {children}
      </table>
    </div>
  );
};

export interface TableHeaderProps extends React.HTMLAttributes<HTMLTableSectionElement> {}

export const TableHeader: React.FC<TableHeaderProps> = ({ className, ...props }) => (
  <thead className={cn('bg-gray-lightest border-b border-gray-lighter', className)} {...props} />
);

export interface TableBodyProps extends React.HTMLAttributes<HTMLTableSectionElement> {
  striped?: boolean;
  hover?: boolean;
}

export const TableBody: React.FC<TableBodyProps> = ({ 
  striped = false,
  hover = false,
  className, 
  ...props 
}) => (
  <tbody 
    className={cn(
      striped && '[&>tr:nth-child(even)]:bg-gray-lightest',
      hover && '[&>tr:hover]:bg-gray-lightest',
      className
    )} 
    {...props} 
  />
);

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {}

export const TableRow: React.FC<TableRowProps> = ({ className, ...props }) => (
  <tr className={cn('border-b border-gray-lighter', className)} {...props} />
);

export interface TableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {}

export const TableCell: React.FC<TableCellProps> = ({ className, ...props }) => (
  <td className={cn('px-4 py-3', className)} {...props} />
);

export interface TableHeadProps extends React.ThHTMLAttributes<HTMLTableCellElement> {}

export const TableHead: React.FC<TableHeadProps> = ({ className, ...props }) => (
  <th className={cn('px-4 py-3 font-bold text-black', className)} {...props} />
);