import { useRef, useEffect } from 'react';

function useTitle(title: string) {
  const prevTitle = useRef('');

  useEffect(() => {
    prevTitle.current = document.title;

    document.title = `${prevTitle.current} | ${title}`;

    return function resetTitle() {
      document.title = prevTitle.current;
    };
  }, [title]);
}

export { useTitle };
