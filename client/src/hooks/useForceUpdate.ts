import { useCallback, useState } from 'react';

function useForceUpdate() {
  const [, setState] = useState(Object.create(null));

  const forceUpdate = useCallback(() => {
    setState(Object.create(null));
  }, []);

  return forceUpdate;
}

export { useForceUpdate };
