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
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Controls whether the modal is visible',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Modal size',
    },
    blur: {
      control: { type: 'range', min: 0, max: 20, step: 1 },
      description: 'Backdrop blur amount in pixels (0 = no blur)',
    },
    closeOnOverlayClick: {
      control: 'boolean',
      description: 'Close modal when clicking outside',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button in header',
    },
    title: {
      control: 'text',
      description: 'Modal title',
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isOpen: true,
    title: 'Default Modal',
    size: 'md',
    closeOnOverlayClick: true,
    showCloseButton: true,
    blur: 0,
    children: 'This is the modal content. Click the close button or outside the modal to close.',
    onClose: () => console.log('Modal closed'),
  },
};

export const Interactive: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Interactive Modal"
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
        >
          <p>Are you sure you want to proceed with this action?</p>
          <div className="flex justify-end gap-2 mt-4">
            <Button intent="secondary" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </div>
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
          size="sm"
        >
          <p>This is a small modal.</p>
        </Modal>
        
        <Modal
          isOpen={mediumOpen}
          onClose={() => setMediumOpen(false)}
          title="Medium Modal"
          size="md"
        >
          <p>This is a medium modal with more content.</p>
          <p>It has a comfortable width for most use cases.</p>
        </Modal>
        
        <Modal
          isOpen={largeOpen}
          onClose={() => setLargeOpen(false)}
          title="Large Modal"
          size="lg"
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
          <div className="flex justify-end gap-2 mt-4 sticky bottom-0 bg-white pt-4">
            <Button intent="secondary" onClick={() => setIsOpen(false)}>
              Decline
            </Button>
            <Button onClick={() => setIsOpen(false)}>
              Accept
            </Button>
          </div>
        </Modal>
      </>
    );
  },
};

export const WithBlur: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Blur</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Blurred Background"
          blur={8}
        >
          <p>This modal has a blurred background instead of a dark overlay.</p>
        </Modal>
      </>
    );
  },
};