import showChapters from '../components/chapters';
import { bookChapters } from './dataCalls';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('book-card')) {
      const id = e.target.id.split('^^')[1];
      bookChapters(id).then((response) => showChapters(response.chapters));
    }
  });
};

export default domEvents;
