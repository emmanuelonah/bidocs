import React from 'react';
import styled from 'styled-components';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { __storybook__ } from 'utils';
import { SkeletonUI } from './skeleton-ui.component';

export default {
  title: `${__storybook__.TITLES.shared}/SkeletonUI`,
  component: SkeletonUI,
} as ComponentMeta<typeof SkeletonUI>;

const Wrapper = styled.div`
  width: 25rem;
  height: 31.25rem;
  border-radius: 0.3125rem;
  background-color: #007bff;
  padding: 1.25rem;
`;

export const SkeletonUiBlock: ComponentStory<typeof SkeletonUI> = () => (
  <Wrapper>
    <SkeletonUI shape="block" />
  </Wrapper>
);

export const SkeletonUiRadius: ComponentStory<typeof SkeletonUI> = () => (
  <Wrapper>
    <SkeletonUI shape="radius" />
  </Wrapper>
);

export const SkeletonUiRound: ComponentStory<typeof SkeletonUI> = () => (
  <Wrapper>
    <SkeletonUI shape="round" />
  </Wrapper>
);

export const Augmented: ComponentStory<typeof SkeletonUI> = () => (
  <Wrapper>
    <SkeletonUI shape="round" width="2.5rem" height="2.5rem" />
    <SkeletonUI shape="radius" width="70%" height="1.875rem" />
    <SkeletonUI shape="radius" width="90%" height="1.875rem" />
    <SkeletonUI shape="block" width="20%" height="1.875rem" />
  </Wrapper>
);
