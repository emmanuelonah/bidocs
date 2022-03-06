import { useMutation } from 'react-query';

import { httpDeleteRequest } from 'services';

function useDeletePosts() {
  const deletePosts = useMutation((id: number | string) =>
    httpDeleteRequest(`posts/${id}`).then(
      (res) => res.json(),
      (error) => error
    )
  );

  return deletePosts;
}

export { useDeletePosts };
