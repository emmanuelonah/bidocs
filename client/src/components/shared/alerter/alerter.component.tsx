import React from 'react';
import styled from 'styled-components';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'Alert';

const Container = styled.div`
  border: solid 1px;
  border-radius: 0.2rem;
  cursor: text;
  padding: 0.5rem;
  width: 100%;

  &[data-variant='success'] {
    background-color: #d4edda;
    border-color: #c3e6cb;
    color: #205f2e;
  }

  &[data-variant='warning'] {
    background-color: #fff3cd;
    border-color: #ffeeba;
    color: #8d6e11;
  }

  &[data-variant='danger'] {
    background-color: #f8d7da;
    border-color: #f5c6cb;
    color: #721c24;
  }
`;

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type AlertElement = React.ElementRef<'div'>;
interface AlertProps extends PrimitiveDivProps {
  type: 'success' | 'warning' | 'danger';
}

const Alerter = React.forwardRef<AlertElement, AlertProps>(
  ({ type, ...restProps }, forwardedRef) => (
    <Container {...restProps} ref={forwardedRef} role="alert" data-variant={type} />
  )
);

if (__dev__) {
  Alerter.displayName = DISPLAY_NAME;
}

export { Alerter };
