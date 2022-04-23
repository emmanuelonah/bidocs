/* eslint-disable max-len */
import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'IconArrowDown';

type PrimitiveSvgProps = React.ComponentPropsWithoutRef<'svg'>;
type ElementIconArrowDown = React.ElementRef<'svg'>;

interface IconArrowDownProps extends PrimitiveSvgProps {
  width?: string | number;
  height?: string | number;
  fill?: string;
}

const IconArrowDown = React.forwardRef<ElementIconArrowDown, IconArrowDownProps>(({ width, height, fill, ...restProps }, forwardedRef) => (
  <svg {...restProps} ref={forwardedRef} width={width} height={height} viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.67969 0.00390625L7.5 0.824219L4 4.32422L0.5 0.824219L1.32031 0.00390625L4 2.68359L6.67969 0.00390625Z" className="fill" fill={fill} />
  </svg>
));

IconArrowDown.defaultProps = {
  width: '8',
  height: '5',
  fill: '#856404',
};

if (__dev__) {
  IconArrowDown.displayName = DISPLAY_NAME;
}

export { IconArrowDown };
