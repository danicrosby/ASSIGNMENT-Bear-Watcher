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
      <div id="caught">
        Caught a fish ${fishString[0]} </br>
        Caught a fish ${fishString[1]} 
      </div>
        Missed a fish! 10:15AM<br />
        Missed a fish! 10:30AM<br />
        Total fish caught: ${fishString.length}<br />
      </p>
      <div
        class="btn-toolbar"
        role="toolbar"
        aria-label="Toolbar with button groups"
      >
        <div
          class="btn-group mr-2"
          role="group"
          aria-label="First group"
        >
          <button type="button" class="btn btn-secondary">
            Missed a fish!
          </button>
        </div>
        <div
          class="btn-group mr-2"
          role="group"
          aria-label="Second group"
        >
          <button type="button" class="btn btn-secondary">
            Caught a fish!
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
