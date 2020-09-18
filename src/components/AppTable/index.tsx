import React from 'react';
import { Table } from 'antd';

const AppTable = () => {
  const columns: any = [
    {
      title: 'Book Name',
      dataIndex: 'bookName',
      filters: [
        {
          text: 'Harry Potter',
          value: 'Harry Potter',
        },
        {
          text: 'Foundation',
          value: 'Foundation',
        },
        {
          text: 'I, Robot',
          value: 'I, Robot',
        },
        {
          text: 'Brave New World',
          value: 'Brave New World',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value: any, record: any) => record.bookName.indexOf(value) === 0,
      sorter: (a: any, b: any) => a.bookName.length - b.bookName.length,
      sortDirections: ['descend'],
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
      render: () => <a href="/">Update</a>,
    },
  ];

  const data = [
    {
      key: '1',
      bookName: 'Harry Potter',
      author: 'J.K. Rowling',
      price: 10,
      isbn: 'ISBN 1111111',
      update: true,
    },
    {
      key: '2',
      bookName: 'Foundation',
      author: 'Isaac Asimov',
      price: 12,
      isbn: 'ISBN 22222222',
      update: true,
    },
    {
      key: '3',
      bookName: 'I, Robot',
      author: 'Isaac Asimov',
      price: 11,
      isbn: 'ISBN 333333333',
      update: true,
    },
    {
      key: '4',
      bookName: 'Brave New World',
      author: 'Aldous Huxley',
      price: 13,
      isbn: 'ISBN 4444444444',
      update: true,
    },
  ];
  return (
    <Table columns={columns} dataSource={data} />
  );
};

export default AppTable;
