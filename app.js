// mathematical functions for calculations

function add(a, b) {
    return a + b;
  }
  
function minus(a, b) {
    return a - b;
  }

function multiply(array) {
    return array.length 
    ? a.reduce((total, current) => total * current)
    : 0;
  }

function division(a, b) {
    if(b === 0) {
        return "ERROR";
    } else if 
        (a === 0 && b < 0) {
            return 0;
    } else {
        return a / b;
    }
}

function remainder(a, b) {
  return a % b;
}


// function which consist of two numbers and an operator

function operate (a, b, operator) {
  if(operator === "+") {
    return a + b;
  } else if (operator === "-") {
    return a - b;
  } else if (operator === "*") {
    return a * b;
  } else if (operator === "/") {
    return a / b;
  } else if (operator === "%") {
    return a % b;
  }
}

// calculation, top and bottom screens

let totalCalc = [];
let firstCalc = "";
const topScreen = document.getElementById("top-display");
const bottomScreen = document.getElementById("bottom-display");

// button for all the numbers

const buttonAll = document.querySelectorAll(".button");
