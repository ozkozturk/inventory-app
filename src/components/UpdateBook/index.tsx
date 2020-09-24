import React, { FC, useState } from 'react';
import { Button, Input } from 'antd';
import { StyledUpdateBook, StyledModal } from './styled';
import { BookTypes } from '../AppTable/types';

interface UpdateBookProps {
  book: BookTypes;
}

const UpdateBook: FC<UpdateBookProps> = ({ book }: any) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledUpdateBook>
      <Button type="link" onClick={() => setVisible(true)}>
        Update
      </Button>
      <StyledModal
        title="Update"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
        width={700}
      >
        <Input type="text" value={book.bookName} autoFocus />
        <Input type="text" value={book.author} />
        <Input type="text" value={book.price} />
      </StyledModal>
    </StyledUpdateBook>
  );
};

export default UpdateBook;
