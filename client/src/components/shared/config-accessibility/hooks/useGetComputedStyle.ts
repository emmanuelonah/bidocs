import React from 'react';

function useGetComputedStyle(key: string, fallbackValue?: string) {
  const [value, setValue] = React.useState('');

  const getCssRootProperty = React.useCallback(() => {
    const value = getComputedStyle(document.documentElement).getPropertyValue(key);

    setValue(value || (fallbackValue ?? value));
  }, [fallbackValue, key]);

  React.useEffect(() => {
    getCssRootProperty();
  }, [getCssRootProperty]);

  return value;
}

export { useGetComputedStyle };
