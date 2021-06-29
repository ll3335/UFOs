# Query: 
# ContextLines: 1

// import the data from data.js
const tableData = data;

// Refenrence the HTML table using d3
var tbody = d3.select("tbody");

// Simple JavaScript console.log statement
function printHello()}
    console.log("Hello there!");
}

// Takes two numbers and adds them
function addition(a, b) {
    return a + b;
  }

  // Functions can call other functions
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
  }

  // Converted to an arrow function
addition = (a, b) => a + b;
doubleAddition = (c, d)=> addition(c, d) * 2;

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }
 
 var vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    console.log("I love " + vegetables[i]);
}
for (var i = 0; i < 5; i++) {
    console.log("I am " + i);
 }

 function buildTable(data) {
    tbody.html("");
  }
 
  data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });
