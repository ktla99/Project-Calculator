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

const zeroButton = document.getElementById("zero");
const oneButton = document.getElementById("one");
const twoButton = document.getElementById("two");
const threeButton = document.getElementById("three");
const fourButton = document.getElementById("four");
const fiveButton = document.getElementById("five");
const sixButton = document.getElementById("six");
const sevenButton = document.getElementById("seven");
const eightButton = document.getElementById("eight");
const nineButton = document.getElementById("nine");

// operator buttons

const sumButton = document.getElementById("add");
const subtractButton = document.getElementById("subtract");
const multiplyButton = document.getElementById("multiply");
const divisionButton = document.getElementById("divide");
const remainderButton = document.getElementById("percent");

// other buttons

const clearAllButton = document.getElementById("clear");
const deleteButton = document.getElementById("back-space");
const negativeButton = document.getElementById("positiveNegative");
const equalButton = document.getElementById("equal");

// functions for numbered buttons

zeroButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("0");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

oneButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("1");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

twoButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("2");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

threeButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("3");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

fourButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("4");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

fiveButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("5");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

sixButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("6");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

sevenButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("7");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

eightButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("8");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

nineButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.concat("9");
  topScreen.innerHTML = firstCalc;
  console.log(firstCalc);
  return firstCalc;
});

// Functions for operators

sumButton.addEventListener('click', function(e){
  if(firstCalc === '') {
    alert("You need to input a number next!")
  return;
}
console.log(firstCalc === '');
let firstCalcNumber = parseFloat(firstCalc);
totalCalc.push(firstCalcNumber, "+");
bottomScreen.innerHTML = totalCalc.join('');
firstCalc = '';
topScreen.innerHTML = '';
console.log(totalCalc);
});

multiplyButton.addEventListener('click', function(e) {
  if(firstCalc === '') {
    alert("You need to input a number next!")
    return;
  }
  console.log(firstCalc === '');
  let firstCalcNumber = parseFloat(firstCalc);
  totalCalc.push(firstCalc, "*");
  bottomScreen.innerHTML = totalCalc.join('');
  firstCalc = '';
  topScreen.innerHTML = '';
  console.log(totalCalc);
});

divisionButton.addEventListener('click', function(e) {
  if(firstCalc === '') {
    alert("You need to input a number next!")
    return;
  }
  console.log(firstCalc === '');
  let firstCalcNumber = parseFloat(firstCalc);
  totalCalc.push(firstCalc, "/");
  bottomScreen.innerHTML = totalCalc.join('');
  firstCalc = '';
  topScreen.innerHTML = '';
  console.log(totalCalc);
});

subtractButton.addEventListener('click', function(e) {
  if(firstCalc === '') {
    alert("You need to input a number next!")
    return;
  }
  console.log(firstCalc === '');
  let firstCalcNumber = parseFloat(firstCalc);
  totalCalc.push(firstCalc, "-");
  bottomScreen.innerHTML = totalCalc.join('');
  firstCalc = '';
  topScreen.innerHTML = '';
  console.log(totalCalc);
});

remainderButton.addEventListener('click', function(e) {
  if(firstCalc === '') {
    alert("You need to input a number next!")
    return;
  }
  console.log(firstCalc === '');
  let firstCalcNumber = parseFloat(firstCalc);
  totalCalc.push(firstCalc, "%");
  bottomScreen.innerHTML = totalCalc.join('');
  firstCalc = '';
  topScreen.innerHTML = '';
  console.log(totalCalc);
});

// Erase and delete buttons

clearAllButton.addEventListener('click', function(e) {
  totalCalc = [];
  firstCalc = '';
  topScreen.innerHTML = total.join('');
  bottomScreen.innerHTML = '';
});

deleteButton.addEventListener('click', function(e) {
  firstCalc = firstCalc.slice(0, -1);
  bottomScreen.innerHTML = firstCalc;
  return firstCalc;
});
