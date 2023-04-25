let operator;
let firstNumber, secondNumber, round = 1;
let lowerDisplayText = document.getElementById("lower-screen");
let upperDisplayText = document.getElementById("upper-screen");

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

const operate = (operator, firstNumber, secondNumber) => {
  let result;
  let x = parseFloat(firstNumber);
  let y = parseFloat(secondNumber);

  if(operator === "+") {
    result = x + y;
  } else if (operator === "-") {
    result = x - y;
  } else if (operator === "*") {
    result = x * y;
  } else if (operator === "/") {
    result = x / y;
  } else {

  }

  if(result.toString().length < 10) {
    return result;
  } else {
    return result.toExponential(5);
  }
}

const addNumbers = (number) => {
  let inputDisplay = lowerDisplayText.innerText;
  if(inputDisplay.length >= 10) {
    maxCharacters();
  } else if (inputDisplay.length === 0) {
    if(number === "0") {
    } else {
      lowerDisplayText.innerText = inputDisplay.concat("", number);
    } 
  } else {
    lowerDisplayText.innerText = inputDisplay.concat("", number);
  }
}

const addOperators = (operator) => {
  if(lowerDisplayText.innerText) {
    round = 1;
    firstNumber = lowerDisplayText.innerText;
    upperDisplayText.innerText = lowerDisplayText.innerText.concat("", operator);
    lowerDisplayText.innerText = "";
  }
}