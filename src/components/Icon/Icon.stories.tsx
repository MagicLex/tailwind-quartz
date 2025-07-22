import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';
import * as OutlineIcons from '@heroicons/react/24/outline';

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
    name: 'CheckIcon',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-sm font-bold mb-2">Outline Icons</h3>
        <div className="flex items-center gap-4">
          <Icon name="HomeIcon" variant="outline" />
          <Icon name="UserIcon" variant="outline" />
          <Icon name="Cog6ToothIcon" variant="outline" />
          <Icon name="HeartIcon" variant="outline" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-bold mb-2">Solid Icons</h3>
        <div className="flex items-center gap-4">
          <Icon name="HomeIcon" variant="solid" />
          <Icon name="UserIcon" variant="solid" />
          <Icon name="Cog6ToothIcon" variant="solid" />
          <Icon name="HeartIcon" variant="solid" />
        </div>
      </div>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="CheckIcon" size="xxs" />
      <Icon name="CheckIcon" size="xs" />
      <Icon name="CheckIcon" size="sm" />
      <Icon name="CheckIcon" size="md" />
      <Icon name="CheckIcon" size="lg" />
      <Icon name="CheckIcon" size="xl" />
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon name="CheckIcon" />
      <Icon name="CheckIcon" className="text-primary" />
      <Icon name="CheckIcon" className="text-secondary" />
      <Icon name="CheckIcon" className="text-success" />
      <Icon name="CheckIcon" className="text-error" />
      <Icon name="CheckIcon" className="text-warning" />
    </div>
  ),
};

export const AllIcons: Story = {
  render: () => {
    const iconNames = Object.keys(OutlineIcons).slice(0, 48);
    
    return (
      <div className="grid grid-cols-6 gap-4">
        {iconNames.map((name) => (
          <div key={name} className="flex flex-col items-center p-4 border border-gray-lighter rounded-sm hover:bg-gray-lightest">
            <Icon name={name as any} size="md" />
            <span className="mt-2 text-xs text-gray-500">{name.replace('Icon', '')}</span>
          </div>
        ))}
      </div>
    );
  },
};

export const InlineWithText: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="flex items-center gap-2">
        <Icon name="CheckCircleIcon" className="text-success" size="sm" />
        <span>Success message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="XCircleIcon" className="text-error" size="sm" />
        <span>Error message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="ExclamationTriangleIcon" className="text-warning" size="sm" />
        <span>Warning message</span>
      </p>
      <p className="flex items-center gap-2">
        <Icon name="InformationCircleIcon" className="text-primary" size="sm" />
        <span>Info message</span>
      </p>
    </div>
  ),
};