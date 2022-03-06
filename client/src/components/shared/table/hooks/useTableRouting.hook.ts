import { useNavigate, useLocation } from 'react-router-dom';

function useTableRouting() {
  const location = useLocation();
  const navigate = useNavigate();

  return function reRoute(currentPage: number) {
    const pageQuery = `&page=${currentPage}`;
    const to = {
      pathname: location.pathname,
      search: location.search ? `${location.search}${pageQuery}` : pageQuery,
    };

    navigate(to);
  };
}

export { useTableRouting };
