function HelperFunctions() {
  //event handler for the clear button event. updatePixels(); clears the screen
  select("#clearButton").mouseClicked(function () {
    if (confirm("Do you want clean the canvas?") == true) {
      //console.log("test " + toolbox.tools[0].name);
      //console.log("test " + toolbox.selectedTool.name);
      if (toolbox.selectedTool.name != "freehand") {
        toolbox.selectTool("freehand");
      }
      clear();
    }
  });

  //used the function saveCanvas() from P5js Library.
  select("#saveImageButton").mouseClicked(function () {
    saveCanvas(canvasContainer, "Screenshot", "jpg");
  });
}
