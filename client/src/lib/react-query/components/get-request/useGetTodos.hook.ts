import { useQuery } from 'react-query';

import { httpGetRequest } from 'services';

const GET_TODOS_QUERY_KEY = '@bidocs/todos';

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

function useGetTodos() {
  const { isLoading, data, error } = useQuery<Todo[], Error>(GET_TODOS_QUERY_KEY, () =>
    httpGetRequest({ endpointSuffix: 'todos' }).then(
      async (res) => await res,
      (error) => error
    )
  );

  return { isLoading, data, error };
}

export { useGetTodos, GET_TODOS_QUERY_KEY };
