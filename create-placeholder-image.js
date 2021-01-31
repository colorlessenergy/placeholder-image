(function () {
  const form = document.querySelector('#form-placeholder-dimensions');
  const widthInput = form.width;
  const heightInput = form.height;
  const colorPickerInput = form['color-picker'];

  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');
  canvas.width = widthInput.value;
  canvas.height = heightInput.value;
  context.fillStyle = colorPickerInput.value;
  context.fillRect(0, 0, widthInput.value, heightInput.value);

  widthInput.addEventListener('keyup', (ev) => {
    let widthInputValue = ev.target.value;
    let heightInputValue = heightInput.value;
    updateCanvasDimensions(widthInputValue, heightInputValue);
  });

  heightInput.addEventListener('keyup', (ev) => {
    let heightInputValue = ev.target.value;
    let widthInputValue = widthInput.value;
    updateCanvasDimensions(widthInputValue, heightInputValue);
  });

  colorPickerInput.addEventListener('input', (ev) => {
    context.fillStyle = colorPickerInput.value;
    context.fillRect(0, 0, widthInput.value, heightInput.value);
  });

  function updateCanvasDimensions (width, height) {    
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = colorPickerInput.value;
    context.fillRect(0, 0, width, height);
  }
})();