import React from 'react';

import { __dev__, composeEvents } from 'utils';
import { useTabContext } from '../tab.component';

const DISPLAY_NAME = 'TabControl';

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type TabControlElement = React.ElementRef<'button'>;

interface TabControlProps extends PrimitiveButtonProps {}

const TabControl = React.forwardRef<TabControlElement, TabControlProps>((props, forwardedRef) => {
  const { controlId, panelId, isSelected, setIsSelected } = useTabContext();

  return (
    <button
      {...props}
      ref={forwardedRef}
      type="button"
      role="tab"
      id={controlId}
      aria-controls={panelId}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      onClick={composeEvents(
        React.useCallback(() => {
          setIsSelected((preState) => !preState);
        }, [setIsSelected]),
        (ev) => {
          props.onClick?.(ev as React.MouseEvent<HTMLButtonElement>);
        }
      )}
    />
  );
});

if (__dev__) {
  TabControl.displayName = DISPLAY_NAME;
}

export { TabControl };
