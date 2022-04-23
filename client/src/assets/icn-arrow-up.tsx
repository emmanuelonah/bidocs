/* eslint-disable max-len */
import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'IconArrowUp';

type PrimitiveSvgProps = React.ComponentPropsWithoutRef<'svg'>;
type ElementIconArrowUp = React.ElementRef<'svg'>;

interface IconArrowUpProps extends PrimitiveSvgProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const IconArrowUp = React.forwardRef<ElementIconArrowUp, IconArrowUpProps>(({ width, height, fill, ...restProps }, forwardedRef) => (
  <svg {...restProps} ref={forwardedRef} width={width} height={height} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 0.675781L7.5 4.17578L6.67969 4.99609L4 2.31641L1.32031 4.99609L0.5 4.17578L4 0.675781Z" className="fill" fill={fill} />
  </svg>
));

IconArrowUp.defaultProps = {
  width: '8',
  height: '5',
  fill: '#721C24',
};

if (__dev__) {
  IconArrowUp.displayName = DISPLAY_NAME;
}

export { IconArrowUp };
