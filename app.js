var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
var stores = [];
var names = ["Pike Place", "SeaTac Airport", "Southcenter", "Bellevue Square", "Alki"];
var minCusts = [17, 6, 11, 20, 3];
var maxCusts = [88, 24, 38, 48, 24];
var avgCustCookies = [5.2, 1.2, 1.9, 3.3, 2.6];

var btnEl = document.getElementById("submit");
var nameInput = document.getElementById("storeName");
var minInput = document.getElementById("storeMin");
var maxInput = document.getElementById("storeMax");
var avgInput = document.getElementById("storeAvg");

var clearFields = function(event) {
  nameInput.value = null;
  minInput.value = null;
  maxInput.value = null;
  avgInput.value = null;
};

btnEl.addEventListener("click", function(event) {
event.preventDefault();
var getName = nameInput.value;
var getMin = minInput.value;
var getMax = maxInput.value;
var getAvg = avgInput.value;
var userStore = new Store(getName, getMin, getMax, getAvg);
userStore.render();
clearFields(event);
});

function Store(name, minCust, maxCust, avgCustCookie) {
this.name = name;
this.minCust = minCust;
this.maxCust = maxCust;
this.avgCustCookie = avgCustCookie;
stores.push(this);
this.hourlySales = [];
this.totalSales = 0;
}

Store.prototype.getHourlySales = function() {
for (var i = 0; i < hoursOpen.length; i++) {
  var rand = Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust * this.avgCustCookie);
  this.hourlySales.push(rand);
  this.totalSales += rand;
  }
}

Store.prototype.render = function() {
this.getHourlySales();
var tableEl = document.getElementById("myTable");
var trEl = document.createElement("tr");
trEl.textContent = this.name;

for(var i = 0; i < hoursOpen.length; i++) {
  var tdEl = document.createElement("td");
  tdEl.textContent = this.hourlySales[i];
  trEl.appendChild(tdEl);
}

var tdElTotal = document.createElement("td");
tdElTotal.textContent = "Total: " + this.totalSales;
trEl.appendChild(tdElTotal);
tableEl.appendChild(trEl);
};

window.onload = function() {
for (var i = 0; i < names.length; i++) {
  new Store(names[i], minCusts[i], maxCusts[i], avgCustCookies[i]);
  stores[i].render();
  }
};
