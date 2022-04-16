import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';

import { ConfigAccessibility } from 'components/shared';
import { ReactQuery, OptimisticUpdate, AdminHomePage, UserHomePage } from 'components/pages';

const PATHS = {
  userHome: '/',
  adminHome: '/admin',
  reactQueryHypothesis: '/hypothesis/react-query',
  reactQueryOptimisticUpdate: '/hypothesis/react-query/optimistic-update',
} as const;

function Routes() {
  return (
    <BrowserRouter>
      <ConfigAccessibility />
      <Switch>
        <Route path={PATHS.userHome} element={<UserHomePage />} />
        <Route path={PATHS.adminHome} element={<AdminHomePage />} />
        <Route path={PATHS.reactQueryHypothesis} element={<ReactQuery />} />
        <Route path={PATHS.reactQueryOptimisticUpdate} element={<OptimisticUpdate />} />
      </Switch>
    </BrowserRouter>
  );
}

export { Routes, PATHS };
