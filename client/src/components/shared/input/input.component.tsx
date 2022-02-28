import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'Input';

type PrimitiveInputProps = React.ComponentPropsWithoutRef<'input'>;
type InputElement = React.ElementRef<'input'>;
interface InputProps extends PrimitiveInputProps {}

const Input = React.forwardRef<InputElement, InputProps>((props, forwardedRef) => <input {...props} ref={forwardedRef} />);

if (__dev__) {
  Input.displayName = DISPLAY_NAME;
}

export { Input };
