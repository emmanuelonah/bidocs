import React, { useRef, useEffect, ReactElement } from 'react';
import { createPortal } from 'react-dom';

import { __dev__ } from 'utils';
import { useUniqueIds, useForceUpdate } from 'hooks';

const DISPLAY_NAME = 'Portal';

/* ¡*************************************¡*\
    Name: PrimitiveDivProps
    Docs: Deriving Div props/attr types
\* !*************************************! */
type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;

/* ¡*****************************************************************¡*\
    Name: PortalElement
    Docs: Creating a CustomElement using Div as the element structure
\* !*****************************************************************! */
type PortalElement = React.ElementRef<'div'>;

interface PortalProps extends PrimitiveDivProps {
  containerRef?: React.MutableRefObject<HTMLElement>;
  elementNodeName?: string;
  children: React.ReactNode;
}

const Portal = React.forwardRef<PortalElement, PortalProps>((props, forwardedRef) => {
  const {
    elementNodeName, containerRef, children, ...restProps
  } = props;
  const mountElementNodeRef = useRef<HTMLSpanElement>(null!);
  const portalElementNodeRef = useRef<HTMLElement>(null!);
  const [portalId] = useUniqueIds(1);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!mountElementNodeRef.current) return;

    const { ownerDocument } = mountElementNodeRef.current;
    const body = containerRef?.current || ownerDocument.body;

    portalElementNodeRef.current = ownerDocument.createElement(elementNodeName!);
    portalElementNodeRef.current.id = portalId;

    /* ¡*************************************************************************¡*\
        Name: restProps
        Docs: Here we make sure we pour all remaining props to the PortalElement
    \* !*************************************************************************! */
    const ComponentizedPortal = React.Children.only(portalElementNodeRef.current) as unknown as ReactElement;
    React.cloneElement(ComponentizedPortal, { ...restProps });

    body.appendChild(portalElementNodeRef.current);
    forceUpdate();

    /* ¡*****************************************************************************¡*\
        Name: forwardedRef
        Docs: Here we make sure PortalComponent is reference-able from the <Consumer/>
    \* !*****************************************************************************! */
    if (forwardedRef) {
      if (typeof forwardedRef === 'function') {
        forwardedRef(portalElementNodeRef.current as HTMLDivElement);
      } else {
        forwardedRef.current = portalElementNodeRef.current as HTMLDivElement;
      }
    }

    return function cleanDOM() {
      if (portalElementNodeRef.current && body) {
        body.removeChild(portalElementNodeRef.current);
      }
    };
  }, [containerRef, elementNodeName, forceUpdate, forwardedRef, portalId, restProps]);

  return portalElementNodeRef.current ? (
    createPortal(children, portalElementNodeRef.current)
  ) : (
    <span ref={mountElementNodeRef} />
  );
});

Portal.defaultProps = {
  elementNodeName: 'portal',
};

if (__dev__) {
  Portal.displayName = DISPLAY_NAME;
}

export { Portal };
