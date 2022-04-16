import { useMutation, useQueryClient } from 'react-query';

import { httpSendRequest } from 'services';
import { GET_TODOS_QUERY_KEY } from '../get-request/useGetTodos.hook';

export interface Posts {
  title: string;
  body: string;
  userId: number;
}

function usePostPosts() {
  const queryClient = useQueryClient();
  const postTodo = useMutation(
    (data: Posts) =>
      httpSendRequest<Posts>({
        endpointSuffix: 'posts',
        method: 'POST',
        data: JSON.stringify(data) as unknown as Posts,
      }).then(
        (res) => res,
        (error) => error
      ),
    {
      onSuccess() {
        queryClient.invalidateQueries(GET_TODOS_QUERY_KEY);
      },
    }
  );

  return postTodo;
}

export { usePostPosts };
