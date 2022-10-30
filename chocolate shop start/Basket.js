function Basket() {
  this.items = [];

  this.addItem = function (chocolateBar) {
    //is the bar already in items, if it is add one to quantity
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].chocolateBar.name == chocolateBar.name) {
        this.items[i].quantity++;
        return;
      }
    }
    this.items.push({
      chocolateBar: chocolateBar,
      quantity: 1,
    });
  };

  this.basketTotal = function () {
    var total = 0.0;
    for (var i = 0; i < this.items.length; i++) {
      total += this.items[i].chocolateBar.price * this.items[i].quantity;
    }
    return total.toFixed(2);
  };
}
