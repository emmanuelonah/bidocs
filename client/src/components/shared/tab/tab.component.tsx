import React from 'react';

import { useUniqueIds } from 'hooks';
import { createContext, __dev__ } from 'utils';

const DISPLAY_NAME = 'Tab';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type TabElement = React.ElementRef<'div'>;
interface TabProps extends PrimitiveDivProps {
  isPreselected?: boolean;
  children: React.ReactElement[];
}
type TabContextType = {
  controlId: string;
  panelId: string;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
};

const [TabProvider, useTabContext] = createContext<TabContextType>('TabContext');

export { useTabContext };

const Tab = React.forwardRef<TabElement, TabProps>((props, forwardedRef) => {
  const { isPreselected, children, ...restProps } = props;
  const [controlId, panelId] = useUniqueIds(2);
  const [isSelected, setIsSelected] = React.useState(() => isPreselected ?? false);

  const tabContextValue = React.useMemo(
    () => ({
      controlId,
      panelId,
      isSelected,
      setIsSelected,
    }),
    [controlId, isSelected, panelId]
  );

  return (
    <TabProvider value={tabContextValue}>
      <div {...restProps} ref={forwardedRef}>
        {children}
      </div>
    </TabProvider>
  );
});

if (__dev__) {
  Tab.displayName = DISPLAY_NAME;
}

export default Tab;
