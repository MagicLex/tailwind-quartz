import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import { iconNames } from './icons';

const meta = {
  title: 'Display/Icon',
  component: Icon,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'check',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="check" size="small" />
      <Icon name="check" size="medium" />
      <Icon name="check" size="large" />
      <Icon name="check" className="h-12 w-12" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="check" />
      <Icon name="check" className="text-primary" />
      <Icon name="check" className="text-secondary" />
      <Icon name="check" className="text-success" />
      <Icon name="check" className="text-error" />
      <Icon name="check" className="text-warning" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => (
    <div className="grid grid-cols-6 gap-4">
      {iconNames.map((name) => (
        <div key={name} className="flex flex-col items-center p-4 border border-gray-lighter rounded-sm">
          <Icon name={name} size="medium" />
          <span className="mt-2 text-xs text-gray-500">{name}</span>
        </div>
      ))}
    </div>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="flex items-center gap-2">
        <Icon name="check" className="text-success" size="small" />
        <span>Success message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="x" className="text-error" size="small" />
        <span>Error message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="alert-triangle" className="text-warning" size="small" />
        <span>Warning message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="info" className="text-primary" size="small" />
        <span>Info message</span>
      </p>
    </div>
  ),
};