function LineToTool() {
  //set the icon and the name for the object function
  //These mandatory info are required to generate the function in the toolbox on the left
  this.icon = "assets/lineTo.jpg";
  this.name = "LineTo";

  //define the point of the mouse is
  var startMouseX = -1;
  var startMouseY = -1;
  //and that variable will define if the drawing is active on not, default is false.
  var drawing = false;

  this.draw = function () {
    //if the line is not in drawing status, the mouse is not pressed before
    if (mouseIsPressed) {
      if (startMouseX == -1) {
        startMouseX = mouseX;
        startMouseY = mouseY;
        drawing = true;
        loadPixels();
      } else {
        //here we define where the line end and we can drive the endpoint to join.
        updatePixels();
        line(startMouseX, startMouseY, mouseX, mouseY);
      }
    } else if (drawing) {
      //here well'back to initial contents when the line is completed and the mouse button has been released.
      drawing = false;
      startMouseX = -1;
      startMouseY = -1;
    }
  };
}
