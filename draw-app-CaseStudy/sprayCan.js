//spray can object literal
sprayCan = {
  name: "sprayCanTool",
  icon: "assets/sprayCan.jpg",
  points: 13,
  spread: 10,
  draw: function () {
    //if the mouse is pressed paint on the canvas
    //spread describes how far to spread the paint from the mouse pointer
    //points holds how many pixels of paint for each mouse press.
    if (mouseIsPressed) {
      for (var i = 0; i < this.points; i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  },
};
