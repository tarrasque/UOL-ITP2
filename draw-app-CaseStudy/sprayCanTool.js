function sprayCanTool() {
  this.icon = "assets/sprayCan.jpg";
  this.name = "Spray Can";
  this.points = 13;
  this.spread = 10;

  this.draw = function () {
    if (mouseIsPressed) {
      for (var i = 0; i < this.points + random(0, 5); i++) {
        point(
          random(mouseX - this.spread, mouseX + this.spread),
          random(mouseY - this.spread, mouseY + this.spread)
        );
      }
    }
  };
}
