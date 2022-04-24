import React from 'react';

import { useArraySize } from 'hooks';
import { composeEvents, __dev__ } from 'utils';

const DISPLAY_NAME = 'Next';

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type NextElement = React.ElementRef<'button'>;
interface NextProps extends PrimitiveButtonProps {
  data: any[];
  currentDataIndex: number;
  setCurrentDataIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Next = React.forwardRef<NextElement, NextProps>(
  ({ data, currentDataIndex, setCurrentDataIndex, onClick, disabled, ...restProps }, forwardedRef) => {
    const getArrayBaseSize = useArraySize();
    const onClickHandler = React.useCallback(() => {
      setCurrentDataIndex((prev) => prev + 1);
    }, [setCurrentDataIndex]);

    return (
      <button
        type="button"
        {...restProps}
        ref={forwardedRef}
        disabled={disabled || currentDataIndex === getArrayBaseSize(data.length)}
        onClick={composeEvents(onClickHandler, onClick)}
      />
    );
  }
);

if (__dev__) {
  Next.displayName = DISPLAY_NAME;
}
