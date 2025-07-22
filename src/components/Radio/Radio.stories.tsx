import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Option 1',
    name: 'radio-group',
  },
};

export const Checked: Story = {
  args: {
    children: 'Selected option',
    name: 'radio-group',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled option',
    name: 'radio-group',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'Disabled selected option',
    name: 'radio-group',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    children: 'Error state',
    name: 'radio-group',
    error: true,
  },
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-3">
      <Radio name="options" defaultChecked>Option 1</Radio>
      <Radio name="options">Option 2</Radio>
      <Radio name="options">Option 3</Radio>
      <Radio name="options" disabled>Option 4 (disabled)</Radio>
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    name: 'radio-group',
  },
};