import React from 'react';

import { createContext } from 'utils';
import { Portal } from 'components/shared';

const DISPLAY_NAME = 'ModalContext';

const TYPE_META = {
  success: {
    colorKey: 'green',
    borderColor: '#C3E6CB',
  },
  danger: {
    colorKey: 'red',
    borderColor: '#F5C6CB',
  },
  warning: {
    colorKey: 'yellow',
    borderColor: '#FFEEBA',
  },
};

export type Type = 'success' | 'warning' | 'danger';
type Context = {
  shouldMount: boolean;
  onClose: React.MouseEventHandler;
  type: Type;
};

interface ModalImpProps {
  value: Partial<Context>;
  children: React.ReactElement;
}

const [Provider, useContext] = createContext<Context>(DISPLAY_NAME);

function ModalImpl({ value, children }: ModalImpProps) {
  const child = React.Children.only(children);
  const [shouldMount, setShouldMount] = React.useState(false);
  const isControlled = value.onClose !== undefined;
  const mountNow = shouldMount || value.shouldMount;

  React.useEffect(() => {
    if (isControlled || shouldMount) return;

    setShouldMount(true);
  }, [isControlled, shouldMount]);

  const onClose = React.useCallback(
    (ev: React.MouseEvent<HTMLButtonElement>) => {
      if (isControlled && value.onClose) {
        value.onClose(ev);
      } else {
        setShouldMount(false);
      }
    },
    [isControlled, value]
  );

  return (
    <>
      {mountNow && (
        <Provider
          value={{
            ...value,
            onClose,
            type: value.type ?? 'success',
            shouldMount: value.shouldMount ?? shouldMount,
          }}
        >
          <Portal>{React.cloneElement(child)}</Portal>
        </Provider>
      )}
    </>
  );
}

export { ModalImpl, useContext, TYPE_META };
