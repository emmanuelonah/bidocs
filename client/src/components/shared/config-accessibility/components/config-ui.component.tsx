import React from 'react';
import styled from 'styled-components';

import { __dev__ } from 'utils';
import { Portal } from 'components/shared';

const DISPLAY_NAME = 'ConfigUi';

const Aside = styled.aside``;

type PrimitiveAsideProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigUiElement = React.ElementRef<'aside'>;

interface ConfigAccessibilityProps extends PrimitiveAsideProps {
  shown: boolean;
}

const ConfigUi = React.forwardRef<ConfigUiElement, ConfigAccessibilityProps>(({ shown, ...restProp }, forwardedRef) => {
  if (!shown) return null;

  return (
    <Portal>
      <Aside {...restProp} ref={forwardedRef}>
        Config Ui
      </Aside>
    </Portal>
  );
});

if (__dev__) {
  ConfigUi.displayName = DISPLAY_NAME;
}

export { ConfigUi };
