import { _cookies } from 'utils';
import { checkIsPermitted } from './check-is-permitted.util';

const defaultReturnValue = {
  isAuthorized: false,
  isAuthenticated: false,
  userPermissions: [],
  token: null,
  email: null,
};

interface Session {
  id: string;
  token: string;
  email: string;
  permissions: number[];
  [key: string]: any;
}

function useAuth(permittedPayload = 0) {
  const session = _cookies.getCookie<Session>('session');

  if (!session) return defaultReturnValue;

  const userPermissions = session.permissions;
  const email = session.email;
  const id = session.id;

  const isAuthorized = checkIsPermitted(userPermissions, permittedPayload);

  return { isAuthenticated: !!id, isAuthorized, userPermissions, email };
}

export { useAuth };
