import domBuilder from '../components/domBuilder';
import navBar from '../components/navBuilder';
import bookDataObject from './bookObject';
import navEvents from './navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
  bookDataObject();
};

export default startApp;
