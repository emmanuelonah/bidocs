import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'TH';

type PrimitiveTHProps = React.ComponentPropsWithoutRef<'th'>;
type THElement = React.ElementRef<'th'>;
interface THProps extends PrimitiveTHProps {}

const TH = React.forwardRef<THElement, THProps>((props, forwardedRef) => (
  <th {...props} ref={forwardedRef} />
));

if (__dev__) {
  TH.displayName = DISPLAY_NAME;
}

export { TH };
