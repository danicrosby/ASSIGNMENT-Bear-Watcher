import renderToDom from '../helpers/data/renderToDom';

const bearIntro = () => {
  let domString = '';
  domString += `<h1>Bear Watcher</h1>
  <div class="introText mt-3 ml-5">
    <p>
      An app where you can add bears to a watchlist, track fishing habits,
      and award the Fattest Bear Trophy at the end of the year!
    </p>
  </div>
  `;
  renderToDom('#bearStory', domString);
};

export default bearIntro;
