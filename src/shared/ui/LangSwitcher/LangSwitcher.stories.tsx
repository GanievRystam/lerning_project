import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from './LangSwitcher';

const meta = {
  title: 'widgets/LangSwitcher',
  component: LangSwitcher,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof LangSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

export const PRIMARY: Story = {
  args: {
    className: 'TEXT'
  }
}
export const SECONDARY: Story = {
  args: {
    className: 'TEXT'
  }
};
SECONDARY.decorators = [ThemeDecorator(Theme.DARK)]
