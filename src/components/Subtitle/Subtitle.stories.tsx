import type { Meta, StoryObj } from '@storybook/react';
import { Subtitle } from './Subtitle';
import { Title } from '../Title';

const meta = {
  title: 'Typography/Subtitle',
  component: Subtitle,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Subtitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a subtitle text',
  },
};

export const WithTitle: Story = {
  render: () => (
    <div>
      <Title as="h2">Main Title</Title>
      <Subtitle>Supporting subtitle text that provides additional context</Subtitle>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div className="space-y-4">
      <Subtitle>Default gray subtitle</Subtitle>
      <Subtitle className="text-primary">Primary color subtitle</Subtitle>
      <Subtitle className="text-secondary">Secondary color subtitle</Subtitle>
    </div>
  ),
};

export const LongSubtitle: Story = {
  args: {
    children: 'This is a longer subtitle that might wrap to multiple lines. It provides more detailed information about the section or content below.',
  },
};