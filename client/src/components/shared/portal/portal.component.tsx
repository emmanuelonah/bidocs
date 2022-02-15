import React, { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useUniqueIds, useForceUpdate } from 'hooks';

type PortalProps = {
  containerRef?: React.MutableRefObject<HTMLElement>;
  elementNodeName?: string;
  children: React.ReactNode;
};

function Portal(props: PortalProps) {
  const { elementNodeName, containerRef, children } = props;
  const mountElementNodeRef = useRef<HTMLSpanElement>(null!);
  const portalElementNodeRef = useRef<HTMLElement>(null!);
  const [portalId] = useUniqueIds(1);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    if (!mountElementNodeRef.current) return;

    const { ownerDocument } = mountElementNodeRef.current;
    const body = containerRef?.current ?? ownerDocument.body;
    portalElementNodeRef.current = ownerDocument.createElement(elementNodeName!);
    portalElementNodeRef.current.id = portalId;
    body.appendChild(portalElementNodeRef.current);
    forceUpdate();

    return function cleanDOM() {
      if (portalElementNodeRef.current && body) {
        body.removeChild(portalElementNodeRef.current);
      }
    };
  }, [containerRef, elementNodeName, forceUpdate, portalId]);

  return portalElementNodeRef.current ? createPortal(children, portalElementNodeRef.current) : <span ref={mountElementNodeRef} />;
}

Portal.defaultProps = {
  elementNodeName: 'portal',
};

export { Portal };
