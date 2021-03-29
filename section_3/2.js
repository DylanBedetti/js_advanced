function two() {
  var isValid;
  console.log(isValid);
}

function one() {
  var isValid = true;
  two();
}

var isValid = false;
one();
