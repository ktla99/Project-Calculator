const restart = document.querySelector(".restart");
const positiveNegative = document.querySelector(".positiveNegative");
const percentage = document.querySelector(".percentage");
const equal = document.querySelector(".equal");
const decimal = document.querySelector(".dot");

const zero = document.querySelector(".numberZero");
const one = document.querySelector(".numberOne");
const two = document.querySelector(".numberTwo");
const three = document.querySelector(".numberThree");
const four = document.querySelector(".numberFour");
const five = document.querySelector(".numberFive");
const six = document.querySelector(".numberSix");
const seven = document.querySelector(".numberSeven");
const eight = document.querySelector(".numberEight");
const nine = document.querySelector(".numberNine");

function add(a, b) {
    const addition = document.querySelector(".addition");
    return a + b;
  };
  
function minus(a, b) {
    const subtract = document.querySelector(".subtract");
    return a - b;
  };

function multiply(array) {
    const multiplication = document.querySelector(".multiplication")
    return array.length 
    ? a.reduce((total, current) => total * current)
    : 0;
  };

function division(a, b) {
    const divide = document.querySelector(".divide");
    if(b === 0) {
        return "ERROR";
    } else if 
        (a === 0 && b < 0) {
            return 0;
    } else {
        return a / b;
    }
};

function 

