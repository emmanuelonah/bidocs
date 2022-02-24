import React, { ReactElement } from 'react';

import { __dev__ } from 'utils';
import { VisuallyHidden } from '..';

const DISPLAY_NAME = 'AccessibleIcon';

type PrimitiveVisuallyHiddenProps = React.ComponentPropsWithoutRef<typeof VisuallyHidden>;
type AccessibleIconElement = React.ElementRef<typeof VisuallyHidden>;
interface AccessibleIconProps extends PrimitiveVisuallyHiddenProps {
  label: React.ReactNode;
  children: ReactElement;
}

const AccessibleIcon = React.forwardRef<AccessibleIconElement, AccessibleIconProps>((props, forwardedRef) => {
  const { label, children, ...restProps } = props;
  const child = React.Children.only(children);

  return (
    <>
      {React.cloneElement(child, { 'aria-hidden': 'true', focusable: 'false' })}
      <VisuallyHidden {...restProps} ref={forwardedRef}>
        {label}
      </VisuallyHidden>
    </>
  );
});

if (__dev__) {
  AccessibleIcon.displayName = DISPLAY_NAME;
}

export { AccessibleIcon };
