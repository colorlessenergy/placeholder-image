(function () {
  const form = document.querySelector('#form-placeholder-dimensions');
  const downloadCanvasButton = document.querySelector('#download-canvas-button');
  const widthInput = form.width;
  const heightInput = form.height;
  const colorPickerInput = form['color-picker'];

  let canvas = document.querySelector('#canvas');
  let context = canvas.getContext('2d');
  canvas.width = widthInput.value;
  canvas.height = heightInput.value;
  context.fillStyle = colorPickerInput.value;
  context.fillRect(0, 0, widthInput.value, heightInput.value);

  widthInput.addEventListener('input', (ev) => {
    let widthInputValue = ev.target.value;
    let heightInputValue = heightInput.value;
    updateCanvasDimensions(widthInputValue, heightInputValue);
  });

  heightInput.addEventListener('input', (ev) => {
    let heightInputValue = ev.target.value;
    let widthInputValue = widthInput.value;
    updateCanvasDimensions(widthInputValue, heightInputValue);
  });

  colorPickerInput.addEventListener('input', (ev) => {
    context.fillStyle = ev.target.value;
    context.fillRect(0, 0, widthInput.value, heightInput.value);
  });

  downloadCanvasButton.addEventListener('click', downloadCanvasAsImage);

  function downloadCanvasAsImage (){
    let anchorTag = document.createElement('a');
    let downloadedFileName = `placeholder-${widthInput.value}x${heightInput.value}.png`;
    anchorTag.download = downloadedFileName;
    anchorTag.href = canvas.toDataURL();
    anchorTag.click();
  }

  function updateCanvasDimensions (width, height) {    
    canvas.width = width;
    canvas.height = height;
    context.fillStyle = colorPickerInput.value;
    context.fillRect(0, 0, width, height);
  }
})();

(function showAndHideOverlay() {
  const editButton = document.querySelector('#edit-button');
  const overlay = document.querySelector('#form-placeholder-dimensions');
  editButton.addEventListener('click', function () {
    overlay.classList.toggle('hide');
  });
}());