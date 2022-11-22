//check for mouse clicks
function mousePressed() {
  //call the check click function in the stock object
  var clickedBar = this.shopStock.checkClick(mouseX, mouseY);
  //if a chocolate bar is returned there is stock and we can add it to the basket
  if (clickedBar != null && shopStock.reduceStock(clickedBar)) {
    basket.addItem(clickedBar);
    console.log(basket);
  }
}
