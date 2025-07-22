import type { Meta, StoryObj } from '@storybook/react';
import { Box } from './Box';

const meta = {
  title: 'Layout/Box',
  component: Box,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Box component with default padding',
  },
};

export const WithCustomPadding: Story = {
  args: {
    className: 'p-8 bg-gray-50',
    children: 'This Box has custom padding and background',
  },
};

export const NestedBoxes: Story = {
  render: () => (
    <Box className="bg-gray-100">
      <h3 className="text-lg font-bold mb-4">Outer Box</h3>
      <Box className="bg-white">
        <p>Inner Box with white background</p>
      </Box>
    </Box>
  ),
};

export const AsSection: Story = {
  args: {
    as: 'section',
    className: 'bg-primary-light p-6',
    children: 'This Box is rendered as a section element',
  },
};