import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

import IconBrokenCup from 'assets/images/icn-broken-cup.jpg';

import { PATHS } from 'routes';
import { useTitle } from 'hooks';
import { IconLogo } from 'assets';
import { DarkButton } from 'components/shared';
import { Main, Container } from 'components/layouts';

const Wrapper = styled.div`
  max-width: 48.3125rem;
  margin: 0 auto;
  padding-top: 6rem;

  @media (max-width: 48.25rem) {
    padding: 2rem 1rem;
  }

  & .container {
    & ins {
      color: #777;
      text-decoration: none;
    }

    & .row-1 {
      & a {
        margin-bottom: 1rem;
      }

      @media (min-width: 48.3125rem) {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      & .row-1__col-1 {
        @media (min-width: 48.3125rem) {
          width: 50%;
        }

        & p:nth-child(2) {
          padding-bottom: 0.7rem;
        }

        & p:nth-child(3) {
          padding-bottom: 1rem;
          font-size: 0.8rem;
        }

        & button {
          max-width: 50%;
          min-width: 50%;
        }
      }

      & .row-1__col-2 {
        display: none;

        @media (min-width: 48.3125rem) {
          display: block;
          & img {
            width: 80%;
          }
        }
      }
    }
  }
`;

type Pathname = {
  pathname: string;
};

type LocationState = {
  from?: Pathname;
  to?: Pathname;
  title?: string;
  message?: string;
};

type FallbackProps = {
  // eslint-disable-next-line react/no-unused-prop-types
  from?: Pathname; // useful when working with breadcrumbs
  to?: Pathname; // useful when working with breadcrumbs
  title?: string;
  message?: string;
};

function Fallback(props: FallbackProps) {
  useTitle('404');
  const navigate = useNavigate();
  const { state, pathname } = useLocation();

  const { to: pTo, title: pTitle, message: pMsg } = props;
  const { to: sTo, title: sTitle, message: sMsg } = (state as LocationState) || {};
  const to = pTo ?? sTo;
  const msg = pMsg ?? sMsg;
  const title = pTitle ?? sTitle;

  return (
    <Main>
      <Wrapper>
        <Container className="container">
          <div className="row-1">
            <div className="row-1__col-1">
              <IconLogo />
              <p>
                {title ?? (
                  <>
                    <b>404.</b>
                    <ins> That&apos;s an error.</ins>
                  </>
                )}
              </p>
              <p>
                {msg ?? (
                  <>
                    The requested URL &ldquo;<code>{pathname}</code>&rdquo; was not found on this server.
                    <ins> That’s all we know.</ins>
                  </>
                )}
              </p>
              <DarkButton
                shape="radius"
                onClick={() => {
                  navigate(to ?? PATHS.home, { replace: true });
                }}
              >
                Go home
              </DarkButton>
            </div>

            <div className="row-1__col-2">
              <img src={IconBrokenCup} alt="" />
            </div>
          </div>
        </Container>
      </Wrapper>
    </Main>
  );
}

export { Fallback };
