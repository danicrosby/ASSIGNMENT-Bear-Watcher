import formFunc from './formHandler';
import { fishButtons } from './bearArray';

const handleButtonEvents = () => {
  document.querySelector('#bearForm').addEventListener('submit', formFunc);
  document.querySelector('#river').addEventListener('click', fishButtons);
};

export default handleButtonEvents;
