import type { Meta, StoryObj } from '@storybook/react';
import { Value } from './Value';

const meta = {
  title: 'Typography/Value',
  component: Value,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Value>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '42',
  },
};

export const WithLabel: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <span className="text-sm text-gray-500">Total Users</span>
        <Value>1,234</Value>
      </div>
      <div>
        <span className="text-sm text-gray-500">Revenue</span>
        <Value>$45,678.90</Value>
      </div>
      <div>
        <span className="text-sm text-gray-500">Growth Rate</span>
        <Value>+15.3%</Value>
      </div>
    </div>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Value className="text-2xl">Small: 123</Value>
      <Value className="text-4xl">Medium: 456</Value>
      <Value className="text-6xl">Large: 789</Value>
    </div>
  ),
};

export const ColoredValues: Story = {
  render: () => (
    <div className="space-y-4">
      <Value>Default: 100</Value>
      <Value className="text-success">Success: +25</Value>
      <Value className="text-error">Error: -15</Value>
      <Value className="text-warning">Warning: 75</Value>
      <Value className="text-primary">Primary: 250</Value>
    </div>
  ),
};