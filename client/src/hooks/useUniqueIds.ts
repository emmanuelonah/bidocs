import { useRef } from 'react';
import uniqid from 'uniqid';

import { throwError } from 'utils';

function useUniqueIds(count: number) {
  if (count < 1) {
    throwError('useUniqueIdsError', 'argument must be greater than zero', useUniqueIds);
  }

  const roundedCount = Math.floor(count);
  const uniqueIds = useRef([...new Array(roundedCount)].map(() => uniqid())).current;

  return uniqueIds;
}

export { useUniqueIds };
