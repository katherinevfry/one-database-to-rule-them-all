import movieCards from '../components/movieCards';
import getMovies from './dataCalls';

const domEvents = () => {
  document.querySelector('#navbar').addEventListener('click', () => {
    getMovies().then((response) => movieCards(response));
  });
};

export default domEvents;
