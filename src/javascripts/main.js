import bearIntro from './components/bearIntro';
import bearForm from './components/bearForm';
import river from './components/river';
import handleButtonEvents from './helpers/data/domEvents';
import { bears } from './helpers/data/bearArray';

import '../styles/main.scss';

const init = () => {
  bearIntro();
  bearForm();
  river(bears);
  handleButtonEvents();
};

init();
