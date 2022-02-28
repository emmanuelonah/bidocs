import React from 'react';
import styled from 'styled-components';

import { Portal } from '..';
import { __dev__ } from 'utils';
import { useBoolean } from 'hooks';
import { IcnHuman } from './assets/icn-human.svg';
import { ConfigUi } from './components/config-ui.component';
import { AccessibleIcon } from '../accessible-icon/accessible-icon.component';

const DISPLAY_NAME = 'ConfigAccessibility';

const IconWrapper = styled.div`
  background-color: #000;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.4s ease-out;
  position: absolute;
  z-index: 10000;
  right: 1rem;
  bottom: 3rem;

  &:hover {
    border: solid 1px #fff;
    box-shadow: 0 0 0 4px rgba(51, 51, 51, 0.2);
  }
`;

type PrimitiveAsideProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigAccessibilityElement = React.ElementRef<'aside'>;
interface ConfigAccessibilityProps extends PrimitiveAsideProps {
  shownConfigUiOnRender?: boolean;
}

const ConfigAccessibility = React.forwardRef<ConfigAccessibilityElement, ConfigAccessibilityProps>(
  ({ shownConfigUiOnRender, ...restProps }, forwardedRef) => {
    const { value: shownConfigUi, dispatch } = useBoolean(shownConfigUiOnRender);

    return (
      <>
        <Portal elementType="accessibilityconfig">
          <IconWrapper
            role="button"
            tabIndex={0}
            onClick={React.useCallback(() => {
              dispatch.toggle();
            }, [dispatch])}
          >
            <AccessibleIcon label="Click to configure your accessibility features">
              <IcnHuman fill="#fff" />
            </AccessibleIcon>
          </IconWrapper>
        </Portal>
        <ConfigUi
          {...restProps}
          ref={forwardedRef}
          shown={shownConfigUi}
          onClose={() => {
            dispatch.falsify();
          }}
        />
      </>
    );
  }
);

if (__dev__) {
  ConfigAccessibility.displayName = DISPLAY_NAME;
}
export { ConfigAccessibility };
