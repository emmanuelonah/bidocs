import React from 'react';

import { __dev__ } from 'utils';
import { useTabContext } from '../tab.component';

const DISPLAY_NAME = 'TabControl';

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type TabControlElement = React.ElementRef<'button'>;

interface TabControlProps extends PrimitiveButtonProps {}

const TabControl = React.forwardRef<TabControlElement, TabControlProps>((props, forwardedRef) => {
  const { controlId, panelId, isSelected } = useTabContext();

  return (
    <button
      {...props}
      type="button"
      role="tab"
      id={controlId}
      aria-controls={panelId}
      aria-selected={isSelected}
      tabIndex={isSelected ? 0 : -1}
      ref={forwardedRef}
    />
  );
});

if (__dev__) {
  TabControl.displayName = DISPLAY_NAME;
}

export { TabControl };
