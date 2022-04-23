import React from 'react';
import styled from 'styled-components';

import { useContext, Type, TYPE_META } from './modal.impl';

export interface HeaderProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const Container = styled.h1`
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ColumnLeft = styled.div``;

const ColumnRight = styled.button<{ variant: Type }>`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.5s ease-out;
  padding: 0.3125rem;
  width: 1.5625rem;
  height: 1.5625rem;

  &:hover {
    border-radius: 50%;
    background-color: ${(props) => props.theme.colors[TYPE_META[props.variant].colorKey].light};
  }
`;

function Header(props: HeaderProps) {
  const { type, onClose } = useContext();

  return (
    <Container>
      <ColumnLeft>{props.children}</ColumnLeft>
      <ColumnRight variant={type} onClick={onClose}>
        &#10005;
      </ColumnRight>
    </Container>
  );
}

export default Header;
