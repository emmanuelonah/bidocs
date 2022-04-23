import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PATHS } from 'routes';
import IconEmmanuelOnah from 'assets/images/icn-emmanuelonah.png';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'IconLogo';

const Container = styled(Link)`
  background-color: ${(props) => props.theme.colors.black.dark};
  border-radius: 50%;
  border: solid 3px rgba(160, 155, 155, 0.4);
  color: ${(props) => props.theme.colors.white.light};
  padding: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'a'>;
type ElementIconLogo = React.ElementRef<'a'>;

interface IconLogoProps extends PrimitiveDivProps {}

const IconLogo = React.forwardRef<ElementIconLogo, IconLogoProps>((props, forwardedRef) => (
  <Container to={PATHS.home} {...props} ref={forwardedRef}>
    <img src={IconEmmanuelOnah} alt="" />
  </Container>
));

if (__dev__) {
  IconLogo.displayName = DISPLAY_NAME;
}

export { IconLogo };
