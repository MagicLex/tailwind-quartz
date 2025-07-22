import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Forms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'inline', 'alert'],
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Intents: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-4 items-center">
        <Button intent="primary">Primary</Button>
        <span className="text-sm text-gray-500">Filled button for primary actions</span>
      </div>
      <div className="flex gap-4 items-center">
        <Button intent="secondary">Secondary</Button>
        <span className="text-sm text-gray-500">Outlined button for secondary actions</span>
      </div>
      <div className="flex gap-4 items-center">
        <Button intent="ghost">Ghost</Button>
        <span className="text-sm text-gray-500">Minimal button with no border</span>
      </div>
      <div className="flex gap-4 items-center">
        <Button intent="inline">Inline</Button>
        <span className="text-sm text-gray-500">Text-only button with underline</span>
      </div>
      <div className="flex gap-4 items-center">
        <Button intent="alert">Alert</Button>
        <span className="text-sm text-gray-500">Destructive action button</span>
      </div>
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm font-bold mb-2">Normal</p>
        <div className="flex gap-2">
          <Button intent="primary">Primary</Button>
          <Button intent="secondary">Secondary</Button>
          <Button intent="ghost">Ghost</Button>
          <Button intent="inline">Inline</Button>
          <Button intent="alert">Alert</Button>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold mb-2">Disabled</p>
        <div className="flex gap-2">
          <Button intent="primary" disabled>Primary</Button>
          <Button intent="secondary" disabled>Secondary</Button>
          <Button intent="ghost" disabled>Ghost</Button>
          <Button intent="inline" disabled>Inline</Button>
          <Button intent="alert" disabled>Alert</Button>
        </div>
      </div>
      <div>
        <p className="text-sm font-bold mb-2">Loading</p>
        <div className="flex gap-2">
          <Button intent="primary" isLoading>Primary</Button>
          <Button intent="secondary" isLoading>Secondary</Button>
          <Button intent="ghost" isLoading>Ghost</Button>
          <Button intent="alert" isLoading>Alert</Button>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button intent="primary" icon="PlusIcon">Add Item</Button>
      <Button intent="secondary" icon="PencilIcon">Edit</Button>
      <Button intent="ghost" icon="TrashIcon">Delete</Button>
      <Button intent="alert" icon="ExclamationTriangleIcon">Warning</Button>
    </div>
  ),
};

export const AsLink: Story = {
  render: () => (
    <div className="flex gap-2">
      <Button href="https://example.com" external>
        External Link
      </Button>
      <Button href="/internal" intent="secondary">
        Internal Link
      </Button>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Button isLoading>Loading with Text</Button>
        <Button isLoading loadingOnly>Loading Only</Button>
        <Button icon="PlusIcon" isLoading>With Icon</Button>
      </div>
    </div>
  ),
};