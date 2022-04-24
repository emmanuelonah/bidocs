import React, { useState } from 'react';
import styled from 'styled-components';

import { useArraySize, useUniqueIds } from 'hooks';
import { Flex } from 'components/layouts';

import { Prev as PrevButton } from './mulitiview.prev';
import { Next as NextButton } from './mulitiview.next';

const Container = styled.div`
  width: 100%;
`;

const Heading = styled.h1`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

const Body = styled.div``;

const TitleList = styled.ul`
  width: 100%;
  display: flex;
  border: solid 2px #eee;
  border-radius: 10px;

  & > li {
    font-size: 0.8rem;
    border-right: solid 2px #eee;
    padding: 6px 8px;

    &.component--current {
      background-color: #eee;
    }
  }
`;

const Footer = styled(Flex)`
  justify-content: space-between;

  & > button {
    background-color: #333;
    color: ${(props) => props.theme.colors.white.light};
    border: solid 1px transparent;
    border-radius: 12px;
    transition: all 0.4s ease-out;
    padding: 8px;
    width: 40%;
    max-width: 80px;

    &:hover,
    &:focus {
      border-color: #bbbbbb;
      box-shadow: 0 0 0 3px rgba(34, 31, 31, 0.4);
    }

    &:disabled {
      cursor: not-allowed;
      background-color: #8c8a8a;
    }
  }
`;

export type Step = {
  id: string;
  title: string;
  Component: () => React.ReactElement;
};

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type MultiViewElement = React.ElementRef<'div'>;
interface MultiViewProps extends PrimitiveDivProps {
  startingIndex?: number;
  canNext: boolean;
  heading: string;
  steps: Step[];
}

export const MultiView = React.forwardRef<MultiViewElement, MultiViewProps>(
  ({ heading, startingIndex, steps, canNext, ...restProps }, forwardedRef) => {
    const [currentComponentIndex, setCurrentComponentIndex] = useState(startingIndex ?? 0);
    const stepsIndexBaseSize = useArraySize()(steps.length);
    const [containerId] = useUniqueIds(1);
    const Component = steps[currentComponentIndex].Component;

    const actionProps = React.useMemo(
      () => ({
        data: steps,
        currentDataIndex: currentComponentIndex,
        setCurrentDataIndex: setCurrentComponentIndex,
      }),
      [currentComponentIndex, steps]
    );

    const renderTitles = React.useMemo(() => {
      const node = steps.map((step, index) => (
        <li key={step.id} className={`component ${currentComponentIndex === index ? 'component--current' : ''}`}>
          {step.title}
        </li>
      ));

      return node;
    }, [currentComponentIndex, steps]);

    return (
      <Container {...restProps} id={containerId} ref={forwardedRef}>
        <Heading>{heading}</Heading>
        <Body>
          <TitleList>{renderTitles}</TitleList>
          <Component />
        </Body>
        <Footer>
          <PrevButton {...actionProps}>Prev</PrevButton>
          <NextButton {...actionProps} disabled={!canNext || currentComponentIndex === stepsIndexBaseSize}>
            Next
          </NextButton>
        </Footer>
      </Container>
    );
  }
);
