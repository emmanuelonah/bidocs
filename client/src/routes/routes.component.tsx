import { BrowserRouter, Route, Routes as Switch, useNavigate } from 'react-router-dom';

import BreadcrumbsImp from 'components/shared/breadcrumbs';

import { ConfigAccessibility } from 'components/shared';
import { ReactQuery, OptimisticUpdate } from 'components/pages';

const PATHS = {
  home: '/',
  reactQueryHypothesis: '/hypothesis/react-query',
  reactQueryOptimisticUpdate: '/hypothesis/react-query/optimistic-update',
} as const;

function Test() {
  const navigate = useNavigate();

  return (
    <>
      <p>Welcome home</p>
      <button
        type="button"
        onClick={() => {
          navigate(PATHS.reactQueryHypothesis);
        }}
      >
        Go to Hypothesis lab
      </button>
    </>
  );
}

function Fallback() {
  return <p>PAGE NOT FOUND</p>;
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
            <Route path={PATHS.reactQueryOptimisticUpdate} element={<OptimisticUpdate />} />
            <Route path="*" element={<Fallback />} />
          </Switch>
        </BreadcrumbsImp.Breadcrumbs>
      </BreadcrumbsImp.Root>
    </BrowserRouter>
  );
}

export { Routes, PATHS };
