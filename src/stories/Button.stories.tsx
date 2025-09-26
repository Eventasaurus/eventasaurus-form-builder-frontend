import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { StoryButton } from './StoryButton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: StoryButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          width: '640px',
          maxWidth: '100%',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof StoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Outline: Story = {
  args: {
    label: 'Button',
    variant: 'outline',
  },
};

export const Destructive: Story = {
  args: {
    label: 'Button',
    variant: 'destructive',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
  },
};

export const Large: Story = {
  args: {
    label: 'Button',
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    label: 'Button',
    size: 'sm',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Button',
    width: 'full',
  },
};

export const PillShaped: Story = {
  args: {
    label: 'Button',
    rounded: 'full',
  },
};
