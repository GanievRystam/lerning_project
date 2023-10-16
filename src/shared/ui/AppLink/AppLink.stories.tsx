import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppLink, AppLinkTheme } from './AppLink';

const meta = {
  title: 'widgets/AppLink',
  component: AppLink,
  parameters: {
    layout: 'centered'
  },
  args: {
    to: '/'
  }
} satisfies Meta<typeof AppLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
    className: 'TEXT',
    theme: AppLinkTheme.PRIMARY
  }
}
export const SECONDARY: Story = {
  args: {
    className: 'TEXT',
    theme: AppLinkTheme.SECONDARY
  }
};
SECONDARY.decorators = [ThemeDecorator(Theme.DARK)]
