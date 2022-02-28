import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';

import { Input } from '..';
import { __dev__ } from 'utils';
import { useUniqueIds } from 'hooks';

const DISPLAY_NAME = 'ClipboardCopy';

const Action = styled.button<{ isCopied: boolean }>`
  cursor: ${(props) => (props.isCopied ? 'not-allowed' : 'copy')};
  & > input {
    display: none;
  }
`;

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type ClipboardCopyElement = React.ElementRef<'button'>;
interface ClipboardCopyProps extends PrimitiveButtonProps {
  value: string;
  copyText: string;
}

const ClipboardCopy = React.forwardRef<ClipboardCopyElement, ClipboardCopyProps>((props, forwardedRef) => {
  const { value, copyText, ...restProps } = props;
  const [copyInputId] = useUniqueIds(1);
  const copyInputRef = useRef<HTMLInputElement>(null!);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // once value is neither undefined OR null then we set it to the value of input
    if (value != undefined) {
      copyInputRef.current.value = value;
    }
  }, [value]);

  function onHandleCopy() {
    if (!copyInputRef.current) return;

    copyInputRef.current.select();
    copyInputRef.current.setSelectionRange(0, 99999); /* For mobile devices */

    try {
      navigator.clipboard.writeText(copyInputRef.current.value).then(
        () => {
          setIsCopied(true);
        },
        () => {
          setIsCopied(false);
        }
      );
    } catch (error) {
      setIsCopied(false);

      if (__dev__) {
        console.group('CLIPBOARD COPY ERROR');
        console.error(`Error ${error}`);
        console.groupEnd();
      }
    }
  }

  return (
    <Action {...restProps} ref={forwardedRef} type="button" onClick={onHandleCopy} isCopied={isCopied}>
      <Input type="text" ref={copyInputRef} id={copyInputId} defaultValue={value} readOnly />
      {copyText}
    </Action>
  );
});

if (__dev__) {
  ClipboardCopy.displayName = DISPLAY_NAME;
}

export { ClipboardCopy };
