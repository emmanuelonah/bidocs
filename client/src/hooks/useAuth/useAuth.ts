import { useState, useEffect } from 'react';

import { checkIsPermitted } from './check-is-permitted.util';

export function useAuth(permittedPayload: number) {
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    // Todo: take permissions from authenticated users data in cookies
    const permissions = [2, 3, 4, 5, 6, 7];
    setIsAuthorized(checkIsPermitted(permissions, permittedPayload));
  }, [permittedPayload]);

  return isAuthorized;
}
