import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown, DropdownItem, DropdownDivider } from './Dropdown';
import { Button } from '../Button';
import { Icon } from '../Icon';

const meta = {
  title: 'Interactive/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Open Menu</Button>,
    children: (
      <>
        <DropdownItem onClick={() => console.log('Profile clicked')}>
          Profile
        </DropdownItem>
        <DropdownItem onClick={() => console.log('Settings clicked')}>
          Settings
        </DropdownItem>
        <DropdownItem onClick={() => console.log('Logout clicked')}>
          Logout
        </DropdownItem>
      </>
    ),
  },
};

export const WithIcons: Story = {
  args: {
    trigger: <Button>User Menu</Button>,
    children: (
      <>
        <DropdownItem 
          icon={<Icon name="user" size="small" />}
          onClick={() => console.log('Edit clicked')}
        >
          Edit Profile
        </DropdownItem>
        <DropdownItem 
          icon={<Icon name="settings" size="small" />}
          onClick={() => console.log('Settings clicked')}
        >
          Account Settings
        </DropdownItem>
        <DropdownItem 
          icon={<Icon name="logout" size="small" />}
          onClick={() => console.log('Logout clicked')}
        >
          Sign Out
        </DropdownItem>
      </>
    ),
  },
};

export const WithDividers: Story = {
  args: {
    trigger: <Button>Actions</Button>,
    children: (
      <>
        <DropdownItem onClick={() => console.log('Copy')}>Copy</DropdownItem>
        <DropdownItem onClick={() => console.log('Cut')}>Cut</DropdownItem>
        <DropdownItem onClick={() => console.log('Paste')}>Paste</DropdownItem>
        <DropdownDivider />
        <DropdownItem 
          className="text-error hover:bg-error-lightest"
          onClick={() => console.log('Delete')}
        >
          Delete
        </DropdownItem>
      </>
    ),
  },
};

export const PlacementOptions: Story = {
  render: () => (
    <div className="flex justify-between px-20">
      <Dropdown
        trigger={<Button size="small">Left Aligned</Button>}
        placement="bottom-start"
      >
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </Dropdown>
      
      <Dropdown
        trigger={<Button size="small">Right Aligned</Button>}
        placement="bottom-end"
      >
        <DropdownItem>Option 1</DropdownItem>
        <DropdownItem>Option 2</DropdownItem>
        <DropdownItem>Option 3</DropdownItem>
      </Dropdown>
    </div>
  ),
};

export const DisabledItems: Story = {
  args: {
    trigger: <Button>File Menu</Button>,
    children: (
      <>
        <DropdownItem onClick={() => console.log('New')}>New File</DropdownItem>
        <DropdownItem onClick={() => console.log('Open')}>Open File</DropdownItem>
        <DropdownDivider />
        <DropdownItem 
          className="opacity-50 cursor-not-allowed hover:bg-transparent"
          onClick={(e) => e.preventDefault()}
        >
          Save
        </DropdownItem>
        <DropdownItem onClick={() => console.log('Save As')}>Save As...</DropdownItem>
      </>
    ),
  },
};