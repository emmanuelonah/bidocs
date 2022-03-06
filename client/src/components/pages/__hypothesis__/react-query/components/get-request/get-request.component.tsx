import { Fragment, useEffect, useState } from 'react';

import { useGetTodos } from './useGetTodos.hook';
import { useFilterPosts } from './useFilterPosts.hook';

function GetRequest() {
  const { isLoading, error, data } = useGetTodos();
  const [userPostId, setUserPostId] = useState(1);
  const filteredPosts = useFilterPosts(userPostId);

  useEffect(() => {
    var timeout: ReturnType<typeof setTimeout>;

    if (userPostId !== 5) {
      timeout = setTimeout(() => {
        setUserPostId((prevUserPostId) => prevUserPostId + 1);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <>
      {isLoading}
      {error}
      {data && (
        <ol>
          {data.slice(0, 10).map(({ id, title }) => (
            <Fragment key={id}>
              <li>{title}</li>
              <br />
            </Fragment>
          ))}
        </ol>
      )}
      <h3>FILTERED POSTS</h3>
      <code>
        <pre>{JSON.stringify(filteredPosts.isLoading)}</pre>
        <pre>{JSON.stringify(filteredPosts.data)}</pre>
        <pre>{JSON.stringify(filteredPosts.error)}</pre>
      </code>
    </>
  );
}

export { GetRequest };
