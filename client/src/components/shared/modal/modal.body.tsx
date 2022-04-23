import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { AccessibleIcon } from '..';
import { TYPE_VARIANTS } from 'utils';
import { useContext, Type } from './modal.impl';
import { IconArrowDown, IconArrowUp } from 'assets';

const fadeIn = keyframes`
    from { opacity:0; }
    to { opacity:1; }
`;

export interface BodyProps extends React.ComponentPropsWithoutRef<'div'> {
  message: string;
  details?: string[];
  btnTestId?: string;
  listTestId?: string;
}

const Container = styled.div``;

const Row1 = styled.div`
  & > p {
    font-size: 0.875rem;
  }
`;

const Row2 = styled.div<{ type: Type }>`
  padding-top: 0.625rem;

  & > [role='button'] {
    color: ${(props) => TYPE_VARIANTS[props.type].color};
    text-align: right;
    border-top: dashed 0.0625rem ${(props) => TYPE_VARIANTS[props.type].dashColor};
    font-style: italic;
    font-size: 0.75rem;
    line-height: 1rem;
    padding: 0.3125rem 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    align-content: center;

    & .fill {
      fill: ${(props) => TYPE_VARIANTS[props.type].color};
    }
  }

  & > ul {
    background-color: ${(props) => TYPE_VARIANTS[props.type].bg};
    color: #222;
    padding: 0.625rem 1.25rem;
    font-size: 0.75rem;
    line-height: 1rem;
    animation: ${fadeIn} 1s ease-in 1;
    animation-fill-mode: forwards;
  }
`;

function Body({ message, details, btnTestId, listTestId }: BodyProps) {
  const { type } = useContext();
  const [shown, setShown] = useState(false);
  const buttonTextContent = (
    <AccessibleIcon label={`Click to ${shown ? 'close' : 'open'}`}>
      {shown ? (
        <>
          Show less &nbsp;
          <IconArrowUp />
        </>
      ) : (
        <>
          Show more &nbsp;
          <IconArrowDown />
        </>
      )}
    </AccessibleIcon>
  );

  return (
    <Container>
      <Row1>
        <p>{message}</p>
      </Row1>
      {Boolean(details?.length) && (
        <Row2 type={type}>
          <div
            data-testid={btnTestId ?? 'listBtn'}
            role="button"
            tabIndex={0}
            onClick={() => {
              setShown((prevState) => !prevState);
            }}
          >
            {buttonTextContent}
          </div>
          {shown && (
            <ul data-testid={listTestId ?? 'list'}>
              {details?.map((detail, index) => (
                <li key={index.toString()}>{detail}</li>
              ))}
            </ul>
          )}
        </Row2>
      )}
    </Container>
  );
}

export default Body;
