import axios from 'axios';
import firebaseConfig from './apiKeys';

const dbUrl = 'https://the-one-api.dev/v2';
const token = firebaseConfig.apiKey;

const getMovies = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/movie`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getBooks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/book`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getOneBook = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/book/${id}`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getBookChapters = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/book/${id}/chapter`, {
    headers: {
      Authorization: `bearer ${token}`
    }
  })
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const bookChapters = (id) => new Promise((resolve, reject) => {
  const book = getOneBook(id);
  const chapters = getBookChapters(id);
  Promise.all([book, chapters])
    .then(([bookResponse, chaptersResponse]) => resolve(
      { book: bookResponse, chapters: chaptersResponse }
    ))
    .catch((error) => reject(error));
});

export {
  getMovies,
  getBooks,
  getOneBook,
  getBookChapters,
  bookChapters
};
