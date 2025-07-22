import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from '../Button';
import { Typography } from '../Typography';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: (
      <Typography.Text>
        This is a card with a title prop. The content goes here.
      </Typography.Text>
    ),
  },
};

export const WithActions: Story = {
  args: {
    title: 'Card with Actions',
    actions: (
      <>
        <Button size="small" variant="secondary">Cancel</Button>
        <Button size="small">Save</Button>
      </>
    ),
    children: (
      <Typography.Text>
        This card has action buttons in the header.
      </Typography.Text>
    ),
  },
};

export const WithSubcomponents: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Typography.Title>Card with Sections</Typography.Title>
      </Card.Header>
      <Card.Body>
        <Typography.Text>
          This card uses Header, Body, and Footer subcomponents for more control over the layout.
        </Typography.Text>
      </Card.Body>
      <Card.Footer>
        <Button size="small">Action</Button>
      </Card.Footer>
    </Card>
  ),
};

export const Bordered: Story = {
  render: () => (
    <Card variant="bordered">
      <Card.Body>
        <Typography.Subtitle>Bordered Card</Typography.Subtitle>
        <Typography.Text>
          This card has a border variant and uses only the body section.
        </Typography.Text>
      </Card.Body>
    </Card>
  ),
};

export const WithShadow: Story = {
  args: {
    title: 'Card with Shadow',
    withShadow: true,
    children: (
      <Typography.Text>
        This card has a shadow for elevated appearance.
      </Typography.Text>
    ),
  },
};