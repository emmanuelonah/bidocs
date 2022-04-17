import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { __storybook__ } from 'utils';

import { Polymorphica } from './polymorphica.component';

export default {
  title: `${__storybook__.TITLES.shared}/Polymorphica`,
  component: Polymorphica,
  argTypes: {
    disabled: { control: { type: 'boolean' } },
  },
} as ComponentMeta<typeof Polymorphica>;

export const Link: ComponentStory<typeof Polymorphica> = () => (
  <Polymorphica as="a" href="https://emmanuelonah.com" target="_blank">
    Hello i am a ploymorphic link
  </Polymorphica>
);

export const Button: ComponentStory<typeof Polymorphica> = () => (
  <Polymorphica as="button">Hello i am a ploymorphic button</Polymorphica>
);
