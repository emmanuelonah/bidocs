import React from 'react';

import { __dev__ } from 'utils';
import { useTabContext } from '../tab.component';

const DISPLAY_NAME = 'TabPanel';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type TabPanelElement = React.ElementRef<'div'>;

interface TabPanelProps extends PrimitiveDivProps {}

const TabPanel = React.forwardRef<TabPanelElement, TabPanelProps>((props, forwardedRef) => {
  const { panelId, controlId } = useTabContext();

  return (
    <div
      {...props}
      ref={forwardedRef}
      role="tabpanel"
      tabIndex={0}
      id={panelId}
      aria-labelledby={controlId}
    />
  );
});

if (__dev__) {
  TabPanel.displayName = DISPLAY_NAME;
}

export { TabPanel };
