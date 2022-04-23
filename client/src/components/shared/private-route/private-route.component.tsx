import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATHS } from 'routes';
import { useAuth } from 'hooks';

type PrivateRouteProps = {
  pagePermissions: number;
  children: React.ReactElement;
};

function PrivateRoute(props: PrivateRouteProps) {
  const auth = useAuth(props.pagePermissions);

  if (!auth.isAuthorized) {
    return <Navigate to={`${auth.isAuthenticated ? PATHS.home : PATHS.login}`} replace />;
  }

  return props.children;
}

export { PrivateRoute };
