import domBuilder from '../components/domBuilder';
import navBar from '../components/navBuilder';
import domEvents from './domEvents';
import navEvents from './navEvents';

const startApp = () => {
  domBuilder();
  domEvents();
  navBar();
  navEvents();
};

export default startApp;
