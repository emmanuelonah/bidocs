import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { __storybook__ } from 'utils';

import { ResourceRenderer } from './resource-renderer.component';

export default {
  title: `${__storybook__.TITLES.shared}/ResourceRenderer`,
  component: ResourceRenderer,
} as ComponentMeta<typeof ResourceRenderer>;

type State = {
  isLoading: boolean;
  error: null | string;
  data: string | null;
};

const initialState: State = {
  isLoading: true,
  error: null,
  data: null,
};
export const IsLoadingResourceRenderer: ComponentStory<typeof ResourceRenderer> = () => {
  const [state, setState] = React.useState(initialState);

  // for error
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      setState((prevState) => ({
        ...prevState,
        isLoading: false,
        error: 'Error testing',
      }));
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  // for data
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    timeout = setTimeout(() => {
      setState({
        isLoading: false,
        error: null,
        data: 'Hello data testing',
      });
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return <ResourceRenderer {...state}>{(data) => <p>{data}</p>}</ResourceRenderer>;
};
