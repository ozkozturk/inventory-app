import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import StyledForm from './styled';
import { addBook } from '../../redux/actions';

const AddBook: FC = () => {
  const [form] = Form.useForm();
  const [bookName, setBookName] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookPrice, setBookPrice] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(addBook(bookName, bookAuthor, bookPrice));
    setBookName('');
    setBookAuthor('');
    setBookPrice('');
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };
  return (
    <StyledForm>
      <Form
        form={form}
        layout="horizontal"
        {...formItemLayout}
      >
        <Form.Item label="Book Name">
          <Input type="text" placeholder="Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} />
        </Form.Item>
        <Form.Item label="Author">
          <Input type="text" placeholder="Author" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} />
        </Form.Item>
        <Form.Item label="Price">
          <Input type="text" placeholder="Price" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button htmlType="submit" type="primary" onClick={handleSubmit}>Add Book</Button>
        </Form.Item>
      </Form>
    </StyledForm>
  );
};

export default AddBook;
