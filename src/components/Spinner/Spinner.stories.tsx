import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from './Spinner';
import { Button } from '../Button';

const meta = {
  title: 'Display/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner size="small" />
        <p className="mt-2 text-sm text-gray-500">Small</p>
      </div>
      <div className="text-center">
        <Spinner size="medium" />
        <p className="mt-2 text-sm text-gray-500">Medium</p>
      </div>
      <div className="text-center">
        <Spinner size="large" />
        <p className="mt-2 text-sm text-gray-500">Large</p>
      </div>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <Spinner />
      <Spinner className="text-primary" />
      <Spinner className="text-secondary" />
      <Spinner className="text-success" />
      <Spinner className="text-error" />
    </div>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Button disabled className="relative">
      <span className="opacity-0">Loading...</span>
      <div className="absolute inset-0 flex items-center justify-center">
        <Spinner size="small" className="text-white" />
      </div>
    </Button>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <div className="p-8 bg-white border border-gray-lighter rounded-sm">
      <div className="flex flex-col items-center justify-center space-y-4">
        <Spinner size="large" />
        <p className="text-gray-500">Loading data...</p>
      </div>
    </div>
  ),
};

export const InlineLoading: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="flex items-center gap-2">
        <Spinner size="small" />
        <span>Loading user profile...</span>
      </p>
      <p className="flex items-center gap-2">
        <span>Processing payment</span>
        <Spinner size="small" />
      </p>
    </div>
  ),
};