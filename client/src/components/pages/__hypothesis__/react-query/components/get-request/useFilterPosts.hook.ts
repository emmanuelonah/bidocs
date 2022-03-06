import { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { httpGetRequest } from 'services';

const GET_FILTERED_POSTS_QUERY_KEY = '@bidocs/filteredPosts';

function useGetFilteredPosts(userId: string | number) {
  console.log(userId);
  const filteredPosts = useQuery(GET_FILTERED_POSTS_QUERY_KEY, () =>
    httpGetRequest(`posts?userId=${userId}`).then(
      (res) => res.json(),
      (error) => error
    )
  );

  return filteredPosts;
}

const DEFAULT_USER_ID = 1;

function useFilterPosts(userId: string | number = DEFAULT_USER_ID) {
  const filteredPosts = useGetFilteredPosts(userId);
  const queryClient = useQueryClient();

  const triggerRefresh = useCallback(() => {
    if (userId) {
      queryClient.invalidateQueries(GET_FILTERED_POSTS_QUERY_KEY);
    }
  }, [queryClient, userId]);

  useEffect(() => {
    triggerRefresh();
  }, [triggerRefresh]);

  console.log(userId);

  return filteredPosts;
}

export { useFilterPosts };
