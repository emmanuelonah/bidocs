import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import BreadcrumbsImp from 'components/shared/breadcrumbs';

import { ConfigAccessibility } from 'components/shared';
import { ReactQuery } from 'components/pages';

const PATHS = {
  home: '/',
  reactQueryHypothesis: '/hypothesis/react-query',
  reactQueryOptimisticUpdate: '/hypothesis/react-query/optimistic-update',
} as const;

function Test() {
  return (
    <>
      <p>Welcome home</p>
    </>
  );
}

function Routes() {
  return (
    <BrowserRouter>
      <ConfigAccessibility />
      <BreadcrumbsImp.Root>
        <BreadcrumbsImp.Breadcrumbs>
          <Switch>
            <Route path={PATHS.home} element={<Test />} />
            <Route path={PATHS.reactQueryHypothesis} element={<ReactQuery />} />
            <Route path="*" element={<Test />} />
          </Switch>
        </BreadcrumbsImp.Breadcrumbs>
      </BreadcrumbsImp.Root>
    </BrowserRouter>
  );
}

export { Routes };
