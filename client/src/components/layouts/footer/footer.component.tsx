import React from 'react';
import styled from 'styled-components';

const FooterNode = styled.footer`
  text-align: center;
  color: #a3b4c7;
  font-weight: 100;
  font-size: 0.75rem;
  padding: 1rem 0;
  margin: 0 auto;
  width: 100%;
`;

type FooterProps = {
  children?: React.ReactNode;
  right?: React.ReactElement;
  left?: React.ReactElement;
};

function Footer(props: FooterProps) {
  return (
    <FooterNode>
      {props.left}
      {props.children ?? <span>Bidocs &copy;{new Date().getFullYear()} All Rights Reserved</span>}
      {props.right}
    </FooterNode>
  );
}

export { Footer };
