import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { __storybook__, theme } from 'utils';
import { Button, BlueButton } from './button.component';

export default {
  title: `${__storybook__.TITLES.shared}/Buttons`,
  component: Button,
} as ComponentMeta<typeof Button>;

const Base: ComponentStory<typeof Button> = (props) => <Button {...props} />;

export const ButtonBlue: ComponentStory<typeof Button> = () => (
  <ThemeProvider theme={theme}>
    <BlueButton>Blue</BlueButton>
    <BlueButton level="semi" shape="radius">
      Blue
    </BlueButton>
    <BlueButton level="light" shape="round">
      Blue
    </BlueButton>
  </ThemeProvider>
);

export const RandomButton = Base.bind({});
RandomButton.args = {
  label: 'Random',
  theme,
};
