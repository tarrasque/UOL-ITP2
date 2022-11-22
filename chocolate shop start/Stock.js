function Stock() {
  //an array to hold the stock
  this.stock = [];

  //add a chocolate bar to the array each item has a chocolate bar object and a
  //quantity

  this.addStock = function (name, imageFile, weight, price, quantity, display) {
    this.stock.push({
      chocolateBar: new ChocolateBar(name, imageFile, weight, price, display),
      quantity: quantity,
    });
  };

  //get the number of lines of chocolate bars
  this.stockLines = function () {
    //console.log("print here " + this.stockLines.length);
    return this.stockLines.length;
  };

  //return a particular chocolate bar and stock level from the array by index
  this.getLine = function (i) {
    return this.stock[i];
  };

  //check if any of the bars have been clicked. If a bar has been clicked
  //return its corresponding chocolateBar object
  this.checkClick = function (x, y) {
    for (var i = 0; i < this.stock.length; i++) {
      if (this.stock[i].chocolateBar.wasClicked(x, y)) {
        return this.stock[i].chocolateBar;
      }
    }
    return null;
  };

  //if a bar is in stock and its added to the basket reduce the stock quantity and
  //return true otherwise return false.
  this.reduceStock = function (chocolateBar) {
    for (var i = 0; i < this.stock.length; i++) {
      if (this.stock[i].chocolateBar.name == chocolateBar.name) {
        if (this.stock[i].quantity > 0) {
          this.stock[i].quantity--;
          return true;
        } else {
          return false;
        }
      }
    }
  };

  //return the level of stock available
  this.getStockLevel = function (i) {
    return this.stock[i].quantity;
  };
}
