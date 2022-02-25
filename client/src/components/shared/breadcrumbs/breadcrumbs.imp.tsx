import React from 'react';
import { useLocation } from 'react-router-dom';

import { createContext } from 'utils';

type BreadCrumbsContextType = {
  from: string;
  to: string;
};

const [BreadCrumbsContext, useBreadCrumbsContext] = createContext<BreadCrumbsContextType>('BreadCrumbsContext');

export { useBreadCrumbsContext };

type BreadcrumbsImpProps = {
  children: React.ReactElement;
};

function BreadcrumbsImp(props: BreadcrumbsImpProps) {
  const location = useLocation();
  const [from, setFrom] = React.useState('/');
  const [to, setTo] = React.useState('/');
  const child = React.Children.only(props.children);

  React.useEffect(() => {
    setTo(location.pathname);

    return () => {
      setFrom(to);

      location.state = {
        from: to,
      };
    };
  }, [location, location.pathname, to]);

  const values = React.useMemo(
    () => ({
      from,
      to,
    }),
    [from, to]
  );

  return <BreadCrumbsContext value={values}>{React.cloneElement(child)}</BreadCrumbsContext>;
}

export default BreadcrumbsImp;
