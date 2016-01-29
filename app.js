var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];

function Store(name, hoursOpen, minCust, maxCust, avgCookie) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;
  this.hoursOpen = hoursOpen;
  this.hourlySales = [];
  this.totalSales = 0;
};

Store.prototype.getRandomCust = function() {
  return Math.random() * (this.maxCust - this.minCust) + this.minCust;
};

Store.prototype.getHourlySales = function () {
  for (var i = 0; i< hoursOpen.length; i++) {
    var rand = Math.floor(this.getRandomCust() * this.avgCookie);
    this.hourlySales.push(rand);
    this.totalSales += rand;
  }
};

var pikePlace = new Store ('Pike Place', 8, 17, 88, 5.2);
var seaTac = new Store ('SeaTac Airport', 8, 6, 24, 1.2);
var southcenter = new Store ('Southcenter', 8, 11, 38, 1.9);
var bellevueSquare = new Store ('Bellevue Square', 8, 20, 48, 3.3);
var alki = new Store ('Alki', 8, 3, 24, 2.6);

Store.prototype.render = function() {
    this.getHourlySales();
    var storeSection = document.getElementById('stores');
    var newStore = document.createElement('section');
    storeSection.appendChild(newStore);
    var ulEl = document.createElement("ul");

    for (var i = 0; i < hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }
    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    newStore.textContent = this.name;
    newStore.appendChild(ulEl);
  }

  pikePlace.render();
  seaTac.render();
  southcenter.render();
  bellevueSquare.render();
  alki.render();

  window.onload = function() {
    for (var i = 0; i < names.length; i++) {
      new Store(names[i], minCusts[i], maxCusts[i], avgCookies[i]);
      stores[i].getRandomCust ();
      stores[i].getHourlySales ();
      stores[i].render ();
    }
  };
