import React, { ErrorInfo } from 'react';
import styled from 'styled-components';

import { PATHS } from 'routes';
import { Flex } from 'components/layouts';
import { Button } from 'components/shared';
import Modal from 'components/shared/modal';

const DETAILS = ['Cause - this is usually caused when a <Component/> encounters an error during rendering'];

const ButtonsWrapper = styled(Flex)`
  justify-content: space-between;
  width: 100%;

  & > div {
    width: 50%;

    & button {
      background-color: transparent;
      color: #721c24;

      &:hover {
        color: #310005;
      }
    }
  }
`;

interface Props {
  children: React.ReactElement;
  [key: string]: any;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Modal.Root
          type="danger"
          shouldMount={this.state.hasError}
          onClose={() => {
            this.setState({ hasError: false });
          }}
        >
          <Modal.Header>Component Rendering Error</Modal.Header>
          <Modal.Body message="Sorry there was an error trying to render the component" details={DETAILS} />
          <Modal.Footer>
            <ButtonsWrapper>
              <div>
                <Button
                  onClick={() => {
                    window.location.reload();
                  }}
                >
                  Refresh
                </Button>
              </div>
              <div>
                <Button
                  onClick={() => {
                    this.props.history.replace(PATHS.home);
                  }}
                >
                  Home
                </Button>
              </div>
            </ButtonsWrapper>
          </Modal.Footer>
        </Modal.Root>
      );
    }
    return this.props.children;
  }
}

export { ErrorBoundary };
