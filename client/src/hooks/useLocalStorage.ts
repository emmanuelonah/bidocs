/* eslint-disable no-unused-vars */
import { useEffect } from 'react';

import { _localstorage } from 'utils';

declare var Storage: {
  prototype: Storage;
  new (): Storage;
};
interface EventListenerOptions {
  capture?: boolean;
}
interface AddEventListenerOptions extends EventListenerOptions {
  once?: boolean;
  passive?: boolean;
  signal?: AbortSignal;
}

interface StorageEvent extends Event {
  readonly key: string | null;
  readonly newValue: string | null;
  readonly oldValue: string | null;
  readonly storageArea: Storage | null;
  readonly url: string;
  initStorageEvent(
    type: string,
    bubbles?: boolean,
    cancelable?: boolean,
    key?: string | null,
    oldValue?: string | null,
    newValue?: string | null,
    url?: string | URL,
    storageArea?: Storage | null
  ): void;
}

function useLocalstorage(
  onListener?: (this: Window, ev: StorageEvent) => any,
  options?: boolean | AddEventListenerOptions | undefined
) {
  useEffect(() => {
    if (onListener) window.addEventListener('storage', onListener);

    return () => {
      if (onListener) window.removeEventListener('storage', onListener);
    };
  });

  return {
    isKeyExist: _localstorage.isKeyExist,
    getItem: _localstorage.getItem,
    setItem: _localstorage.setItem,
    removeItem: _localstorage.removeItem,
    clearItems: _localstorage.clearItems,
  };
}

export { useLocalstorage };
