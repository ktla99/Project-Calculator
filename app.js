const clear = document.querySelector("#clear");
const operator = document.querySelectorAll('#operator');
const firstNumber = document.querySelectorAll('#number');
const secondNumber = document.querySelectorAll('#number');

function add(a, b) {
    return a + b;
  };
  
function minus(a, b) {
    return a - b;
  };

function multiply(array) {
    return array.length 
    ? a.reduce((total, current) => total * current)
    : 0;
  };

function division(a, b) {
    if(b === 0) {
        return "ERROR";
    } else if 
        (a === 0 && b < 0) {
            return 0;
    } else {
        return a / b;
    }
};

function operate (firstNumber, secondNumber) {
  if(firstNumber + secondNumber) {
    return add(firstNumber, secondNumber);
  } else if (firstNumber - secondNumber) {
    return minus(firstNumber, secondNumber);
  } else if (firstNumber * secondNumber) {
    return multiply(firstNumber, secondNumber);
  } else {
    return division(firstNumber, secondNumber);
  }
};

