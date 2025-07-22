import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Forms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'I agree to the terms and conditions',
  },
};

export const Checked: Story = {
  args: {
    children: 'Subscribe to newsletter',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'This option is disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: 'This option is disabled and checked',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    children: 'Accept terms',
    error: true,
  },
};

export const WithoutLabel: Story = {
  args: {},
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div className="space-y-3">
      <Checkbox defaultChecked>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
      <Checkbox disabled>Option 4 (disabled)</Checkbox>
    </div>
  ),
};