import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Portal } from 'components/shared';
import { useBreadCrumbsContext } from './breadcrumbs.imp';

const Wrapper = styled.nav``;

type BreadcrumbsProps = {
  children: React.ReactElement | React.ReactElement[];
};

function Breadcrumbs(props: BreadcrumbsProps) {
  const { from, to } = useBreadCrumbsContext();

  console.log({ from, to });

  return (
    <>
      <Portal>
        <Wrapper aria-label="Breadcrumb">
          <ol>
            <li>
              <NavLink to={from}>{from}</NavLink>
            </li>
            <li>
              <NavLink to={to} aria-current="page">
                {to}
              </NavLink>
            </li>
          </ol>
        </Wrapper>
      </Portal>
      {props.children}
    </>
  );
}

export { Breadcrumbs };
