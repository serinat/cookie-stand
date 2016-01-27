var hoursOpen = ["10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"];
//Pike Place Store
var pikePlace = {
  name: "Pike Place",
  minCust: 17,
  maxCust: 88,
  avgCustCookie: 5.2,
  hourlySales: [],
  totalSales: 0,
  getRandomCust: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  getHourlySales: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCustCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
  render: function() {
    this.getHourlySales();
    var sectionEl = document.getElementById("pikePlaceStore");
    var ulEl = document.createElement("ul");

    for(var i=0; i< hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    sectionEl.textContent = this.name;
    sectionEl.appendChild(ulEl);
  },
};

pikePlace.render();
//SeaTac Airport Store
var seaTac = {
  name: "SeaTac Airport",
  minCust: 17,
  maxCust: 88,
  avgCustCookie: 5.2,
  hourlySales: [],
  totalSales: 0,
  getRandomCust: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  getHourlySales: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCustCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
  render: function() {
    this.getHourlySales();
    var sectionEl = document.getElementById("seaTacStore");
    var ulEl = document.createElement("ul");

    for(var i=0; i< hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    sectionEl.textContent = this.name;
    sectionEl.appendChild(ulEl);
  },
};

seaTac.render();
//Southcenter Store
var southcenter = {
  name: "Southcenter",
  minCust: 17,
  maxCust: 88,
  avgCustCookie: 5.2,
  hourlySales: [],
  totalSales: 0,
  getRandomCust: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  getHourlySales: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCustCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
  render: function() {
    this.getHourlySales();
    var sectionEl = document.getElementById("southcenterStore");
    var ulEl = document.createElement("ul");

    for(var i=0; i< hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    sectionEl.textContent = this.name;
    sectionEl.appendChild(ulEl);
  },
};

southcenter.render();
//Bellevue Square Store
var bellevuesquare = {
  name: "Bellevue Square",
  minCust: 17,
  maxCust: 88,
  avgCustCookie: 5.2,
  hourlySales: [],
  totalSales: 0,
  getRandomCust: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  getHourlySales: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCustCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
  render: function() {
    this.getHourlySales();
    var sectionEl = document.getElementById("bellevueSquareStore");
    var ulEl = document.createElement("ul");

    for(var i=0; i< hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    sectionEl.textContent = this.name;
    sectionEl.appendChild(ulEl);
  },
};

bellevuesquare.render();
//Alki Store
var alki = {
  name: "Alki",
  minCust: 17,
  maxCust: 88,
  avgCustCookie: 5.2,
  hourlySales: [],
  totalSales: 0,
  getRandomCust: function() {
    return Math.random() * (this.maxCust - this.minCust) + this.minCust;
  },
  getHourlySales: function() {
    for (var i = 0; i < hoursOpen.length; i++) {
      var rand = Math.floor(this.getRandomCust() * this.avgCustCookie);
      this.hourlySales.push(rand);
      this.totalSales += rand;
    }
  },
  render: function() {
    this.getHourlySales();
    var sectionEl = document.getElementById("alkiStore");
    var ulEl = document.createElement("ul");

    for(var i=0; i< hoursOpen.length; i++) {
      var liEl = document.createElement("li");
      liEl.textContent = hoursOpen[i] + ": " + this.hourlySales[i];
      ulEl.appendChild(liEl);
    }

    var liElTotal = document.createElement("li");
    liElTotal.textContent = "Total: " + this.totalSales;
    ulEl.appendChild(liElTotal);
    sectionEl.textContent = this.name;
    sectionEl.appendChild(ulEl);
  },
};

alki.render();

// pikePlace.randomNumber = function(minCustomer, maxCustomer) {
//   return Math.randomNumber() * (maxCustomer - minCustomer) + minCustomer;
// };
//
// pikePlace.randomCustomer = function(17, 188) {
//   return Math.random() * (188 - 17) + 17;
//
// pikePlace.cookieArr.push(pikePlace.randomcustomer(pikePlace.minCustomer, pikePlace.maxCustomer));
