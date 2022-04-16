import React, { useState, useEffect } from 'react';

import { __dev__ } from 'utils';
import { VisuallyHidden } from 'components/shared';

const DISPLAY_NAME = 'Loader';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type LoaderElement = React.ElementRef<'div'>;
interface LoaderProps extends PrimitiveDivProps {
  isLoading: boolean;
}

const Loader = React.forwardRef<LoaderElement, LoaderProps>(
  ({ isLoading, ...restProps }, forwardedRef) => {
    const [showLoader, setShowLoader] = useState(false);
    const [isDoneLoading, setIsDoneLoading] = useState(false);

    /*! *********************************!*
        showLoader state push system hook
     * !********************************! */
    useEffect(() => {
      if (!isLoading) return;

      // So lets give the resource provider e.g server the benefit of
      // 100 milliseconds doubt that the server is fast
      let timeout: ReturnType<typeof setTimeout>;
      timeout = setTimeout(() => {
        setShowLoader(true);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }, [isLoading]);

    /*! *****************************************************!*
        isDoneLoading state push system hook for accessibility
     * !*****************************************************! */

    useEffect(() => {
      if (isLoading) return;

      setShowLoader(false);
      // Lets notify screen-readers that loading is done
      let timeout: ReturnType<typeof setTimeout>;
      timeout = setTimeout(() => {
        setIsDoneLoading(true);
      }, 100);

      return () => {
        clearTimeout(timeout);
      };
    }, [isLoading]);

    return (
      <div {...restProps} ref={forwardedRef}>
        {showLoader && <div>Loading...</div>}
        {isDoneLoading && <VisuallyHidden>Finished loading</VisuallyHidden>}
      </div>
    );
  }
);

if (__dev__) {
  Loader.displayName = DISPLAY_NAME;
}

export { Loader };
