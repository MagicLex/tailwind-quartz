import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';
import { Icon } from '../Icon';

const meta = {
  title: 'Interactive/IconButton',
  component: IconButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <Icon name="x" />,
    'aria-label': 'Close',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<Icon name="x" />} size="small" aria-label="Small close" />
      <IconButton icon={<Icon name="x" />} size="medium" aria-label="Medium close" />
      <IconButton icon={<Icon name="x" />} size="large" aria-label="Large close" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<Icon name="plus" />} variant="primary" aria-label="Add" />
      <IconButton icon={<Icon name="edit" />} variant="secondary" aria-label="Edit" />
      <IconButton icon={<Icon name="trash" />} variant="danger" aria-label="Delete" />
      <IconButton icon={<Icon name="settings" />} variant="ghost" aria-label="Settings" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <IconButton icon={<Icon name="check" />} aria-label="Normal" />
      <IconButton icon={<Icon name="check" />} disabled aria-label="Disabled" />
      <IconButton icon={<Icon name="check" />} className="opacity-50" aria-label="Loading" />
    </div>
  ),
};

export const InContext: Story = {
  render: () => (
    <div className="p-4 bg-white border border-gray-light rounded-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Modal Title</h3>
        <IconButton icon={<Icon name="x" />} variant="ghost" aria-label="Close modal" />
      </div>
      <p className="mt-2 text-gray-500">Modal content goes here...</p>
    </div>
  ),
};