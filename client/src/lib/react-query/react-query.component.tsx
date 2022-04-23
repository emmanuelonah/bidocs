import styled from 'styled-components';

import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATHS } from 'routes';

import { GetRequest } from './components/get-request/get-request.component';
import { PutRequest } from './components/put-request/put-request.component';
import { PostRequest } from './components/post-request/post-request.component';
import { DeleteRequest } from './components/delete-request/delete-request.component';

const Heading = styled.h2``;

const Title = styled.h3``;

function ReactQuery() {
  const navigate = useNavigate();
  return (
    <>
      <Heading>REACT QUERY HYPOTHESIS</Heading>
      <Fragment>
        <Title>GET REQUEST</Title>
        <GetRequest />
      </Fragment>
      <Fragment>
        <Title>POST REQUEST</Title>
        <PostRequest />
      </Fragment>
      <Fragment>
        <Title>PUT REQUEST</Title>
        <PutRequest />
      </Fragment>
      <Fragment>
        <Title>DELETE REQUEST</Title>
        <DeleteRequest />
        <br />
      </Fragment>
      <button
        type="button"
        onClick={() => {
          navigate(PATHS.reactQueryOptimisticUpdate);
        }}
      >
        Go to OptimisticUpdate
      </button>
    </>
  );
}

export default ReactQuery;
