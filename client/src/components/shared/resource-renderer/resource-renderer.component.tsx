import React from 'react';

import { __dev__ } from 'utils';
import { Loader, Alerter } from 'components/shared';

const DISPLAY_NAME = 'ResourceRenderer';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type ResourceRendererElement = React.ElementRef<'div'>;
interface ResourceRendererProps extends PrimitiveDivProps {
  isLoading: boolean;
  error: string | null;
  data: any;
  // eslint-disable-next-line no-unused-vars
  children: <DataType>(data: DataType) => React.ReactElement;
}

const ResourceRenderer = React.forwardRef<ResourceRendererElement, ResourceRendererProps>(
  (props, forwardedRef) => {
    const { isLoading, error, data, children, className, ...restProps } = props;

    /** *************
     * Loading state
     */
    if (isLoading) {
      return <Loader isLoading={isLoading} />;
    }

    /** *************
     * Error state
     */
    if (error) {
      return (
        <Alerter aria-atomic="true" aria-live="assertive" type="danger">
          {error}
        </Alerter>
      );
    }

    /** ******************
     * Resolve data state
     */
    return (
      <div
        {...restProps}
        className={`resource-renderer-container ${className ?? ''}`}
        ref={forwardedRef}
      >
        {children(data)}
      </div>
    );
  }
);

if (__dev__) {
  ResourceRenderer.displayName = DISPLAY_NAME;
}

export { ResourceRenderer };
