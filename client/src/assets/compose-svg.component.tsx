import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'ComposeSvg';

type PrimitiveSpanProps = React.ComponentPropsWithoutRef<'span'>;
type ComposeSvgElement = React.ElementRef<'span'>;
interface ComposeSvgProps extends PrimitiveSpanProps {
  children: React.ReactSVGElement | React.ReactSVGElement[] | React.ComponentType<React.ReactSVGElement>;
}

const ComposeSvg = React.forwardRef<ComposeSvgElement, ComposeSvgProps>(({ children, ...restProps }, forwardedRef) => (
  <span {...restProps} ref={forwardedRef}>
    {children}
  </span>
));

if (__dev__) {
  ComposeSvg.displayName = DISPLAY_NAME;
}

export { ComposeSvg };
