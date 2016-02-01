var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var names = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue Square", "Alki"];
// var stores = [];
// var minCusts = [17, 6, 11, 20, 3];
// var maxCusts = [88, 24, 38, 48, 24];
// var avgCookies = [5.2, 1.2, 1.9, 3.3, 2.6];


var btnEl = document.getElementById("submit");
var nameInput = document.getElementById("storeName");
var minInput = document.getElementById("minInput");
var maxIutput= document.getElementById("maxInput");
var avgInput = document.getElementById("avgInput");

btnEl.addEventListener("click", function(event) {
  event.preventDefault();
  var newStore = event.target.storeLocal.value;
  var getMin = event.target.minInput.value;
  var getMax = event.target.maxInput.value;
  var getAvg = event.target.avgInput.value;
  var userStore = new Store(newStore, getMin, getMax, getAvg);
  userStore.render();
});

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
    var tableEl = document.getElementById("myTable");
    var trEl = document.createElement("tr");
    // storeSection.appendChild(newStore);
    // var ulEl = document.createElement("ul");
    trEl.textContent = this.name;

    for (var i = 0; i < hoursOpen.length; i++) {
      var tdEl = document.createElement("td");
      tdEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      trEl.appendChild(tdEl);
    }
    var tdElTotal = document.createElement("td");
    tdElTotal.textContent = "Total: " + this.totalSales;
    trEl.appendChild(tdElTotal);
    tableEl.appendChild(trEl);
    // newStore.textContent = this.name;
    // newStore.appendChild(ulEl);
  }

  pikePlace.render();
  seaTac.render();
  southcenter.render();
  bellevueSquare.render();
  alki.render();

  // window.onload = function() {
  //   for (var i = 0; i < names.length; i++) {
  //     new Store(names[i], minCusts[i], maxCusts[i], avgCookies[i]);
  //     stores[i].getRandomCust ();
  //     stores[i].getHourlySales ();
  //     stores[i].render ();
  //   }
  // };
