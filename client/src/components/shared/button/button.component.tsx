import styled from 'styled-components';

const SHAPES = {
  block: '0',
  radius: '12px',
  round: '50%',
};

type ComposedButtonProps = {
  level?: 'dark' | 'semi' | 'light';
  shape?: 'radius' | 'round' | 'block';
};

const Button = styled.button<ComposedButtonProps>`
  font-size: minmax(1rem, 1.5rem);
  font-weight: ${(props) => props.theme.font.fontWeights[3]};
  padding: 0.6875rem;
  min-width: ${(props) => (props.shape === 'round' ? '3.125rem' : '100%')};
  height: ${(props) => (props.shape === 'round' ? '3.125rem' : 'auto')};
  min-height: 2.5625rem;
  cursor: pointer;
  border: none;
  border-radius: ${(props) => SHAPES[props.shape ?? 'block']};
  transition: all 0.5s ease-out;
  width: 100%;
`;

Button.defaultProps = {
  level: 'dark',
};

/** **********************************
 * @BlueButton Blue button variation
 ************************************ */
const BLUE_COLOR_KEYS = {
  dark: 'blueDark',
  semi: 'blueSemi',
  light: 'blueLight',
};

const BlueButton = styled(Button)`
  background-color: ${(props) => props.theme.colors.blue[props.level ?? 'dark']};
  color: ${(props) => props.theme.colors.textColorsFor[BLUE_COLOR_KEYS[props.level ?? 'dark']]};

  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:active {
    background-color: ${(props) => props.theme.colors.blue.light};
    color: ${(props) => props.theme.colors.textColorsFor.light};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

/** **********************************
 * @BlueButton Dark button variation
 ************************************ */
const DarkButton = styled(Button)`
  background-color: #333;
  color: ${(props) => props.theme.colors.white.light};
  border: solid 1px transparent;
  transition: all 0.4s ease-out;

  &:hover,
  &:focus {
    border-color: #bbbbbb;
    box-shadow: 0 0 0 3px rgba(34, 31, 31, 0.4);
  }

  &:active {
    background-color: ${(props) => props.theme.colors.blue.light};
    color: ${(props) => props.theme.colors.textColorsFor.light};
  }

  &:disabled {
    opacity: 0.3;
  }
`;

export { Button, BlueButton, DarkButton };
