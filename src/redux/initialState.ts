export type TableDataTypes = {
  data: {
    id: number,
    key: string,
    bookName: string,
    author: string,
    price: string,
    isbn: string,
  }
}

export type TableColumnTypes = {
  columns: {
    title: string;
    dataIndex: string;
  }
}

export type InitialStateTypes = {
  books: {
    status: string;
    loading: boolean;
    data: TableDataTypes[];
  }
}

const initialState: InitialStateTypes = {
  books: {
    status: '',
    loading: false,
    data: [],
  },
};

export default initialState;
