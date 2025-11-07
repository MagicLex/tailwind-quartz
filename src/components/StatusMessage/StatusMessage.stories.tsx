import type { Meta, StoryObj } from '@storybook/react';
import { StatusMessage } from './StatusMessage';
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon, InformationCircleIcon } from '@heroicons/react/24/solid';

const meta = {
  title: 'Components/StatusMessage',
  component: StatusMessage,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof StatusMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    variant: 'success',
    icon: <CheckCircleIcon className="w-5 h-5" />,
    children: (
      <div>
        <div className="font-semibold">Cluster Access Active</div>
        <div className="text-sm">Connected to: dev-cloud</div>
      </div>
    ),
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    icon: <XCircleIcon className="w-5 h-5" />,
    children: (
      <div>
        <div className="font-semibold">Connection Failed</div>
        <div className="text-sm">Unable to reach the server</div>
      </div>
    ),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    icon: <ExclamationTriangleIcon className="w-5 h-5" />,
    children: (
      <div>
        <div className="font-semibold">Limited Access</div>
        <div className="text-sm">Some features may be unavailable</div>
      </div>
    ),
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
    icon: <InformationCircleIcon className="w-5 h-5" />,
    children: (
      <div>
        <div className="font-semibold">System Update</div>
        <div className="text-sm">Scheduled maintenance in 2 hours</div>
      </div>
    ),
  },
};

export const WithoutIcon: Story = {
  args: {
    variant: 'info',
    children: 'This is a simple message without an icon',
  },
};

export const SingleLine: Story = {
  args: {
    variant: 'success',
    icon: <CheckCircleIcon className="w-5 h-5" />,
    children: 'Operation completed successfully',
  },
};
