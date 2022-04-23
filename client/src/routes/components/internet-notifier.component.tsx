import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';

import Modal from 'components/shared/modal';

import { Flex } from 'components/layouts';
import { IconCheck, ComposeSvg } from 'assets';
import { ReactComponent as IconWarning } from 'assets/svgs/icn-warning.svg';

const TEXT_CONTENTS = {
  OFFLINE: {
    title: 'Offline alert',
    msg: 'You have gone offline!',
  },
  ONLINE: {
    title: 'Online alert',
    msg: 'You are back online!',
  },
};

const TitleWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

function InternetNotifier() {
  const [isBackOnline, setIsBackOnline] = useState(false);
  const [isGoneOffline, setIsGoneOffline] = useState(false);

  const onlineHandler = useCallback(() => {
    setIsBackOnline(true);

    if (isGoneOffline) setIsGoneOffline(false);
  }, [isGoneOffline]);

  const offlineHandler = useCallback(() => {
    setIsGoneOffline(true);

    if (isBackOnline) setIsBackOnline(false);
  }, [isBackOnline]);

  useEffect(() => {
    window.addEventListener('offline', offlineHandler);
    window.addEventListener('online', onlineHandler);

    return () => {
      window.removeEventListener('offline', offlineHandler);
      window.removeEventListener('online', onlineHandler);
    };
  }, [offlineHandler, onlineHandler]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (isBackOnline) {
      timeout = setTimeout(() => {
        setIsBackOnline(false);
      }, 1000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isBackOnline]);

  function getTitleTextContent() {
    let textContent = null;

    if (isGoneOffline) {
      textContent = (
        <>
          <ComposeSvg size="small">
            <IconWarning />
          </ComposeSvg>
          <span>{TEXT_CONTENTS.OFFLINE.title}</span>
        </>
      );
    } else {
      textContent = (
        <>
          <ComposeSvg size="small">
            <IconCheck fill="#d4e6d7" />
          </ComposeSvg>
          <span>{TEXT_CONTENTS.ONLINE.title}</span>
        </>
      );
    }

    return textContent;
  }

  return (
    <Modal.Root
      position="top-center"
      type={isGoneOffline ? 'warning' : 'success'}
      shouldMount={isGoneOffline || isBackOnline}
      onClose={React.useCallback(() => {
        if (isBackOnline && !isGoneOffline) {
          setIsBackOnline(false);
        } else {
          setIsGoneOffline(false);
        }
      }, [isBackOnline, isGoneOffline])}
    >
      <Modal.Header>
        <TitleWrapper>{getTitleTextContent()}</TitleWrapper>
      </Modal.Header>
      <Modal.Body message={isGoneOffline ? TEXT_CONTENTS.OFFLINE.msg : TEXT_CONTENTS.ONLINE.msg} />
    </Modal.Root>
  );
}

export { InternetNotifier };
