import { useQuery } from 'react-query';
import { httpGetRequest } from 'services';

const GET_COMMENTS_QUERY_KEY = '@bidocs/comments';

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function useGetComments() {
  const comments = useQuery<Comment[], Error>(
    GET_COMMENTS_QUERY_KEY,
    () =>
      httpGetRequest('comments').then(
        (res) => res.json(),
        (error) => error
      ),
    {
      refetchOnWindowFocus: false,
    }
  );

  return comments;
}

export { useGetComments, GET_COMMENTS_QUERY_KEY };
