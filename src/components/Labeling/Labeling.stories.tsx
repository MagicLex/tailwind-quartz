import type { Meta, StoryObj } from '@storybook/react';
import { Labeling } from './Labeling';
import { Input } from '../Input';
import { Select } from '../Select';

const meta = {
  title: 'Typography/Labeling',
  component: Labeling,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Labeling>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Field Label',
    children: <Input placeholder="Enter value" />,
  },
};

export const Required: Story = {
  args: {
    label: 'Required Field',
    required: true,
    children: <Input placeholder="This field is required" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email Address',
    helperText: 'We\'ll never share your email with anyone else.',
    children: <Input type="email" placeholder="name@example.com" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Password',
    error: 'Password must be at least 8 characters long',
    children: <Input type="password" placeholder="Enter password" error />,
  },
};

export const WithSelect: Story = {
  args: {
    label: 'Country',
    required: true,
    children: (
      <Select 
        options={[
          { value: '', label: 'Select a country' },
          { value: 'us', label: 'United States' },
          { value: 'uk', label: 'United Kingdom' },
          { value: 'ca', label: 'Canada' },
        ]} 
      />
    ),
  },
};

export const CompleteExample: Story = {
  render: () => (
    <div className="space-y-6">
      <Labeling 
        label="Username" 
        required 
        helperText="Choose a unique username"
      >
        <Input placeholder="john_doe" />
      </Labeling>
      
      <Labeling 
        label="Email" 
        required 
        error="Please enter a valid email address"
      >
        <Input type="email" placeholder="john@example.com" error />
      </Labeling>
      
      <Labeling 
        label="Bio" 
        helperText="Tell us about yourself (optional)"
      >
        <textarea 
          className="w-full px-3 py-2 border border-gray-light rounded-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          rows={4}
          placeholder="Write a short bio..."
        />
      </Labeling>
    </div>
  ),
};