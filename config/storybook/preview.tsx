import React from 'react';
import 'app/styles/index.scss'
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { BrowserRouter } from 'react-router-dom';
export const decorators = [
  (Story) => (
    <div >
      <Story />
    </div>
  ),
  (Story) => (
    <BrowserRouter>
      <Story />
  </BrowserRouter>
  ),
];