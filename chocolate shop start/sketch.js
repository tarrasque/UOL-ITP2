var shopStock;
var basket;

//This literal will be used to build the objects in the sketch
var lines = [
  {
    name: "Chocolate Hurricane",
    imageFile: "assets/bar1.png",
    weight: 240,
    price: 1.2,
    quantity: 12,
  },
  {
    name: "Chewy Mallow Fudge",
    imageFile: "assets/bar2.png",
    weight: 240,
    price: 0.9,
    quantity: 23,
  },
  {
    name: "Hazelnut Dream",
    imageFile: "assets/bar3.png",
    weight: 240,
    price: 1.6,
    quantity: 18,
  },
  {
    name: "Peppermint Swirl",
    imageFile: "assets/bar4.png",
    weight: 240,
    price: 1.5,
    quantity: 6,
  },
];

function setup() {
  var c = createCanvas(800, 600);
  c.parent("content");
  //add our chocolate Stock to the shopStock object
  shopStock = new Stock();
  var display = {
    x: 30,
    y: 50,
    width: 150,
    height: 400,
  };

  for (var i = 0; i < lines.length; i++) {
    var l = lines[i];
    shopStock.addStock(
      l.name,
      l.imageFile,
      l.weight,
      l.price,
      l.quantity,
      display.x
    );
    display.x += display.width + 30;
    //console.log("print here " + l.name);
    //console.log("print here " + l.imageFile);
    //console.log("print here " + l.weight);
    //console.log("print here " + l.price);
    //console.log("print here " + l.quantity);
  }

  //create a basket
  basket = new Basket();
}

function draw() {
  background(249, 207, 214);
  //draw the chocolate bars if there is stock
  //console.log("print here " + shopStock.stockLines());
  for (var i = 0; i < shopStock.stockLines(); i++) {
    if (shopStock.getStockLevel(i) > 0) {
      shopStock.getLine(i).chocolateBar.draw();
    } else {
      //if there is no stock draw a helpful message
      //firstly we need the display object from the chocolate bar to get
      //the coordinates
      var display = shopStock.getLine(i).chocolateBar.display;
      fill(200);
      rect(display.x, display.y, display.width, display.height);
      fill(0);
      text(
        "Out of Stock",
        display.x + display.width / 2,
        display.y + display.height / 2
      );
    }
  }
  //display the basket total
  push();
  fill(0);
  textSize(50);
  text("Basket total: £" + basket.basketTotal(), width / 2, height - 50);
  pop();
}
