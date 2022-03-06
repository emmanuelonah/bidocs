/* eslint-disable no-unused-vars */
import React from 'react';

import { createContext } from 'utils';

const DISPLAY_NAME = 'TableContext';
const DEFAULT_PAGE = 1;

type TableContextType = {
  dataIsLoading: boolean;
  pages: number;
  rowCount: number;
  currentPage: number;
  initialPage: number;
  data: any[];
  shouldUpdateRoute?: boolean;
  updateCurrentData?: (currentPage: number, currentData: any[]) => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

type PrimitiveTableProps = React.ComponentPropsWithoutRef<'table'>;
type TableElement = React.ElementRef<'table'>;
interface TableProps extends PrimitiveTableProps {
  data: any[];
  pages: number;
  rowCount: number;
  rowPerPage: number;
  startPage?: number;
  dataIsLoading: boolean;
  shouldUpdateRoute?: boolean;
  updateCurrentData?: (currentPage: number, currentData: any[]) => void;
  children: React.ReactElement[];
}

const [TableProvider, useTableContext] = createContext<TableContextType>(DISPLAY_NAME);
export { useTableContext };

const Table = React.forwardRef<TableElement, TableProps>((props, forwardedRef) => {
  const {
    data,
    pages,
    rowCount,
    rowPerPage,
    startPage,
    dataIsLoading,
    updateCurrentData,
    shouldUpdateRoute,
    children,
    ...restProps
  } = props;
  const [currentPage, setCurrentPage] = React.useState(() => startPage ?? DEFAULT_PAGE);
  const tableContextValue = React.useMemo(
    () => ({
      data,
      pages,
      rowCount,
      currentPage,
      initialPage: DEFAULT_PAGE,
      dataIsLoading,
      setCurrentPage,
      shouldUpdateRoute,
      updateCurrentData,
    }),
    [currentPage, data, dataIsLoading, pages, rowCount, shouldUpdateRoute, updateCurrentData]
  );

  return (
    <TableProvider value={tableContextValue}>
      <table {...restProps} ref={forwardedRef}>
        {children}
      </table>
    </TableProvider>
  );
});

export default Table;
