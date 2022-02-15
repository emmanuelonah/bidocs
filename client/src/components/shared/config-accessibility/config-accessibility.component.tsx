import React from 'react';
import styled from 'styled-components';

import { Portal } from '..';
import { useBoolean } from 'hooks';
import { IcnHuman } from './assets/icn-human.svg';
import { AccessibleIcon } from '../accessible-icon/accessible-icon.component';
import { ConfigUi } from './components/config-ui.component';

// https://www.zara.com/ee/en/

const IconWrapper = styled.div``;

type PrimitiveAsideProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigAccessibilityElement = React.ElementRef<'aside'>;

interface ConfigAccessibilityProps extends PrimitiveAsideProps {
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
        <ConfigUi {...restProps} ref={forwardedRef} shown={shownConfigUi} />
      </>
    );
  }
);

export { ConfigAccessibility };
