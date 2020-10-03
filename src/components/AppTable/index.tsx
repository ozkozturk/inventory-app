import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import {
  useDispatch,
  useSelector,
} from 'react-redux';
import StyledTable from './styled';
import UpdateBook from '../UpdateBook';
import { BookTypes } from './types';
import AddBook from '../AddBook';
import {
  InitialStateTypes,
  TableDataTypes,
} from '../../redux/initialState';
import { getBook } from '../../redux/actions';

const AppTable = () => {
  const books = useSelector(((state: InitialStateTypes) => state.books));
  const dispatch = useDispatch();
  const booksData = books.data.map((book: TableDataTypes) => book);

  useEffect(() => {
    dispatch(getBook());
  }, [dispatch]);
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

  return (
    <StyledTable>
      <AddBook />
      <Table columns={columns} dataSource={booksData} />
    </StyledTable>
  );
};

export default AppTable;
