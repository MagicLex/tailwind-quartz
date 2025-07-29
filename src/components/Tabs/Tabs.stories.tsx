import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState('tab1');
    
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
          <TabsTrigger value="tab3">Tab 3</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <h3 className="font-bold mb-2">Tab 1 Content</h3>
            <p className="text-sm text-gray">This is the content for tab 1.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <h3 className="font-bold mb-2">Tab 2 Content</h3>
            <p className="text-sm text-gray">This is the content for tab 2.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <h3 className="font-bold mb-2">Tab 3 Content</h3>
            <p className="text-sm text-gray">This is the content for tab 3.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = React.useState('tab1');
    
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="tab1">Active</TabsTrigger>
          <TabsTrigger value="tab2" disabled>Disabled</TabsTrigger>
          <TabsTrigger value="tab3">Available</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>This tab is active and clickable.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab2">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>You shouldn't be able to see this content.</p>
          </div>
        </TabsContent>
        <TabsContent value="tab3">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>This tab is also available.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};

export const ManyTabs: Story = {
  render: () => {
    const [value, setValue] = React.useState('overview');
    
    return (
      <Tabs value={value} onValueChange={setValue}>
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="logs">Logs</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>Overview content goes here.</p>
          </div>
        </TabsContent>
        <TabsContent value="details">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>Details content goes here.</p>
          </div>
        </TabsContent>
        <TabsContent value="settings">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>Settings content goes here.</p>
          </div>
        </TabsContent>
        <TabsContent value="analytics">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>Analytics content goes here.</p>
          </div>
        </TabsContent>
        <TabsContent value="logs">
          <div className="p-4 bg-white border border-gray-light rounded-sm">
            <p>Logs content goes here.</p>
          </div>
        </TabsContent>
      </Tabs>
    );
  },
};