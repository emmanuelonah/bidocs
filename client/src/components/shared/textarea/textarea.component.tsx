import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'Textarea';

type PrimitiveTextarea = React.ComponentPropsWithoutRef<'textarea'>;
type TextareaElement = React.ElementRef<'textarea'>;
interface TextareaProps extends PrimitiveTextarea {}

const Textarea = React.forwardRef<TextareaElement, TextareaProps>((props, forwardedRef) => (
  <textarea {...props} ref={forwardedRef} />
));

if (__dev__) {
  Textarea.displayName = DISPLAY_NAME;
}

export { Textarea };
