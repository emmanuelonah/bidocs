import React from 'react';

import { __dev__ } from 'utils';

const DISPLAY_NAME = 'Polymorphica';

type PrimitiveProps<T extends React.ElementType> = {
  as: T;
  forwardedRef: React.MutableRefObject<T>;
};

type PolymorphicaProps<T extends React.ElementType> = {} & Omit<
  React.ComponentPropsWithoutRef<T>,
  keyof PrimitiveProps<T>
>;

function Polymorphica<T extends React.ElementType>({
  as,
  forwardedRef,
  ...restProps
}: PolymorphicaProps<T>) {
  const Component = as;

  return <Component {...restProps} ref={forwardedRef} />;
}

if (__dev__) {
  Polymorphica.displayName = DISPLAY_NAME;
}

export { Polymorphica };
