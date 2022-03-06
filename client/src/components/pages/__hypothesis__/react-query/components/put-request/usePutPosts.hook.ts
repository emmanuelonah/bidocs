import { useMutation } from 'react-query';
import { httpPutRequest } from 'services';

import type { Posts } from '../post-request/usePostPosts.hook';

interface PostsData extends Posts {
  id: number | string;
}

function usePutPosts() {
  const putPosts = useMutation((data: PostsData) =>
    httpPutRequest('posts/1', JSON.stringify(data) as unknown as PostsData).then(
      (res) => res.json(),
      (error) => error
    )
  );

  return putPosts;
}

export { usePutPosts };
