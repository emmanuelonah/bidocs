import { useEffect } from 'react';

import { usePostPosts } from './usePostPosts.hook';

function PostRequest() {
  const { mutate, error, data, isLoading } = usePostPosts();

  useEffect(() => {
    mutate({
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

export { PostRequest };
