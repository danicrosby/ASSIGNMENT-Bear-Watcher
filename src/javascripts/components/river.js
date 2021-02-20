import renderToDom from '../helpers/data/renderToDom';

const river = (bears) => {
  let domString = '';
  bears.forEach((bear, i) => {
    const fishString = [];
    bear.fishCaught.forEach((fish) => fishString.push(fish));
    domString += `<div class="card m-2" style="width: 18rem" id="${i}">
    <img
      class="card-img-top"
      src=${bear.bearImg}
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">${bear.bearName}</h5>
      <p class="card-text">
      <div class="caught">
        Last Fish Caught: ${bear.fishCaught[0]} <br>
        Last Fish Missed: ${bear.missedFish[0]} <br>
        Total fish caught: ${fishString.length - 1} <br>
      </div>
      </p>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
      <div
      class="btn-group mr-2"
      role="group"
      aria-label="Second group"
    >
      <button type="button" class="btn btn-secondary caught" id="${i}">
        Caught a fish!
      </button>
    </div>
        <div
          class="btn-group mr-2"
          role="group"
          aria-label="First group"
        >
          <button type="button" class="btn btn-secondary missed" id="${i}">
            Missed a fish!
          </button>
        </div>
      </div>
    </div>
  </div>
`;
  });
  renderToDom('#river', domString);
};

export default river;
