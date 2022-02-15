import React from 'react';
import styled from 'styled-components';

import { Portal } from '..';
import { useBoolean } from 'hooks';
import { IcnHuman } from './assets/icn-human.svg';
import { AccessibleIcon } from '../accessible-icon/accessible-icon.component';

const IconWrapper = styled.div``;

const Aside = styled.aside``;

type PrimitivePortalProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigAccessibilityElement = React.ElementRef<'aside'>;

interface ConfigAccessibilityProps extends PrimitivePortalProps {
  shownConfigUiOnRender?: boolean;
}

const ConfigAccessibility = React.forwardRef<ConfigAccessibilityElement, ConfigAccessibilityProps>(
  ({ shownConfigUiOnRender, ...restProps }, forwardedRef) => {
    const { value: shownConfigUi, dispatch } = useBoolean(shownConfigUiOnRender ?? false);

    return (
      <>
        <Portal>
          <IconWrapper
            role="button"
            tabIndex={0}
            onClick={React.useCallback(() => {
              dispatch.toggle();
            }, [dispatch])}
          >
            <AccessibleIcon label="Click to configure your accessibility features">
              <IcnHuman />
            </AccessibleIcon>
          </IconWrapper>
        </Portal>

        {shownConfigUi && (
          <Portal>
            <Aside {...restProps} ref={forwardedRef}>
              Testing
            </Aside>
          </Portal>
        )}
      </>
    );
  }
);

export { ConfigAccessibility };
