import { useMutation, useQueryClient } from 'react-query';

import { httpPostRequest } from 'services';
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
      httpPostRequest<Posts>('posts', JSON.stringify(data) as unknown as Posts).then(
        (res) => res.json(),
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
