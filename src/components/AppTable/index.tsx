import React from 'react';
import { Table, Button } from 'antd';
import StyledTable from './styled';
import UpdateBook from '../UpdateBook';
import { BookTypes } from './types';

const AppTable = () => {
  const columns: object[] = [
    {
      title: 'Book Name',
      dataIndex: 'bookName',
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: any, record: any) => record.bookName.indexOf(value) === 0,
      sorter: (a: any, b: any) => a.bookName.length - b.bookName.length,
      sortDirections: ['descend'],
      render: (text: string) => <Button type="link">{text}</Button>,
    },
    {
      title: 'Author',
      dataIndex: 'author',
      filters: [
        {
          text: 'Isaac Asimov',
          value: 'Isaac Asimov',
        },
        {
          text: 'Aldous Huxley',
          value: 'Aldous Huxley',
        },
      ],
      filterMultiple: false,
      onFilter: (value: any, record: any) => record.author.indexOf(value) === 0,
      sorter: (a: any, b: any) => a.author.length - b.author.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Price ($)',
      dataIndex: 'price',
      defaultSortOrder: 'descend',
      sorter: (a: any, b:any) => a.price - b.price,
    },
    {
      title: 'ISBN',
      dataIndex: 'isbn',
    },
    {
      title: 'Update',
      dataIndex: 'update',
      // render: () => data.map((book, index) => <UpdateBook {...book} index={index} />),
      render: (text: any, record: BookTypes) => <UpdateBook book={record} />,
    },
  ];

  const data: BookTypes[] = [
    {
      key: '1',
      bookName: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 10,
      isbn: 'ISBN 1111111',
    },
    {
      key: '2',
      bookName: 'Foundation',
      author: 'Isaac Asimov',
      price: 12,
      isbn: 'ISBN 22222222',
    },
    {
      key: '3',
      bookName: 'I, Robot',
      author: 'Isaac Asimov',
      price: 11,
      isbn: 'ISBN 333333333',
    },
    {
      key: '4',
      bookName: 'Brave New World',
      author: 'Aldous Huxley',
      price: 13,
      isbn: 'ISBN 4444444444',
    },
  ];

  return (
    <StyledTable>
      <Table columns={columns} dataSource={data} />
    </StyledTable>
  );
};

export default AppTable;
