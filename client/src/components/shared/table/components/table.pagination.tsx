import React from 'react';

import { __dev__ } from 'utils';
import { useArraySize } from 'hooks';
import { useTableContext } from '../table.component';
import { TPaginationNext } from './table.pagination.next';
import { TPaginationPrevious } from './table.pagination.previous';
import { useTableRouting } from '../hooks/useTableRouting.hook';

const DISPLAY_NAME = 'TPagination';

type PrimitiveDivProps = React.ComponentPropsWithoutRef<'div'>;
type TPaginationElement = React.ElementRef<'div'>;
interface TPaginationProps extends PrimitiveDivProps {
  label: string;
  prevChildNode: React.ReactElement;
  nextChildNode: React.ReactElement;
}

const TPagination = React.forwardRef<TPaginationElement, TPaginationProps>(
  (props, forwardedRef) => {
    const { label, prevChildNode, nextChildNode, ...restProps } = props;
    const { pages, currentPage, rowCount, data, setCurrentPage, updateCurrentData } =
      useTableContext();
    const getIndexBaseSize = useArraySize();
    const reRoute = useTableRouting();

    React.useEffect(() => {
      reRoute(currentPage);
    }, [currentPage, reRoute]);

    const renderPagesNavigation = React.useCallback(() => {
      const node = (
        <div className="pages-navigation-wrapper">
          {[...new Array(pages)].map((val, index) => (
            <button
              key={index.toString()}
              type="button"
              tabIndex={-1}
              disabled={currentPage === pages}
              onClick={() => {
                const isWholeDataSentToClient = rowCount * pages === data.length;
                const startIndex = getIndexBaseSize(rowCount * currentPage);
                const endIndex = getIndexBaseSize(rowCount * val);

                /**
                 * @param {any[]} _currentData =>
                 * passing _currentData is for handling frontend pagination if necessary
                 */
                const _currentData = isWholeDataSentToClient
                  ? data.slice(startIndex, endIndex)
                  : data;

                updateCurrentData?.(val, _currentData);
                setCurrentPage(val);
              }}
            >
              {val}
            </button>
          ))}
        </div>
      );

      return node;
    }, [currentPage, data, getIndexBaseSize, pages, rowCount, setCurrentPage, updateCurrentData]);

    return (
      <div {...restProps} role="navigation" aria-label={label} ref={forwardedRef}>
        <TPaginationPrevious>{prevChildNode}</TPaginationPrevious>
        {renderPagesNavigation}
        <TPaginationNext> {nextChildNode}</TPaginationNext>
      </div>
    );
  }
);

if (__dev__) {
  TPagination.displayName = DISPLAY_NAME;
}

export { TPagination };
