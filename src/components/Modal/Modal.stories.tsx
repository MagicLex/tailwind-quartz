import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Button } from '../Button';
import { useState } from 'react';

const meta = {
  title: 'Interactive/Modal',
  component: Modal,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Default Modal"
        >
          <p>This is the modal content. Click the close button or outside the modal to close.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Cancel
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Confirm
              </Button>
            </>
          }
        >
          <p>Are you sure you want to proceed with this action?</p>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [smallOpen, setSmallOpen] = useState(false);
    const [mediumOpen, setMediumOpen] = useState(false);
    const [largeOpen, setLargeOpen] = useState(false);
    
    return (
      <div className="flex gap-4">
        <Button onClick={() => setSmallOpen(true)}>Small Modal</Button>
        <Button onClick={() => setMediumOpen(true)}>Medium Modal</Button>
        <Button onClick={() => setLargeOpen(true)}>Large Modal</Button>
        
        <Modal
          isOpen={smallOpen}
          onClose={() => setSmallOpen(false)}
          title="Small Modal"
          size="small"
        >
          <p>This is a small modal.</p>
        </Modal>
        
        <Modal
          isOpen={mediumOpen}
          onClose={() => setMediumOpen(false)}
          title="Medium Modal"
          size="medium"
        >
          <p>This is a medium modal with more content.</p>
          <p>It has a comfortable width for most use cases.</p>
        </Modal>
        
        <Modal
          isOpen={largeOpen}
          onClose={() => setLargeOpen(false)}
          title="Large Modal"
          size="large"
        >
          <p>This is a large modal suitable for complex forms or detailed content.</p>
          <p>It provides plenty of space for your content.</p>
        </Modal>
      </div>
    );
  },
};

export const LongContent: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Scrollable Content</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Terms and Conditions"
          footer={
            <>
              <Button variant="secondary" onClick={() => setIsOpen(false)}>
                Decline
              </Button>
              <Button onClick={() => setIsOpen(false)}>
                Accept
              </Button>
            </>
          }
        >
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod 
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco laboris.
              </p>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};