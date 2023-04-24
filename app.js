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

