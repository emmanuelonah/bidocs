import React from 'react';
import styled, { css } from 'styled-components';

import { useForm } from 'hooks';
import { composeEvent, __dev__ } from 'utils';
import { Portal, Input } from 'components/shared';
import { useAccessibility } from '../hooks/useAccessibility';
import { AccessibleIcon } from 'components/shared/accessible-icon/accessible-icon.component';

const FORM_ID = 'configUiForm';
const DISPLAY_NAME = 'ConfigUi';
const DEFAULT_LANG_ID = 'engLg';

const ConfigUiForm = styled.form`
  & input[type='submit'] {
    background-color: #fff;
    padding: 10px;

    &:hover {
      background-color: #eee;
    }
  }
`;

const Aside = styled.aside`
  position: absolute;
  z-index: 2000;
  top: 0;
  right: 0;
  min-height: 100vh;
  max-height: 100vh;
  width: 90%;
  max-width: 650px;
  background-color: #000;
  color: ${(props) => props.theme.colors.white.semi};
  padding: 10px 20px;
  overflow-y: scroll;
  overflow-x: hidden;
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
  background-color: #fff;
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

  & input {
    padding: 5px;
  }
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
  transition: all 1s ease-in-out;
  padding: 5px;
  width: 30px;
  height: 30px;

  &:hover {
    background-color: #fff;
    border-radius: 50%;

    & > * {
      color: #000;
      background-color: red;
    }
  }
`;

type InputName = 'selectedLanguage' | 'bgColor' | 'headingColor' | 'paragraphColor' | 'htmlFontSize' | 'lineSpacing' | 'wordSpacing';
type PrimitiveAsideProps = React.ComponentPropsWithoutRef<'aside'>;
type ConfigUiElement = React.ElementRef<'aside'>;
interface ConfigAccessibilityProps extends PrimitiveAsideProps {
  shown: boolean;
  onClose: React.MouseEventHandler;
}

const ConfigUi = React.forwardRef<ConfigUiElement, ConfigAccessibilityProps>(({ shown, onClose, ...restProp }, forwardedRef) => {
  const configUiFormRef = React.useRef<HTMLFormElement>(null);
  const formData = useForm();
  const {
    data: { languages, inputs, configs },
    dispatch: { onConfigChange },
  } = useAccessibility();

  if (!shown) return null;

  return (
    <Portal>
      <Aside {...restProp} ref={forwardedRef}>
        <ConfigUiForm
          id={FORM_ID}
          ref={configUiFormRef}
          onSubmit={(ev) => {
            ev.preventDefault();
            const values = [...formData(configUiFormRef as React.MutableRefObject<HTMLFormElement>).entries()];
            console.log(values);
          }}
        >
          <RowOne>
            <AccessibleIcon label="Click to close configuration modal">
              <CloseButton onClick={onClose}>&#10005;</CloseButton>
            </AccessibleIcon>
            <LanguageSelector
              name="selectedLanguage"
              defaultValue={languages.find((lang) => lang.id === DEFAULT_LANG_ID)?.value}
              onChange={onConfigChange}
            >
              {languages.map((lang) => (
                <option key={lang.id} value={lang.value}>
                  {lang.text}
                </option>
              ))}
            </LanguageSelector>
          </RowOne>

          <RowTwo>
            <RowTitle>Color Adjustment</RowTitle>
            {inputs.color.map((input) => (
              <label key={input.id} htmlFor={input.id}>
                {input.label}
                <Input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  value={configs[input.name as InputName]}
                  onChange={composeEvent(
                    (ev) => {
                      onConfigChange(ev as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
                    },
                    (ev) => {
                      input.onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
                    }
                  )}
                />
              </label>
            ))}
          </RowTwo>

          <RowThree>
            <RowTitle>Font Adjustment</RowTitle>
            {inputs.font.map((input) => (
              <label key={input.id} htmlFor={input.id}>
                {input.label}
                <Input
                  type={input.type}
                  id={input.id}
                  name={input.name}
                  inputMode="numeric"
                  value={configs[input.name as InputName]}
                  onChange={composeEvent(
                    (ev) => {
                      onConfigChange(ev as React.ChangeEvent<HTMLInputElement | HTMLSelectElement>);
                    },
                    (ev) => {
                      input.onChange?.(ev as React.ChangeEvent<HTMLInputElement>);
                    }
                  )}
                />
              </label>
            ))}
          </RowThree>
          <input type="submit" value="CONSOLE RESULT" />
        </ConfigUiForm>
      </Aside>
    </Portal>
  );
});

if (__dev__) {
  ConfigUi.displayName = DISPLAY_NAME;
}

export { ConfigUi };
