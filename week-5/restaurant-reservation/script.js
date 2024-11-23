/*
  Pragmatic JavaScript
  Chapter 2
  Programming Assignment

  Author: Marshall Huckins
  Date: 11/23/24
  Filename:
*/

// Create an in-memory object array for each table in the restaurant
let tables = [
  // Add your table objects here
  { tableNumber: 1, capacity: 4, isReserved: false },
  { tableNumber: 2, capacity: 4, isReserved: false },
  { tableNumber: 3, capacity: 10, isReserved: false },
  { tableNumber: 4, capacity: 6, isReserved: false },
];

// Create a function reserveTable
function reserveTable(tableNumber, callback, time) {
  const table = tables.find(t => t.tableNumber === parseInt(tableNumber));
  
  if (table && !table.isReserved) {
      table.isReserved = true; 
      setTimeout(() => {
          callback(`Success: Table ${tableNumber} has been reserved.`);
      }, time); 
  } else {
      callback(`Error: Table ${tableNumber} is already reserved.`);
  }
}

// When the form is submitted, call the reserveTable function
document
  .getElementById("reservationForm")
  .addEventListener("submit", function (e) {
    // Add your code here
    event.preventDefault();

    const name = document.getElementById('name').value;
    const tableNumber = document.getElementById('tableNumber').value;
    const messageElement = document.getElementById('message');

    if (!tableNumber) {
        messageElement.textContent = "Please select a table.";
        return;
    }

    reserveTable(tableNumber, (message) => {
        messageElement.textContent = `${name}, ${message}`;
    }, 2000); 
  });
