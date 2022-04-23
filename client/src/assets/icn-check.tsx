/* eslint-disable max-len */
import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'IconCheck';

type PrimitiveSvgProps = React.ComponentPropsWithoutRef<'svg'>;
type ElementIconCheck = React.ElementRef<'svg'>;

interface IconCheckProps extends PrimitiveSvgProps {
  width?: string;
  height?: string;
  fill: string;
}

const IconCheck = React.forwardRef<ElementIconCheck, IconCheckProps>(
  ({ height, width, fill, ...restProps }, forwardedRef) => (
    <svg
      {...restProps}
      ref={forwardedRef}
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0C4.01538 0 0 4.01538 0 9C0 13.9846 4.01538 18 9 18C13.9846 18 18 13.9846 18 9C18 4.01538 13.9846 0 9 0ZM13.4308 6.57692L8.51538 12.3231C8.37692 12.4615 8.16923 12.6 7.96154 12.6C7.82308 12.6 7.61538 12.5308 7.54615 12.4615L4.63846 9.96923C4.36154 9.69231 4.29231 9.27692 4.56923 9C4.84615 8.72308 5.26154 8.65385 5.53846 8.93077L7.96154 10.9385L12.3923 5.67692C12.6692 5.4 13.0846 5.33077 13.3615 5.60769C13.6385 5.81538 13.6385 6.23077 13.4308 6.57692Z"
        fill={fill}
      />
    </svg>
  )
);

IconCheck.defaultProps = {
  width: '1.125rem',
  height: '1.125rem',
};

if (__dev__) {
  IconCheck.displayName = DISPLAY_NAME;
}

export { IconCheck };
