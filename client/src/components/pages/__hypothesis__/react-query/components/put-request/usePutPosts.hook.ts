import { useMutation } from 'react-query';
import { httpSendRequest } from 'services';

import type { Posts } from '../post-request/usePostPosts.hook';

interface PostsData extends Posts {
  id: number | string;
}

function usePutPosts() {
  const putPosts = useMutation((data: PostsData) =>
    httpSendRequest({
      endpointSuffix: 'posts/1',
      method: 'PUT',
      data: JSON.stringify(data) as unknown as PostsData,
    }).then(
      (res) => res,
      (error) => error
    )
  );

  return putPosts;
}

export { usePutPosts };
