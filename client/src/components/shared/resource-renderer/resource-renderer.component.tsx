import React from 'react';

import { Loader, Alerter } from 'components/shared';

type ResourceRendererProps = {
  isLoading: boolean;
  error: string | null;
  data: any;
  // eslint-disable-next-line no-unused-vars
  children: <DataType>(data: DataType) => React.ReactElement;
};

export function ResourceRenderer({ isLoading, error, data, children }: ResourceRendererProps) {
  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  if (error) {
    return (
      <Alerter aria-atomic="true" aria-live="assertive" type="danger">
        {error}
      </Alerter>
    );
  }

  return children(data);
}
