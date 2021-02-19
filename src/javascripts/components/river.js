import renderToDom from '../helpers/data/renderToDom';

const river = () => {
  let domString = '';
  domString += `        <div class="cardIntro">
  <h4>Track the bears!</h4>
</div>
<div
  class="bearCardContainer d-flex flex-wrap justify-content-around p-2"
>
<div class="card m-2" style="width: 18rem">
<img
  class="card-img-top"
  src="https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg"
  alt="Card image cap"
/>
<div class="card-body">
  <h5 class="card-title">Bear Name</h5>
  <p class="card-text">
    Fish Caught: 10AM <br />
    Fish Caught: 11AM<br />
    Missed a fish! 10:15AM<br />
    Missed a fish! 10:30AM<br />
    Total fish caught: 3<br />
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
<div class="card m-2" style="width: 18rem">
<img
  class="card-img-top"
  src="https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg"
  alt="Card image cap"
/>
<div class="card-body">
  <h5 class="card-title">Bear Name</h5>
  <p class="card-text">
    Fish Caught: 10AM <br />
    Fish Caught: 11AM<br />
    Missed a fish! 10:15AM<br />
    Missed a fish! 10:30AM<br />
    Total fish caught: 3<br />
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
  <div class="card m-2" style="width: 18rem">
    <img
      class="card-img-top"
      src="https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Bear Name</h5>
      <p class="card-text">
        Fish Caught: 10AM <br />
        Fish Caught: 11AM<br />
        Missed a fish! 10:15AM<br />
        Missed a fish! 10:30AM<br />
        Total fish caught: 3<br />
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
  <div class="card m-2" style="width: 18rem">
    <img
      class="card-img-top"
      src="https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Bear Name</h5>
      <p class="card-text">
        Fish Caught: 10AM <br />
        Fish Caught: 11AM<br />
        Missed a fish! 10:15AM<br />
        Missed a fish! 10:30AM<br />
        Total fish caught: 3<br />
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
  <div class="card m-2" style="width: 18rem">
    <img
      class="card-img-top"
      src="https://www.nationalgeographic.com/content/dam/yourshot/2014/03/3143130.jpg"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">Bear Name</h5>
      <p class="card-text">
        Fish Caught: 10AM <br />
        Fish Caught: 11AM<br />
        Missed a fish! 10:15AM<br />
        Missed a fish! 10:30AM<br />
        Total fish caught: 3<br />
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
</div>`;
  renderToDom('#river', domString);
};

export default river;
