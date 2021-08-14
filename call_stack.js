function multiply(a, b) {
  console.log("called multiply");
  return a * b;
}

function square(n) {
  console.log("called square");
  return multiply(n, n);
}

function printSquare(n) {
  console.log("called printsquare");
  var squared = square(n);
  console.log(squared);
}

printSquare(4);

// function calls are pushed in to the stack and pops off when returns (Last In First Out)
