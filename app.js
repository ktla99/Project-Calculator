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
  let results;
}
