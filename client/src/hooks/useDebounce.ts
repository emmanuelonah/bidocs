import { useEffect } from 'react';

function useDebounce(milliseconds: number, automaticPullSystem?: Function) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  useEffect(() => {
    let _timeout: ReturnType<typeof setTimeout>;

    if (automaticPullSystem) {
      _timeout = setTimeout(() => {
        automaticPullSystem();
      }, milliseconds);
    }

    return function clearTimeouts() {
      clearTimeout(_timeout);
      clearTimeout(timeout!);
    };
  }, [automaticPullSystem, milliseconds, timeout]);

  function debounce(cb: Function) {
    timeout = setTimeout(() => {
      cb();
    }, milliseconds);
  }

  return debounce;
}

export { useDebounce };
