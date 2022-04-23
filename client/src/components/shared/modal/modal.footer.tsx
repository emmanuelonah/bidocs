import React from 'react';
import styled from 'styled-components';

export interface FooterProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
}

const Container = styled.div`
  margin-top: 0.625rem;
`;

function Footer(props: FooterProps) {
  return <Container>{props.children}</Container>;
}

export default Footer;
