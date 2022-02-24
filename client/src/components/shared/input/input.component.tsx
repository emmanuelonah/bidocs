import React from 'react';

type PrimitiveInputProps = React.ComponentPropsWithoutRef<'input'>;
type InputElement = React.ElementRef<'input'>;
interface InputProps extends PrimitiveInputProps {}

const Input = React.forwardRef<InputElement, InputProps>((props, forwardedRef) => <input {...props} ref={forwardedRef} />);

export { Input };
