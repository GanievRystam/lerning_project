import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { PageLoader } from './PageLoader';

const meta = {
  title: 'widgets/PageLoader',
  component: PageLoader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PageLoader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
  },
}; 
Light.decorators = [ThemeDecorator(Theme.LIGHT)]
export const Dark: Story = {
  args: { 
  },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)]