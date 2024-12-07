/*
  Pragmatic JavaScript
  Chapter 3
  Programming Assignment

  Author: Marshall Huckins
  Date: 12/7/24
  Filename: chefs.js
*/

"use strict";

// TODO: Define an array of chef objects
let chefs = [
  // Each chef object should have a name, specialty, weakness, and restaurantLocation
  {name: "Chef Gordon", specialty: "Italian", weakness: "Desserts", restaurantLocation: "Rome"},
  {name: "Chef Julia", specialty: "French", weakness: "Seafood", restaurantLocation: "Paris"},
  {name: "Chef Kenji", specialty: "Japanese", weakness: "Sushi", restaurantLocation: "Tokyo"}
];

// TODO: Define a function to retrieve the first chef's information
function retrieveChef1() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
      ? resolve(chefs[0])
      : reject("Failed to retrieve Chef Gordon's information.");
    }, 1000);
  });
}

// TODO: Define a function to retrieve the second chef's information
function retrieveChef2() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
      ? resolve(chefs[1])
      : reject("Failed to retrieve Chef Julia's information.");
    }, 2000);
  });
}

// TODO: Define a function to retrieve the third chef's information
function retrieveChef3() {
  // This function should return a promise that resolves with the chef's information after a delay
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
      ? resolve(chefs[2])
      : reject("Failed to retrieve Chef Kenji's information.");
    }, 3000);
  });
}

// TODO: Use Promise.allSettled to retrieve all chefs' information and update the webpage accordingly
Promise.allSettled([retrieveChef1(), retrieveChef2(), retrieveChef3()])
  .then((results) => {
    results.forEach((result, index) => {
      const chefDiv = document.getElementById(`chef${index + 1}`);
      if (result.status === "fulfilled") {
        const {name, specialty, weakness, restaurantLocation} = result.value;
        chefDiv.innerHTML = `
        <h3>${name}</h3>
        <p><strong>Specialty:</strong> ${specialty}</p>
        <p><strong>Weakness:</strong> ${weakness}</p>
        <p><strong>Location:</strong> ${restaurantLocation}</p>`;
      }
    });
  })
  .catch((error) => {
    console.error("An unexpected error occurred:", error);
  });