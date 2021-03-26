import domBuilder from '../components/domBuilder';
import navBar from '../components/navBuilder';
import domEvents from './domEvents';

const startApp = () => {
  domBuilder();
  navBar();
  domEvents();
};

export default startApp;
