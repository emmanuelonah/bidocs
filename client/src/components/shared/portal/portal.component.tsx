import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useUniqueIds, useForceUpdate } from 'hooks';

type PortalProps = {
  elementType?: string;
  containerRef?: React.MutableRefObject<HTMLElement>;
  insertBeforeElement?: HTMLElement;
  children: React.ReactNode;
};

function Portal(props: PortalProps) {
  const { elementType, containerRef, insertBeforeElement, children } = props;
  const mountElementNodeRef = useRef<HTMLSpanElement>(null!);
  const portalElementNodeRef = useRef<HTMLElement>(null!);
  const [portalId] = useUniqueIds(1);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!mountElementNodeRef.current) return;

    const { ownerDocument } = mountElementNodeRef.current;
    const body = containerRef?.current ?? ownerDocument.body;

    portalElementNodeRef.current = ownerDocument.createElement(elementType!);
    portalElementNodeRef.current.id = portalId;

    if (insertBeforeElement?.tagName) {
      body.insertBefore(portalElementNodeRef.current, insertBeforeElement);
    } else {
      body.appendChild(portalElementNodeRef.current);
    }

    forceUpdate();

    return function cleanDOM() {
      if (portalElementNodeRef.current && body) {
        body.removeChild(portalElementNodeRef.current);
      }
    };
  }, [containerRef, elementType, forceUpdate, insertBeforeElement, portalId]);

  return portalElementNodeRef.current ? (
    createPortal(children, portalElementNodeRef.current)
  ) : (
    <span ref={mountElementNodeRef} />
  );
}

Portal.defaultProps = {
  elementType: 'portal',
};

export { Portal };
