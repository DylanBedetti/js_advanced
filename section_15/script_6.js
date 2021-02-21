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
// console.log("hello");

//  global would be window in a browser

// console.log(this === global);

// (() => console.log(this === global))();

// (function foo() {
//   console.log(this === global);
// })();

// // this becomes the object
// const object4 = {
//   a: function () {
//     console.log(this);
//   },
// };
// object4.a();

// INSTANTIATION - copy of an object and reuse the code
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, I'm a ${this.type}`);
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type);
  }
  play() {
    console.log(`Weeeee i'm a ${this.type}`);
  }
}

const wizard1 = new Wizard("Shelly", "healer");
const wizard2 = new Wizard("sean", "magic");
