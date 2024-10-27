"use strict";
/*    JavaScript 7th Edition
      Chapter 8
      Project 08-01

      Project to create a timer object
      Author: Marshall Huckins
      Date: 10/27/24  

      Filename: project08-01.js
*/

/*--------------- Object Code --------------------*/

// Timer Constructor Function
function timer(min, sec) {
  timer.minutes = min;
  timer.seconds = sec;
  timer.timeID = null;
}

// runPause Function
function runPause(timer, minBox, secBox) {
  
  // Define timeID if
  if(timer.timeID) {
    window.clearInterval(timer.timeID);
    timer.timeID = null;
  } else {
    // set up the interval
    timer.timeID = window.setInterval(function()
    {
        countdown(timer, minBox, secBox);
    }, 1000)
  }
}

// countdown function
function countdown(timer, minBox, secBox) {
  // If seconds are more than 0
  if(timer.seconds > 0) {
    timer.seconds -= 1;
  } else if(timer.minutes > 0) {
    timer.minutes -= 1;
    timer.seconds = 59;
  } else {
    //clear the interval
    window.clearInterval(timer.timeID);
    timer.timeId = null;
  }
  
  // Set the minutes and seconds value
  minBox.value = timer.minutes;
  secBox.value = timer.seconds;
}






/*---------------Interface Code -----------------*/

/* Interface Objects */
let minBox = document.getElementById("minutesBox");
let secBox = document.getElementById("secondsBox");
let runPauseTimer = document.getElementById("runPauseButton");
const myTimer = new timer(minBox.value, secBox.value);

minBox.onchange = () => {
    myTimer.minutes = minBox.value;
}

secBox.onchange = () => {
    myTimer.seconds = secBox.value;
}

runPauseTimer.onclick = () => {
    runPause(myTimer, minBox, secBox);
}

