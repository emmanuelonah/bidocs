import React from 'react';
import styled from 'styled-components';

import { __dev__ } from 'utils';
import Body, { BodyProps } from './modal.body';
import Header, { HeaderProps } from './modal.header';
import Footer, { FooterProps } from './modal.footer';
import { ModalImpl, Type, TYPE_META } from './modal.impl';

const DISPLAY_NAME = 'Modal';

const Container = styled.div<{ type: Type }>`
  background-color: ${(props) => props.theme.colors[TYPE_META[props.type].colorKey].semi};
  color: ${(props) => props.theme.colors[TYPE_META[props.type].colorKey].dark};
  border: 0.0625rem solid ${(props) => TYPE_META[props.type].borderColor};
  border-radius: 0.3125rem;
  padding: 0.3125rem 0.9375rem;
  width: 90%;
  max-width: 20.75rem;
  min-height: 4.5625rem;
  z-index: 2000;
  margin: 0 auto;

  &.modal--top-center {
    position: fixed;
    top: 0.625rem;
    left: 0;
    right: 0;
  }

  &.modal--top-right {
    position: fixed;
    top: 0;
    right: 1.25rem;
  }

  &.modal--top-left {
    position: fixed;
    top: 0;
    left: 1.25rem;
  }

  &.modal--bottom-center {
    position: fixed;
    bottom: 0.625rem;
    left: 0;
    right: 0;
  }

  &.modal--bottom-right {
    position: fixed;
    bottom: 0;
    right: 1.25rem;
  }

  &.modal--bottom-left {
    position: fixed;
    bottom: 0;
    left: 1.25rem;
  }
`;

type ComposedModalProps = {
  Header: React.FC<HeaderProps>;
  Body: React.FC<BodyProps>;
  Footer: React.FC<FooterProps>;
};

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type ModalElement = React.ElementRef<'div'>;

interface ModalProps extends PrimitiveDivProps {
  shouldMount?: boolean;
  onClose?: React.MouseEventHandler;
  type?: Type;
  position?: 'top-center' | 'top-left' | 'top-right' | 'bottom-center' | 'bottom-left' | 'bottom-right';
}

const Modal: React.FC<ModalProps & { ref?: React.Ref<ModalElement> }> & ComposedModalProps = ({
  shouldMount,
  onClose,
  type,
  position,
  children,
  ref,
  ...restProps
}) => (
  <ModalImpl value={{ shouldMount, onClose, type }}>
    <Container {...restProps} ref={ref} className={`modal--${position}`} type={type ?? 'success'}>
      {children}
    </Container>
  </ModalImpl>
);

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

if (__dev__) {
  Modal.displayName = DISPLAY_NAME;
}

export default Modal;
