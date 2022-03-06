import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'TD';

type PrimitiveTDProps = React.ComponentPropsWithoutRef<'td'>;
type TDElement = React.ElementRef<'td'>;
interface TDProps extends PrimitiveTDProps {}

const TD = React.forwardRef<TDElement, TDProps>((props, forwardedRef) => (
  <td {...props} ref={forwardedRef} />
));

if (__dev__) {
  TD.displayName = DISPLAY_NAME;
}

export { TD };
