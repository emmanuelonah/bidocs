import { useNavigate, useLocation } from 'react-router-dom';

import { useTableContext } from '../table.component';

function useTableRouting() {
  const location = useLocation();
  const navigate = useNavigate();
  const { tableId } = useTableContext();

  return function reRoute(currentPage: number) {
    const pageQuery = `table=${tableId}&page=${currentPage}`;
    const to = {
      pathname: location.pathname,
      search: location.search ? `${location.search}${pageQuery}` : pageQuery,
    };

    navigate(to);
  };
}

export { useTableRouting };
