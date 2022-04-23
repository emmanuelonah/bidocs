import React from 'react';
import styled, { keyframes } from 'styled-components';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'SkeletonUI';

const transition = keyframes`
  from { background-color: #e2e2e2;}
  50% { background-color: #f3f3f3;}
  to { background-color: #e2e2e2;}
`;

const DEFAULT_VARIANTS = {
  block: {
    width: '100%',
    height: '1.25rem',
    borderRadius: '0',
  },
  radius: {
    width: '100%',
    height: '1.25rem',
    borderRadius: '0.3125rem',
  },
  round: {
    height: '6.25rem',
    width: '6.25rem',
    borderRadius: '50%',
  },
};

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type SkeletonUIElement = React.ElementRef<'div'>;

interface SkeletonUIProps extends PrimitiveDivProps {
  width?: string;
  height?: string;
  shape?: 'block' | 'radius' | 'round';
}

const Container = styled.div<SkeletonUIProps>`
  width: ${(props) => props.width ?? DEFAULT_VARIANTS[props.shape ?? 'radius'].width};
  height: ${(props) => props.height ?? DEFAULT_VARIANTS[props.shape ?? 'radius'].height};
  border-radius: ${(props) => DEFAULT_VARIANTS[props.shape ?? 'radius'].borderRadius};
  animation: ${transition} 1.5s infinite;
  margin-bottom: 0.625rem;
`;

const SkeletonUI = React.forwardRef<SkeletonUIElement, SkeletonUIProps>((props, forwardedRef) => (
  <Container ref={forwardedRef} {...props} />
));

if (__dev__) {
  SkeletonUI.displayName = DISPLAY_NAME;
}

export { SkeletonUI };
