import type { Meta, StoryObj } from '@storybook/react';

import { Button, ButtonSize, ThemeButton } from './Button';
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

export const OutlineSizeL: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.L
  }
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.OUTLINE,
    size: ButtonSize.XL
  }
};
Outline.decorators = [ThemeDecorator(Theme.DARK)]
export const background: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.BACKGROUND
  }
};

export const backgroundInverted: Story = {
  args: {
    children: 'TEXT',
    theme: ThemeButton.BACKGROUND_INVERTED
  }
};

export const Square: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true
  }
}

export const SquareM: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M
  }
}
export const SquareL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L
  }
}
export const SquareXL: Story = {
  args: {
    children: '>',
    theme: ThemeButton.BACKGROUND,
    square: true,
    size: ButtonSize.XL
  }
}
