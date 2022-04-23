import React from 'react';
import styled from 'styled-components';

import Table from 'components/shared/table';

import type { Comment } from './useGetComments.hook';
import { useGetComments } from './useGetComments.hook';

const Container = styled.div`
  & table {
    border: solid 1px #eee;
    background-color: #fff;
    width: 100%;

    & > thead {
      & > tr {
        width: 100%;

        & > th {
          background-color: green;
          color: #fff;
          font-weight: 350;
          border: solid 1px #eee;
          padding: 10px;
          text-align: start;
          text-transform: capitalize;

          &:nth-child(1),
          &:nth-child(2) {
            width: 10%;
          }

          &:nth-child(3),
          &:nth-child(4) {
            width: 20%;
          }

          &:nth-child(5) {
          }
        }
      }
    }

    & > tbody {
      & tr {
        &:hover {
          background-color: #eee;
        }

        & td {
          border: solid 1px #eee;
          padding: 0 0.8rem;
          text-overflow: ellipsis;

          &:nth-child(1),
          &:nth-child(2) {
            width: 10%;
          }

          &:nth-child(3),
          &:nth-child(4) {
            width: 20%;
          }

          &:nth-child(5) {
          }
        }
      }
    }
  }
`;

const Heading = styled.h1`
  font-size: 1rem;
`;

const paginationUtil = {
  getPages(dataSize: number, rowPerPage: number) {
    return dataSize / rowPerPage;
  },
  getRowCount<DataType>(data: DataType[]) {
    return data.length;
  },
  getRowPerPage(rowPerPage: number) {
    return rowPerPage;
  },
};

const ROW_PER_PAGE = 10;

function OptimisticUpdate() {
  const { isLoading, data } = useGetComments();
  const { getPages, getRowCount, getRowPerPage } = paginationUtil;
  const comments = React.useMemo(
    () => ({
      dataIsLoading: isLoading,
      data: data ?? [],
      pages: getPages(data?.length ?? 0, ROW_PER_PAGE),
      rowCount: getRowCount<Comment>(data ?? []),
      rowPerPage: getRowPerPage(ROW_PER_PAGE),
    }),
    [data, getPages, getRowCount, getRowPerPage, isLoading]
  );
  const headings = data && Object.keys(data[0]);

  const renderTableData = React.useMemo(() => {
    const node = data?.slice(0, 10).map((comment) => (
      <Table.TR key={comment.id}>
        <Table.TD>{comment.postId}</Table.TD>
        <Table.TD>{comment.id}</Table.TD>
        <Table.TD>{comment.name}</Table.TD>
        <Table.TD>{comment.email}</Table.TD>
        <Table.TD>{comment.body}</Table.TD>
      </Table.TR>
    ));

    return node;
  }, [data]);

  return (
    <Container>
      <Heading>React Optimistic Update</Heading>
      {data?.length && (
        <Table.Root {...comments} id="commentsTable">
          <Table.THead>
            <Table.TR>
              {headings?.map((heading, index) => (
                <Table.TH key={index.toString()}>{heading}</Table.TH>
              ))}
            </Table.TR>
          </Table.THead>
          <Table.TBody>
            <>{renderTableData}</>
          </Table.TBody>
        </Table.Root>
      )}
    </Container>
  );
}

export default OptimisticUpdate;
