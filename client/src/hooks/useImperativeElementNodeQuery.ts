import { useCallback } from 'react';

function useImperativeElementNodeQuery(elementNodeLocator:string) {
  const element = (useCallback(() => {
    const queriedNode = document.querySelectorAll(elementNodeLocator);

    if (queriedNode.length === 1) {
      return queriedNode[0];
    }

    return queriedNode;
  }, [elementNodeLocator]))();

  return element;
}

export {
  useImperativeElementNodeQuery
};
