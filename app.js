const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
      return a - b;
  };

const multiply = function(a) {
    return a.length ? a.reduce((total, current) => total * current) : 0;
  };

