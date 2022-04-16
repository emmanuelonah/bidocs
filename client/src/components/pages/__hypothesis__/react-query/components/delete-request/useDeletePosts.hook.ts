import { useMutation } from 'react-query';

import { httpDeleteRequest } from 'services';

function useDeletePosts() {
  const deletePosts = useMutation((id: number | string) =>
    httpDeleteRequest({ endpointSuffix: `posts/${id}` }).then(
      (res) => res,
      (error) => error
    )
  );

  return deletePosts;
}

export { useDeletePosts };
