import { useRef, useEffect } from 'react';

function useTitle(title: string) {
  const prevTitle = useRef('');

  function resetTitle() {
    document.title = prevTitle.current;
  }

  useEffect(() => {
    prevTitle.current = document.title;
    document.title = `${prevTitle.current} | ${title}`;

    return resetTitle;
  }, [title]);

  return resetTitle;
}

export { useTitle };
