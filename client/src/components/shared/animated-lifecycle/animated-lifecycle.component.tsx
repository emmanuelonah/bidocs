import React from 'react';
import styled from 'styled-components';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'AnimateLifeCycle';

type PrimitiveSpanProps = React.ComponentPropsWithoutRef<'span'>;
type AnimatedLifeCycleElement = React.ElementRef<'span'>;
interface AnimatedLifeCycleProps extends PrimitiveSpanProps {
  containerRef: React.MutableRefObject<HTMLElement>;
  children: React.ReactNode;
}

const Container = styled.span`
  & .mounting {
  }

  & .updating {
  }

  & .unmounting {
  }
`;

const AnimateLifeCycle = React.forwardRef<AnimatedLifeCycleElement, AnimatedLifeCycleProps>(
  ({ containerRef, children, ...restProps }, forwardedRef) => (
    <Container {...restProps} ref={forwardedRef}>
      {children}
    </Container>
  )
);

if (__dev__) {
  AnimateLifeCycle.displayName = DISPLAY_NAME;
}

export { AnimateLifeCycle };
