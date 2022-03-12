import { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { httpGetRequest } from 'services';

const GET_FILTERED_POSTS_QUERY_KEY = '@bidocs/filteredPosts';

function useGetFilteredPosts(userId: string | number) {
  const filteredPosts = useQuery(
    GET_FILTERED_POSTS_QUERY_KEY,
    async () => await httpGetRequest(`posts?userId=${userId}`)
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

  return filteredPosts;
}

export { useFilterPosts };
