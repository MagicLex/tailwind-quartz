import type { Meta, StoryObj } from '@storybook/react';
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from './Table';
import { Badge } from '../Badge';
import { Button } from '../Button';

const meta = {
  title: 'Display/Table',
  component: Table,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Striped: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Alice Brown</TableCell>
          <TableCell>alice@example.com</TableCell>
          <TableCell>Moderator</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody hover>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>Admin</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>John Doe</TableCell>
          <TableCell>john@example.com</TableCell>
          <TableCell>
            <Badge variant="primary">Admin</Badge>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button intent="secondary">Edit</Button>
              <Button intent="alert">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Jane Smith</TableCell>
          <TableCell>jane@example.com</TableCell>
          <TableCell>
            <Badge>User</Badge>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button intent="secondary">Edit</Button>
              <Button intent="alert">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>Bob Johnson</TableCell>
          <TableCell>bob@example.com</TableCell>
          <TableCell>
            <Badge>User</Badge>
          </TableCell>
          <TableCell>
            <div className="flex gap-2">
              <Button intent="secondary">Edit</Button>
              <Button intent="alert">Delete</Button>
            </div>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};

export const ComplexExample: Story = {
  render: () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead style={{ width: '60px' }}>ID</TableHead>
          <TableHead>Product</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Stock</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody striped hover>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Laptop Pro</TableCell>
          <TableCell>$1,299.99</TableCell>
          <TableCell>
            <span className="text-error">5 units</span>
          </TableCell>
          <TableCell>
            <Badge variant="success">Active</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>2</TableCell>
          <TableCell>Wireless Mouse</TableCell>
          <TableCell>$29.99</TableCell>
          <TableCell>
            <span className="text-success">150 units</span>
          </TableCell>
          <TableCell>
            <Badge variant="success">Active</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>3</TableCell>
          <TableCell>USB-C Hub</TableCell>
          <TableCell>$59.99</TableCell>
          <TableCell>
            <span className="text-error">0 units</span>
          </TableCell>
          <TableCell>
            <Badge variant="warning">Out of Stock</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>4</TableCell>
          <TableCell>Mechanical Keyboard</TableCell>
          <TableCell>$149.99</TableCell>
          <TableCell>
            <span className="text-success">25 units</span>
          </TableCell>
          <TableCell>
            <Badge variant="success">Active</Badge>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>5</TableCell>
          <TableCell>Monitor Stand</TableCell>
          <TableCell>$79.99</TableCell>
          <TableCell>
            <span className="text-error">8 units</span>
          </TableCell>
          <TableCell>
            <Badge variant="warning">Low Stock</Badge>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  ),
};