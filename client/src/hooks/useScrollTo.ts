import { useEffect } from 'react';

function useScrollTo(element: Element, xCoord: number, yCoord: number, automaticScroll?: boolean) {
  useEffect(() => {
    if (automaticScroll) {
      element.scrollTo(xCoord, yCoord);
    }
  }, [automaticScroll, element, xCoord, yCoord]);

  function dispatch() {
    element.scrollTo(xCoord, yCoord);
  }

  return dispatch;
}

export { useScrollTo };
