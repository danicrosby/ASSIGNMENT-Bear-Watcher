import renderToDom from '../helpers/data/renderToDom';

const bearForm = () => {
  let domString = '';
  domString += `<div class="bearFormIntro my-2">
  <h3>Track a new bear!</h3>
</div>
<form id="bearForm">
  <div class="row my-3">
    <label for="bearNameInput" class="col-sm-2 col-form-label"
      >Bear Name:</label
    >
    <div class="col-sm-8">
      <input
        type="text"
        class="form-control"
        id="bearNameInput"
        aria-describedby="bearNameInput"
        placeholder="Type bear name"
        required
      />
    </div>
  </div>
  <div class="row mb-3">
    <label for="bearImageInput" class="col-sm-2 col-form-label"
      >Bear Image:</label
    >
    <div class="col-sm-8">
      <input
        type="text"
        class="form-control"
        id="bearImageInput"
        aria-describedby="bearImageInput"
        placeholder="URL for bear image"
        required
      />
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  `;
  renderToDom('#bearForm', domString);
};

export default bearForm;
