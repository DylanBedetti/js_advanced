// function and block scoping

// var fruit1 = "apple";
// let fruit2 = "orange";
// const fruit3 = "bananana";

// function foo() {
//   console.log(fruit1);
//   console.log(fruit2);
//   console.log(fruit3);
// }

// if (true) {
//   console.log(fruit1);
//   console.log(fruit2);
//   console.log(fruit3);
// }

// foo();

function scope() {
  var fruit1 = "apple";
  let fruit2 = "orange";
  const fruit3 = "bananana";
}
// foo();

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);

const compose = (f, g) => (a) => f(g(a));
const sum = (num) => num + 1;
compose(num, num)(5);
