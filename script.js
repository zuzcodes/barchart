"use strict";

window.addEventListener("DOMContentLoaded", init);

const customerVolume = [];

//creating 40 random numbers and calling for looping between these numbers
function init() {
  const customersATM = getRandom();

  for (let i = 0; i < 40; i++) {
    customerVolume.push(customersATM);
  }
  
  delayResult();
}

//getting random number
function getRandom() {
  return Math.floor(Math.random() * 32);
}

//outputting a new result every second and calling for modifying the array with this result => what is the number of cutomers ATM
function delayResult() {
  setTimeout(delayResult, 1000);
  modifyCustomerVolume();
}

function modifyCustomerVolume() {
  const customersATM = getRandom();
  customerVolume.shift();
  customerVolume.push(customersATM);
  displayCustomerVolume();
}

//displaying the randomization (number of customers ATM) on the height property of the bars in the chart (HTML)
function displayCustomerVolume() {
  const bar = document.querySelectorAll(".bar");
  let num = 0;

  bar.forEach((bar) => {
    let thisAmount = customerVolume[num];
    bar.style.height = thisAmount + "vw";
    num++;
    console.log(customerVolume[customerVolume.length - 1]);
  });
}
