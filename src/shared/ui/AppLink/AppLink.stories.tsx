import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'widgets/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' }, 
  },
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
    children: 'TEXT',
    theme: AppLinkTheme.PRIMARY
  },
}; 
export const SECONDARY: Story = {
  args: { 
    children: 'TEXT',
    theme: AppLinkTheme.SECONDARY
  },
};
SECONDARY.decorators = [ThemeDecorator(Theme.DARK)]