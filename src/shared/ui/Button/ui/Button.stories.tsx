import type { Meta, StoryObj } from '@storybook/react';

import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'TEXT'
  }
};
Primary.decorators = [ThemeDecorator(Theme.DARK)]
export const Clear: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.CLEAR
  }
};

export const Outline: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE
  }
};

Outline.decorators = [ThemeDecorator(Theme.DARK)]
