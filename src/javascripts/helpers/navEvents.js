import bookCards from '../components/bookCards';
import movieCards from '../components/movieCards';
import { getBooks, getMovies } from './dataCalls';

const navEvents = () => {
  document.querySelector('#movie-page').addEventListener('click', () => {
    getMovies().then((response) => movieCards(response));
  });
  document.querySelector('#book-page').addEventListener('click', () => {
    getBooks().then((response) => bookCards(response));
  });
};

export default navEvents;
