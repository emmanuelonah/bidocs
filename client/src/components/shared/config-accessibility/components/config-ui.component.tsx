import React from 'react';
import styled, { css } from 'styled-components';

import { __dev__ } from 'utils';
import { useUniqueIds } from 'hooks';
import { Portal, Input } from 'components/shared';
import { useAccessibility } from '../hooks/useAccessibility';
import { AccessibleIcon } from 'components/shared/accessible-icon/accessible-icon.component';

const DISPLAY_NAME = 'ConfigUi';

const DEFAULT_LANG_ID = 'engLg';

const Aside = styled.aside`
  position: absolute;
  z-index: 2000;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  width: 90%;
  max-width: 650px;
  background-color: #000;
  color: ${(props) => props.theme.colors.white.semi};
  padding: 10px 20px;
`;

const Section = styled.section`
  margin-bottom: 2rem;
  & > * {
    display: block;
  }

  & label {
    font-size: 0.7rem;
    font-weight: ${(props) => props.theme.font.fontWeights[4]};
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  & input {
    width: 100%;
  }

  input[type='color'] {
    cursor: pointer;
  }
`;

const SectionCss = css`
  border: solid 1px ${(props) => props.theme.colors.white.semi};
  border-radius: 5px;
  padding: 10px;
`;

const RowOne = styled(Section)`
  display: flex;
  justify-content: space-between;
`;

const RowTwo = styled(Section)`
  ${SectionCss}
`;

const RowThree = styled(Section)`
  ${SectionCss}
`;

const RowTitle = styled.h3`
  font-weight: ${(props) => props.theme.font.fontWeights[3]};
  font-size: 0.8rem;
`;

const LanguageSelector = styled.select`
  border: solid 2px #333;
  border-radius: 5px;
  width: 50%;
  max-width: 200px;
  padding: 5px;
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: 0;
  color: ${(props) => props.theme.colors.white.semi};
`;

type PrimitiveAsideProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigUiElement = React.ElementRef<'aside'>;

interface ConfigAccessibilityProps extends PrimitiveAsideProps {
  shown: boolean;
  onClose: React.MouseEventHandler;
}

const ConfigUi = React.forwardRef<ConfigUiElement, ConfigAccessibilityProps>(({ shown, onClose, ...restProp }, forwardedRef) => {
  const [colorInputId] = useUniqueIds(1);
  const {
    data: { languages },
  } = useAccessibility();

  if (!shown) return null;

  return (
    <Portal>
      <Aside {...restProp} ref={forwardedRef}>
        <RowOne>
          <CloseButton onClick={onClose}>
            <AccessibleIcon label="Click to close configuration modal">
              <>&#10005;</>
            </AccessibleIcon>
          </CloseButton>

          <LanguageSelector defaultValue={languages.find((lang) => lang.id === DEFAULT_LANG_ID)?.value}>
            {languages.map((lang) => (
              <option key={lang.id} value={lang.value}>
                {lang.text}
              </option>
            ))}
          </LanguageSelector>
        </RowOne>

        <RowTwo>
          <RowTitle>Color Adjustment</RowTitle>
          <Input type="color" id={colorInputId} label="Change background" />
        </RowTwo>

        <RowThree>
          <RowTitle>Font Adjustment</RowTitle>
        </RowThree>
      </Aside>
    </Portal>
  );
});

if (__dev__) {
  ConfigUi.displayName = DISPLAY_NAME;
}

export { ConfigUi };
