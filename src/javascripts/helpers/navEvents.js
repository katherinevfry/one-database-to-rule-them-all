import movieCards from '../components/movieCards';
import { getMovies } from './dataCalls';

const navEvents = () => {
  document.querySelector('#movie-page').addEventListener('click', () => {
    getMovies().then((response) => movieCards(response));
  });
};

export default navEvents;
