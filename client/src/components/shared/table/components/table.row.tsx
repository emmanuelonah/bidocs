import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'TR';

type PrimitiveTRProps = React.ComponentPropsWithoutRef<'tr'>;
type TRElement = React.ElementRef<'tr'>;
interface TRProps extends PrimitiveTRProps {
  children:
    | React.ReactElement<'th'>
    | React.ReactElement<'th'>[]
    | React.ReactElement<'td'>
    | React.ReactElement<'td'>[];
}

const TR = React.forwardRef<TRElement, TRProps>(({ children, ...restProps }, forwardedRef) => (
  <tr {...restProps} ref={forwardedRef}>
    {children}
  </tr>
));

if (__dev__) {
  TR.displayName = DISPLAY_NAME;
}

export { TR };
