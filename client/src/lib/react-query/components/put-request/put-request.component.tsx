import { useEffect } from 'react';

import { usePutPosts } from './usePutPosts.hook';

function PutRequest() {
  const { mutate, isLoading, data, error } = usePutPosts();

  useEffect(() => {
    mutate({
      id: 1,
      title: 'foo',
      body: 'bar',
      userId: 1,
    });
  }, [mutate]);

  return (
    <code>
      <pre>{JSON.stringify(isLoading)}</pre>
      <pre>{JSON.stringify(data)}</pre>
      <pre>{JSON.stringify(error)}</pre>
    </code>
  );
}

export { PutRequest };
