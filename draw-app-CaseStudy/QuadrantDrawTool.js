function QuadrantDrawTool() {
  this.name = "QuadrantDraw";
  this.icon = "assets/QuadrantTool.jpg";

  //which axis is being mirrored (x or y) x is default
  this.axis = "x";
  //line of symmetry is halfway across the screen
  this.lineOfSymmetry = width / 2;
  this.lineOfSymmetry2 = height / 2;

  //this changes in the p5.dom click handler. So storing it as
  //a variable self now means we can still access this in the handler
  var self = this;

  //where was the mouse on the last time draw was called.
  //set it to -1 to begin with
  var previousMouseX = -1;
  var previousMouseY = -1;

  //mouse coordinates for the other side of the Line of symmetry.
  var previousOppositeMouseX = -1;
  var previousOppositeMouseY = -1;
  var previousOppositeMouseX2 = -1;
  var previousOppositeMouseY2 = -1;

  this.draw = function () {
    //display the last save state of pixels
    updatePixels();

    //do the drawing if the mouse is pressed
    if (mouseIsPressed) {
      //if the previous values are -1 set them to the current mouse location
      //and mirrored positions
      if (previousMouseX == -1) {
        previousMouseX = mouseX;
        previousMouseY = mouseY;
        previousOppositeMouseX = this.calculateOppositeX(mouseX, "x");
        previousOppositeMouseY = this.calculateOppositeX(mouseY, "y");
        previousOppositeMouseX2 = this.calculateOppositeY(mouseX, "x");
        previousOppositeMouseY2 = this.calculateOppositeY(mouseY, "y");
      }

      //if there are values in the previous locations
      //draw a line between them and the current positions
      else {
        line(previousMouseX, previousMouseY, mouseX, mouseY);
        previousMouseX = mouseX;
        previousMouseY = mouseY;

        //these are for the mirrored drawing the other side of the
        //line of symmetry
        var oX = this.calculateOppositeX(mouseX, "x");
        var oY = this.calculateOppositeX(mouseY, "y");
        var oX2 = this.calculateOppositeY(mouseX, "x");
        var oY2 = this.calculateOppositeY(mouseY, "y");
        line(previousOppositeMouseX, previousOppositeMouseY, oX, oY);
        previousOppositeMouseX = oX;
        previousOppositeMouseY = oY;
        line(previousOppositeMouseX2, previousOppositeMouseY2, oX2, oY2);
        previousOppositeMouseX2 = oX2;
        previousOppositeMouseY2 = oY2;
      }
    }
    //if the mouse isn't pressed reset the previous values to -1
    else {
      previousMouseX = -1;
      previousMouseY = -1;

      previousOppositeMouseX = -1;
      previousOppositeMouseY = -1;
      previousOppositeMouseX2 = -1;
      previousOppositeMouseY2 = -1;
    }

    //after the drawing is done save the pixel state. We don't want the
    //line of symmetry to be part of our drawing

    loadPixels();

    //push the drawing state so that we can set the stroke weight and colour
    push();
    strokeWeight(3);
    stroke("red");

    //draw the lines of symmetry
    /*if (this.axis == "x") {
      line(width / 2, 0, width / 2, height);
      line(0, height / 2, width, height / 2);
    } else {
      line(width / 2, 0, width / 2, height);
      line(0, height / 2, width, height / 2);
    }
    */
    //draw the lines of symmetry
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    //return to the original stroke
    pop();
  };

  /*calculate an opposite coordinate the other side of the
   *symmetry line.
   *@param n number: location for either x or y coordinate
   *@param a [x,y]: the axis of the coordinate (y or y)
   *@return number: the opposite coordinate
   */
  this.calculateOppositeX = function (n, a) {
    //if the axis isn't the one being mirrored return the same
    //value
    if (a != this.axis) {
      return n;
    }

    //if n is less than the line of symmetry return a coordinate
    //that is far greater than the line of symmetry by the distance from
    //n to that line.
    if (n < this.lineOfSymmetry) {
      return this.lineOfSymmetry + (this.lineOfSymmetry - n);
    }

    //otherwise a coordinate that is smaller than the line of symmetry
    //by the distance between it and n.
    else {
      return this.lineOfSymmetry - (n - this.lineOfSymmetry);
    }
  };

  this.calculateOppositeY = function (n, a) {
    //if the axis isn't the one being mirrored return the same
    //value
    if (a == this.axis) {
      return n;
    }

    //if n is less than the line of symmetry return a coordinate
    //that is far greater than the line of symmetry by the distance from
    //n to that line.
    if (n < this.lineOfSymmetry2) {
      return this.lineOfSymmetry2 + (this.lineOfSymmetry2 - n);
    }

    //otherwise a coordinate that is smaller than the line of symmetry
    //by the distance between it and n.
    else {
      return this.lineOfSymmetry2 - (n - this.lineOfSymmetry2);
    }
  };

  //when the tool is deselected update the pixels to just show the drawing and
  //hide the line of symmetry. Also clear options
  this.unselectTool = function () {
    updatePixels();
    //clear options
    select(".options").html("");
  };

  //adds a button and click handler to the options area. When clicked
  //toggle the line of symmetry between horizontal to vertical

  /*  this.populateOptions = function () {
    select(".options").html(
      "<button id='directionButton'>Make Horizontal</button>"
    );
    // 	//click handler
    select("#directionButton").mouseClicked(function () {
      var button = select("#" + this.elt.id);
      if (self.axis == "x") {
        self.axis = "y";
        self.lineOfSymmetry = height / 2;
        button.html("Make Vertical");
      } else {
        self.axis = "x";
        self.lineOfSymmetry = width / 2;
        button.html("Make Horizontal");
      }
    });
  }; */
}
