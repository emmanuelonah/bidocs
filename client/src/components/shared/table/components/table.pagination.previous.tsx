import React from 'react';

import { useArraySize } from 'hooks';
import { composeEvent, __dev__ } from 'utils';
import { useTableContext } from '../table.component';

const DISPLAY_NAME = 'TPaginationPrevious';

type PrimitiveButtonProps = React.ComponentPropsWithoutRef<'button'>;
type TPaginationPreviousELement = React.ElementRef<'button'>;
interface TPaginationPreviousProps extends PrimitiveButtonProps {}

const TPaginationPrevious = React.forwardRef<TPaginationPreviousELement, TPaginationPreviousProps>(
  (props, forwardedRef) => {
    const { currentPage, setCurrentPage, rowCount, pages, data, updateCurrentData } =
      useTableContext();
    const getIndexBaseSize = useArraySize();

    const onPrevious = React.useCallback(() => {
      setCurrentPage((prevPage) => {
        const latestPage = prevPage - 1;
        const isWholeDataSentToClient = rowCount * pages === data.length;
        const startIndex = getIndexBaseSize(rowCount * currentPage);
        const endIndex = getIndexBaseSize(rowCount * latestPage);

        /**
         * @param {any[]} _currentData =>
         * passing _currentData is for handling frontend pagination if necessary
         */
        const _currentData = isWholeDataSentToClient ? data.slice(startIndex, endIndex) : data;

        updateCurrentData?.(latestPage, _currentData);

        return latestPage;
      });
    }, [currentPage, data, getIndexBaseSize, pages, rowCount, setCurrentPage, updateCurrentData]);

    return (
      <button
        {...props}
        type="button"
        ref={forwardedRef}
        disabled={currentPage === pages}
        onClick={composeEvent(onPrevious, (ev) => {
          if (props.onClick) props.onClick(ev as React.MouseEvent<HTMLButtonElement>);
        })}
      />
    );
  }
);

if (__dev__) {
  TPaginationPrevious.displayName = DISPLAY_NAME;
}

export { TPaginationPrevious };
