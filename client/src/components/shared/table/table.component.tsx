/* eslint-disable no-unused-vars */
import React from 'react';

import { createContext, throwError } from 'utils';

const DISPLAY_NAME = 'TableContext';
const DEFAULT_PAGE = 1;

type TableContextType = {
  tableId: string;
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
  id: string;
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

function slugify(text: string) {
  if (typeof text !== 'string') {
    throwError('SlugifyError', 'You need a string text to use slugify', slugify);
  }

  const margin = 'table';
  let _text = text;

  if (!_text.includes(margin)) {
    _text += margin;
  }

  const newText = _text.replace(' ', '-').split(margin).join('');

  return newText;
}

const Table = React.forwardRef<TableElement, TableProps>((props, forwardedRef) => {
  const {
    id,
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
  const tableId = slugify(id);
  const tableContextValue = React.useMemo(
    () => ({
      tableId,
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
    [
      currentPage,
      data,
      dataIsLoading,
      pages,
      rowCount,
      shouldUpdateRoute,
      tableId,
      updateCurrentData,
    ]
  );

  return (
    <TableProvider value={tableContextValue}>
      <table {...restProps} ref={forwardedRef} id={tableId}>
        {children}
      </table>
    </TableProvider>
  );
});

export default Table;
