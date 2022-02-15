import React from 'react';

type MainProps = {
  children: React.ReactNode;
};

function Main(props: MainProps) {
  return <main id="main">{props.children}</main>;
}

export { Main };
