import React from 'react';

import { __dev__ } from 'utils';
import { useVisuallyHidden } from 'hooks';

const DISPLAY_NAME = 'VisuallyHidden';

type PrimitiveSpanProps = React.ComponentPropsWithoutRef<'span'>;
type VisuallyHiddenElement = React.ElementRef<'span'>;
interface VisuallyHiddenProps extends PrimitiveSpanProps {}

const VisuallyHidden = React.forwardRef<VisuallyHiddenElement, VisuallyHiddenProps>(
  ({ style, ...restProps }, forwardedRef) => (
    <span {...restProps} ref={forwardedRef} {...useVisuallyHidden(style ?? {})} />
  )
);

if (__dev__) {
  VisuallyHidden.displayName = DISPLAY_NAME;
}
export { VisuallyHidden };
