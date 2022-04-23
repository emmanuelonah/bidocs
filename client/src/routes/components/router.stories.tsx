import React from 'react';
import { Route } from 'react-router-dom';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { __storybook__ } from 'utils';
import { Router } from './router.component';

const Component = (props: { isError: boolean }) => {
  if (props.isError) throw new Error('bad Component');

  return <p>Welcome to Bidocs Emmanuel Onah Lab</p>;
};
export default {
  title: `${__storybook__.TITLES.shared}/Router`,
  component: Router,
} as ComponentMeta<typeof Router>;

export const Routes: ComponentStory<typeof Router> = () => (
  <Router>
    <Route path="" element={<Component isError />} />
  </Router>
);
