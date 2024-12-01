"use strict";
/*    JavaScript 7th Edition
      Chapter 11
      Project 11-02

      Project to city and state information from a provided postal code
      Author: Marshall Huckins
      Date: 11/30/24  

      Filename: project11-02.js
*/

let postalCode = document.getElementById("postalCode");
let place = document.getElementById("place");
let region = document.getElementById("region");
let country = document.getElementById("country");

postalCode.onblur = function() {
  // Get the values from form
  let codeValue = postalCode.value;
  let countryValue = country.value;

  // Clear the price and region fields
  place.value = "";
  region.value = "";

  fetch(`https://api.zippopotam.us/${countryValue}/${codeValue}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
})
.then(json => {
  place.value = json.places[0]["place name"];
  region.value = json.places[0]["state abbreviation"];
})
.catch(error => {
  console.error("Fetch error:", error);
});

};



