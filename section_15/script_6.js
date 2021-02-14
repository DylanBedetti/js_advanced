// advanced objects
// REFERENCE type
/*
const object1 = { value: 10 };
const object2 = object1;
const object3 = { value: 10 };

console.log([] === []); //false
console.log([1] === [1]); //false
console.log({ value: 10 } === { value: 10 });
console.log(object1 === object2);
console.log(object1 === object3);
*/
// CONTEXT (confused with scope)
console.log("hello");

//  global would be window in a browser

console.log(this === global);

(() => console.log(this === global))();

(function foo() {
  console.log(this === global);
})();
// instantiatiion
