import React, {
  FC,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input, Form } from 'antd';
import { StyledUpdateBook, StyledModal } from './styled';
import { BookTypes } from '../AppTable/types';
import { updateBook } from '../../redux/actions';

interface UpdateBookProps {
  book: BookTypes;
}

const UpdateBook: FC<UpdateBookProps> = ({ book }: any) => {
  const [visible, setVisible] = useState(false);
  const [bookName, setBookName] = useState(book.bookName);
  const [bookAuthor, setBookAuthor] = useState(book.author);
  const [bookPrice, setBookPrice] = useState(book.price);
  const dispatch = useDispatch();

  const handleUpdate = (e: any) => {
    console.log({ book });
    e.preventDefault();
    dispatch(updateBook(book.id, bookName, bookAuthor, bookPrice));
    setVisible(false);
    console.log(book);
  };
  const handleCancel = () => {
    setVisible(false);
  };
  return (
    <StyledUpdateBook>
      <Button type="link" onClick={() => setVisible(true)}>
        Update
      </Button>
      <StyledModal
        title="Update The Book"
        centered
        visible={visible}
        width={700}
        onOk={handleUpdate}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button htmlType="submit" key="update" onClick={handleUpdate}>
            Update
          </Button>,
        ]}
      >
        <Form>
          <Input type="text" value={bookName} autoFocus onChange={(e) => setBookName(e.target.value)} />
          <Input type="text" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} />
          <Input type="text" value={bookPrice} onChange={(e) => setBookPrice(e.target.value)} />
        </Form>
      </StyledModal>
    </StyledUpdateBook>
  );
};

export default UpdateBook;
