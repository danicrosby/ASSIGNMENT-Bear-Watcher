import river from '../../components/river';

const bears = [
  {
    bearName: 'Yogi',
    bearImg: 'https://upload.wikimedia.org/wikipedia/en/f/f0/Yogi_Bear_Yogi_Bear.png',
    fishCaught: [''],
    missedFish: [''],
  },
  {
    bearName: 'Boo-Boo',
    bearImg: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Boo-Boo_Bear.png/200px-Boo-Boo_Bear.png',
    fishCaught: [''],
    missedFish: [''],
  },
  {
    bearName: 'Smokey',
    bearImg: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/Smokey_Bear_Only_You_campaign_hat.jpg',
    fishCaught: [''],
    missedFish: [''],
  },
  {
    bearName: 'Griz',
    bearImg: 'https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg',
    fishCaught: [''],
    missedFish: [''],
  }
];

const fishButtons = (e) => {
  const button = e.target.className;
  const index = e.target.id;
  const time = new Date();

  if (e.target.type === 'button' && button.includes('missed')) {
    bears[index].missedFish.unshift(time);
    river(bears);
  } else if (e.target.type === 'button' && button.includes('caught')) {
    bears[index].fishCaught.unshift(time);
    river(bears);
  }
};

export { bears, fishButtons };
