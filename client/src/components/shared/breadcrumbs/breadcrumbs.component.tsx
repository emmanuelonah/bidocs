/* eslint-disable no-undef */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Portal } from 'components/shared';
import { useImperativeElementNodeQuery } from 'hooks';
import { useBreadCrumbsContext } from './breadcrumbs.imp';

const Wrapper = styled.nav`
  & ol {
    display: flex;

    & > li {
      padding: 0 0.3rem;
    }
  }
`;

type BreadcrumbsProps = {
  children: React.ReactElement | React.ReactElement[];
};

function Breadcrumbs(props: BreadcrumbsProps) {
  const { from, to } = useBreadCrumbsContext();
  const headerEl = useImperativeElementNodeQuery('header') as NodeListOf<Element>;
  const appRootElement = useImperativeElementNodeQuery(() =>
    headerEl.length ? 'header' : '#appRoot'
  );

  return (
    <>
      <Portal insertBeforeElement={appRootElement as HTMLElement}>
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
