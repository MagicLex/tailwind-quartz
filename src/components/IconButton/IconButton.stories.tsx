import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

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
    icon: 'XMarkIcon',
    'aria-label': 'Close',
  },
};

export const Sizes: Story = {
  args: {
    icon: 'XMarkIcon',
    'aria-label': 'Close',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} size="sm" aria-label="Small close" />
      <IconButton {...args} size="md" aria-label="Medium close" />
      <IconButton {...args} size="lg" aria-label="Large close" />
    </div>
  ),
};

export const Variants: Story = {
  args: {
    'aria-label': 'Action',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} icon="PlusIcon" intent="primary" aria-label="Add" />
      <IconButton {...args} icon="PencilIcon" intent="secondary" aria-label="Edit" />
      <IconButton {...args} icon="TrashIcon" intent="alert" aria-label="Delete" />
      <IconButton {...args} icon="Cog6ToothIcon" intent="ghost" aria-label="Settings" />
    </div>
  ),
};

export const States: Story = {
  args: {
    icon: 'CheckIcon',
    'aria-label': 'Check',
  },
  render: (args) => (
    <div className="flex items-center gap-4">
      <IconButton {...args} aria-label="Normal" />
      <IconButton {...args} disabled aria-label="Disabled" />
      <IconButton {...args} className="opacity-50" aria-label="Loading" />
    </div>
  ),
};

export const InContext: Story = {
  args: {
    icon: 'XMarkIcon',
    intent: 'ghost',
    'aria-label': 'Close modal',
  },
  render: (args) => (
    <div className="p-4 bg-white border border-gray-light rounded-sm">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold">Modal Title</h3>
        <IconButton {...args} />
      </div>
      <p className="mt-2 text-gray-500">Modal content goes here...</p>
    </div>
  ),
};