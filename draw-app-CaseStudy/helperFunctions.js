function HelperFunctions() {
  //p5.dom click click events. Notice that there is no this. at the
  //start we don't need to do that here because the event will
  //be added to the button and doesn't 'belong' to the object

  //event handler for the clear button event. updatePixels(); clears the screen
  select("#clearButton").mouseClicked(function () {
    if (confirm("Do you want clean the canvas?") == true) {
      updatePixels();
    }
  });

  //used the function saveCanvas() from P5js Library.
  select("#saveImageButton").mouseClicked(function () {
    saveCanvas(canvasContainer, "Screenshot", "jpg");
  });
}
