import React from 'react';

import { __dev__ } from 'utils';
import Tab from '../tab.component';

const DISPLAY_NAME = 'TabList';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type TabListRef = React.ElementRef<'div'>;
interface TabListProps extends PrimitiveDivProps {
  label: string;
  children: typeof Tab | typeof Tab[];
}

const TabList = React.forwardRef<TabListRef, TabListProps>((props, forwardedRef) => {
  const { label, children, ...restProps } = props;

  return (
    <div {...restProps} ref={forwardedRef} role="tablist" aria-label={label}>
      {children}
    </div>
  );
});

if (__dev__) {
  TabList.displayName = DISPLAY_NAME;
}

export { TabList };
