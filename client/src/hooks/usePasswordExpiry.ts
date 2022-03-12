import { useEffect } from 'react';

import { httpLogOut } from 'services';

function usePasswordExpiry<T extends () => any>(todoOnExpiry?: T) {
  const todaysDate = new Date();
  const expDate = new Date('2021-12-17T03:24:00');
  const isPasswordExpired = todaysDate >= expDate;

  useEffect(() => {
    if (isPasswordExpired) {
      todoOnExpiry?.();
      httpLogOut().then((res) => {
        console.log(res);
      });
    }
  }, [isPasswordExpired, todoOnExpiry]);
}

export { usePasswordExpiry };
