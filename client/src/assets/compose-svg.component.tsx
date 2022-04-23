import React from 'react';
import styled from 'styled-components';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'ComposeSvg';

const Container = styled.span`
  &.size--large {
    & svg {
      width: 9.375rem;
      height: 9.375rem;
    }
  }

  &.size--medium {
    & svg {
      width: 3.125rem !important;
      height: 3.125rem !important;
    }
  }

  &.size--small {
    & svg {
      width: 1.8rem !important;
      height: 1.4rem !important;
    }
  }
`;

type SvgSizes = 'large' | 'medium' | 'small';

type PrimitiveSpanProps = React.ComponentPropsWithoutRef<'span'>;
type ComposeSvgElement = React.ElementRef<'span'>;
interface ComposeSvgProps extends PrimitiveSpanProps {
  size: SvgSizes;
  children: React.ReactSVGElement | React.ComponentType<React.ReactSVGElement> | React.ReactElement;
}

const ComposeSvg = React.forwardRef<ComposeSvgElement, ComposeSvgProps>(
  ({ size, children, ...restProps }, forwardedRef) => {
    const child = React.Children.only(children);

    return (
      <Container {...restProps} ref={forwardedRef} className={`size--${size}`}>
        {child}
      </Container>
    );
  }
);

if (__dev__) {
  ComposeSvg.displayName = DISPLAY_NAME;
}

export { ComposeSvg };
