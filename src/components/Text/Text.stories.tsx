import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta = {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a default text component. It provides consistent text styling across the application.',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Text size="xs">Extra small text (xs)</Text>
      <Text size="sm">Small text (sm)</Text>
      <Text size="base">Base text (base) - Default</Text>
      <Text size="lg">Large text (lg)</Text>
      <Text size="xl">Extra large text (xl)</Text>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-4">
      <Text>Default color text</Text>
      <Text className="text-gray-500">Gray text</Text>
      <Text className="text-primary">Primary color text</Text>
      <Text className="text-secondary">Secondary color text</Text>
      <Text className="text-error">Error color text</Text>
      <Text className="text-success">Success color text</Text>
    </div>
  ),
};

export const FontWeights: Story = {
  render: () => (
    <div className="space-y-4">
      <Text className="font-light">Light weight text</Text>
      <Text>Normal weight text (default)</Text>
      <Text className="font-medium">Medium weight text</Text>
      <Text className="font-semibold">Semibold weight text</Text>
      <Text className="font-bold">Bold weight text</Text>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
};