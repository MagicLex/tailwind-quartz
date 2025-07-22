import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </>
    ),
  },
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'option2',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
        <option value="option4">Option 4</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: (
      <>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Choose an option',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: 'Please select a valid country',
    children: (
      <>
        <option value="">Select a country</option>
        <option value="us">United States</option>
        <option value="uk">United Kingdom</option>
        <option value="ca">Canada</option>
      </>
    ),
  },
};

export const WithHint: Story = {
  args: {
    label: 'Preferred contact method',
    hint: 'We will use this to contact you',
    children: (
      <>
        <option value="">Select a method</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
        <option value="sms">SMS</option>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    className: 'w-full',
    children: (
      <>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </>
    ),
  },
};