import bears from './bearArray';
import river from '../../components/river';

const formFunc = (e) => {
  e.preventDefault();
  const bearName = document.querySelector('#bearNameInput').value;
  const bearImg = document.querySelector('#bearImageInput').value;
  const fishCaught = ['123AM', '34'];
  const missedFish = ['2', '55'];

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
