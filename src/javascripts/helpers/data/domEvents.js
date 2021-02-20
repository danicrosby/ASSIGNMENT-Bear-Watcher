import formFunc from './formHandler';

const handleButtonEvents = () => {
  document.querySelector('#bearForm').addEventListener('submit', formFunc);
};

export default handleButtonEvents;
