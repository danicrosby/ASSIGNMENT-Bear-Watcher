import { bears } from './bearArray';
import river from '../../components/river';

const formFunc = (e) => {
  e.preventDefault();
  const bearName = document.querySelector('#bearNameInput').value;
  const bearImg = document.querySelector('#bearImageInput').value;
  const fishCaught = [''];
  const missedFish = [''];

  const bearObj = {
    bearName,
    bearImg,
    fishCaught,
    missedFish
  };
  bears.push(bearObj);
  river(bears);
};

export default formFunc;
