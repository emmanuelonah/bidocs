import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { Portal } from 'components/shared';
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

/** ***********************************************
 * Pattern: Portal appending pattern
 * desc: still under construction, the idea
 * is to use in-singleton memory for the storage
 * and <Portal/> for dynamic navigation appending,
 * still experimenting this pattern
 */

function Breadcrumbs(props: BreadcrumbsProps) {
  const { from, to } = useBreadCrumbsContext();

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
