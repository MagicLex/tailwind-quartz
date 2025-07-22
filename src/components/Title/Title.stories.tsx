import type { Meta, StoryObj } from '@storybook/react';
import { Title } from './Title';

const meta = {
  title: 'Typography/Title',
  component: Title,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Title>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a Title Component',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <p className="text-sm text-gray-500 mb-2">H1 Size</p>
        <Title as="h1">Main Page Title (H1)</Title>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">H2 Size</p>
        <Title as="h2">Section Title (H2)</Title>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">H3 Size</p>
        <Title as="h3">Subsection Title (H3)</Title>
      </div>
      <div>
        <p className="text-sm text-gray-500 mb-2">H4 Size</p>
        <Title as="h4">Card Title (H4)</Title>
      </div>
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    children: 'Custom Styled Title',
    className: 'text-primary',
  },
};