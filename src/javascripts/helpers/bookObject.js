import { getBooks } from './dataCalls';

// const books = {};

const bookDataObject = () => {
  getBooks().then((response) => console.warn(response));
};

export default bookDataObject;
