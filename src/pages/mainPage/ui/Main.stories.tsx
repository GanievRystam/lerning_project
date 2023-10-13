import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Main from './Main'; 
const meta = {
  title: 'pages/Main',
  component: Main,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
  },
}; 
export const SECONDARY: Story = {
  args: { 
  },
};
SECONDARY.decorators = [ThemeDecorator(Theme.DARK)]