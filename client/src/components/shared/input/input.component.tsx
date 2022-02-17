import React from 'react';

type PrimitiveInputProps = React.ComponentPropsWithoutRef<'input'>;
type InputElement = React.ElementRef<'input'>;

interface InputProps extends PrimitiveInputProps {
  id: string;
  label?: string;
}

const Input = React.forwardRef<InputElement, InputProps>(({ id, label, ...restProps }, forwardedRef) => (
  <>
    {label && <label htmlFor={id}>{label}</label>}
    <input {...restProps} id={id} ref={forwardedRef} />
  </>
));

export { Input };
