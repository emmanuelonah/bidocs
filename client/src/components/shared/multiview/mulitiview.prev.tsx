import React from 'react';

import { __dev__, composeEvents } from 'utils';

const DISPLAY_NAME = 'Prev';

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type PrevElement = React.ElementRef<'button'>;
interface PrevProps extends PrimitiveButtonProps {
  data: any[];
  currentDataIndex: number;
  setCurrentDataIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const Prev = React.forwardRef<PrevElement, PrevProps>(
  ({ data, currentDataIndex, setCurrentDataIndex, onClick, ...restProps }, forwardedRef) => {
    const onClickHandler = React.useCallback(() => {
      setCurrentDataIndex((prev) => prev - 1);
    }, [setCurrentDataIndex]);

    return (
      <button
        type="button"
        {...restProps}
        ref={forwardedRef}
        disabled={!data.length || !currentDataIndex}
        onClick={composeEvents(onClickHandler, onClick)}
      />
    );
  }
);

if (__dev__) {
  Prev.displayName = DISPLAY_NAME;
}
