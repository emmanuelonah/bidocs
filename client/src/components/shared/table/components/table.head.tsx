import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'THead';

type PrimitiveTHeadProps = React.ComponentPropsWithoutRef<'thead'>;
type THeadElement = React.ElementRef<'thead'>;
interface THeadProps extends PrimitiveTHeadProps {
  children: React.ReactElement;
}

const THead = React.forwardRef<THeadElement, THeadProps>(
  ({ children, ...restProps }, forwardedRef) => {
    const childElement = React.Children.only(children);

    return (
      <thead {...restProps} ref={forwardedRef}>
        {React.cloneElement(childElement)}
      </thead>
    );
  }
);

if (__dev__) {
  THead.displayName = DISPLAY_NAME;
}

export { THead };
