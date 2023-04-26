let operator;
let firstNumber, secondNumber, round = 1;
let lowerDisplayText = document.getElementById("lower-screen");
let upperDisplayText = document.getElementById("upper-screen");

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

function percentage(a, b) {
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
  }
}
