import { Route } from 'react-router-dom';

import { Router } from './components/router.component';
import { PrivateRoute } from 'components/shared';

const PATHS = {
  home: '/',
  login: '/login',
  myLab: '/my-lab',
  fallback: '/fallback',
  reactQueryHypothesis: '/hypothesis/react-query',
  reactQueryOptimisticUpdate: '/hypothesis/react-query/optimistic-update',
} as const;

const PAGE_PERMISSIONS = Object.freeze({
  myLab: 1,
});

function Routes() {
  return (
    <Router>
      <Route path={PATHS.login} element={<p>Welcome to login page</p>} />
      <Route path={PATHS.fallback} element={<p>Welcome to Fallback page</p>} />
      <Route
        path={PATHS.myLab}
        element={
          <PrivateRoute pagePermissions={PAGE_PERMISSIONS.myLab}>
            <p>Welcome to my Lab</p>
          </PrivateRoute>
        }
      />
    </Router>
  );
}

export { PATHS, Routes };
