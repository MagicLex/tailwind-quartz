import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { Button } from '../Button';

const meta = {
  title: 'Layout/Flex',
  component: Flex,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <div className="bg-primary text-white p-4">Item 1</div>
        <div className="bg-secondary text-white p-4">Item 2</div>
        <div className="bg-tertiary text-white p-4">Item 3</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div className="bg-primary text-white p-4">Item 1</div>
        <div className="bg-secondary text-white p-4">Item 2</div>
        <div className="bg-tertiary text-white p-4">Item 3</div>
      </>
    ),
  },
};

export const JustifyContent: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">justify="start"</p>
        <Flex justify="start" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">justify="center"</p>
        <Flex justify="center" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">justify="end"</p>
        <Flex justify="end" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">justify="between"</p>
        <Flex justify="between" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
    </div>
  ),
};

export const AlignItems: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">align="start"</p>
        <Flex align="start" className="bg-gray-100 p-2 h-24">
          <Button>Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">align="center"</p>
        <Flex align="center" className="bg-gray-100 p-2 h-24">
          <Button>Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">align="end"</p>
        <Flex align="end" className="bg-gray-100 p-2 h-24">
          <Button>Button 1</Button>
          <Button size="small">Button 2</Button>
        </Flex>
      </div>
    </div>
  ),
};

export const WithGap: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <p className="text-sm mb-2">gap="none"</p>
        <Flex gap="none" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">gap="small"</p>
        <Flex gap="small" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">gap="medium"</p>
        <Flex gap="medium" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
        </Flex>
      </div>
      <div>
        <p className="text-sm mb-2">gap="large"</p>
        <Flex gap="large" className="bg-gray-100 p-2">
          <Button size="small">Button 1</Button>
          <Button size="small">Button 2</Button>
          <Button size="small">Button 3</Button>
        </Flex>
      </div>
    </div>
  ),
};