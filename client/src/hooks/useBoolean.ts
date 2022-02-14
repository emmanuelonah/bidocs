import { useState, useCallback } from 'react';

function useBoolean(initialValue?: boolean) {
  const [value, setValue] = useState(initialValue ?? false);

  const falsify = useCallback(() => {
    setValue(false);
  }, []);

  const truthify = useCallback(() => {
    setValue(true);
  }, []);

  function toggle() {
    setValue((prev) => !prev);
  }

  return {
    value,
    dispatch: {
      falsify,
      truthify,
      toggle,
    },
  };
}

export { useBoolean };
