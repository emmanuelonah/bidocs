import { CSSProperties } from 'react';

function useVisuallyHidden(props?: CSSProperties): { style: CSSProperties } {
  return {
    style: {
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
      ...(props ?? {}),
    },
  };
}

export { useVisuallyHidden };
