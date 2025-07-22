import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';
import { IconButton } from '../IconButton';
import { Icon } from '../Icon';

const meta = {
  title: 'Interactive/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'This is a tooltip',
    children: <Button>Hover me</Button>,
  },
};

export const Positions: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 py-16">
      <div className="flex justify-center">
        <Tooltip content="Top tooltip" position="top">
          <Button>Top</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Bottom tooltip" position="bottom">
          <Button>Bottom</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Left tooltip" position="left">
          <Button>Left</Button>
        </Tooltip>
      </div>
      <div className="flex justify-center">
        <Tooltip content="Right tooltip" position="right">
          <Button>Right</Button>
        </Tooltip>
      </div>
    </div>
  ),
};

export const WithIconButton: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="Edit item">
        <IconButton icon={<Icon name="edit" />} aria-label="Edit" />
      </Tooltip>
      <Tooltip content="Delete item">
        <IconButton icon={<Icon name="trash" />} variant="danger" aria-label="Delete" />
      </Tooltip>
      <Tooltip content="More options">
        <IconButton icon={<Icon name="more-vertical" />} aria-label="More" />
      </Tooltip>
    </div>
  ),
};

export const LongContent: Story = {
  args: {
    content: 'This is a tooltip with longer content that might wrap to multiple lines',
    children: <Button>Hover for long tooltip</Button>,
  },
};

export const CustomDelay: Story = {
  args: {
    content: 'This tooltip appears after a custom delay',
    delay: 1000,
    children: <Button>Hover and wait</Button>,
  },
};

export const DisabledTooltip: Story = {
  args: {
    content: 'This button is disabled',
    children: <Button disabled>Disabled Button</Button>,
  },
};