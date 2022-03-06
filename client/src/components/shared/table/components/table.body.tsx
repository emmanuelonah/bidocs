import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'TBody';

type PrimitiveTBodyProps = React.ComponentPropsWithoutRef<'tbody'>;
type TBodyElement = React.ElementRef<'tbody'>;
interface TBodyProps extends PrimitiveTBodyProps {
  children: React.ReactElement;
}

const TBody = React.forwardRef<TBodyElement, TBodyProps>(
  ({ children, ...restProps }, forwardedRef) => {
    const childElement = React.Children.only(children);

    return (
      <tbody {...restProps} ref={forwardedRef}>
        {React.cloneElement(childElement)}
      </tbody>
    );
  }
);

if (__dev__) {
  TBody.displayName = DISPLAY_NAME;
}

export { TBody };
