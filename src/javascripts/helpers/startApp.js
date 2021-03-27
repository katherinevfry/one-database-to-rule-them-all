import domBuilder from '../components/domBuilder';
import navBar from '../components/navBuilder';
import navEvents from './navEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navEvents();
};

export default startApp;
