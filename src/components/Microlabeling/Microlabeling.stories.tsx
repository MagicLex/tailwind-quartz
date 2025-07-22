import type { Meta, StoryObj } from '@storybook/react';
import { Microlabeling } from './Microlabeling';

const meta = {
  title: 'Typography/Microlabeling',
  component: Microlabeling,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Microlabeling>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Small label text',
  },
};

export const UppercaseLabel: Story = {
  args: {
    children: 'STATUS',
    className: 'uppercase tracking-wider',
  },
};

export const WithIcon: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-1">
        <Microlabeling>Last updated</Microlabeling>
        <span className="text-sm">5 minutes ago</span>
      </div>
      <div className="flex items-center gap-1">
        <Microlabeling>Created by</Microlabeling>
        <span className="text-sm">John Doe</span>
      </div>
    </div>
  ),
};

export const InlineUsage: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-baseline gap-2">
        <Microlabeling>CPU</Microlabeling>
        <span className="text-2xl font-bold">45%</span>
      </div>
      <div className="flex items-baseline gap-2">
        <Microlabeling>Memory</Microlabeling>
        <span className="text-2xl font-bold">2.4 GB</span>
      </div>
      <div className="flex items-baseline gap-2">
        <Microlabeling>Storage</Microlabeling>
        <span className="text-2xl font-bold">120 GB</span>
      </div>
    </div>
  ),
};

export const ColorVariations: Story = {
  render: () => (
    <div className="space-y-2">
      <Microlabeling>Default gray</Microlabeling>
      <Microlabeling className="text-primary">Primary color</Microlabeling>
      <Microlabeling className="text-secondary">Secondary color</Microlabeling>
      <Microlabeling className="text-success">Success color</Microlabeling>
      <Microlabeling className="text-error">Error color</Microlabeling>
    </div>
  ),
};