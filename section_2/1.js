function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
console.log(obj1);
console.log(process.memoryUsage());

// import
import MyDefaultComponent from "./MyDefaultExport";
// export
const MyComponent = () => {};
export default MyComponent;

// imports
// ex. importing a single named export
import { MyComponent } from "./MyComponent";
// ex. importing multiple named exports
import { MyComponent, MyComponent2 } from "./MyComponent";
// ex. giving a named import a different name by using "as":
import { MyComponent2 as MyNewComponent } from "./MyComponent";
// exports from ./MyComponent.js file
export const MyComponent = () => {};
export const MyComponent2 = () => {};
