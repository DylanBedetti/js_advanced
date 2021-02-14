// map, filter & reduce
const array = [1, 2, 10, 16];

double = [];
// does operations on items of the array
const newArray = array.forEach((num) => {
  double.push(num * 2);
});
console.log(`forEach: ${double}`);

// map has to return something - transforms the array
const mapArray = array.map((num) => {
  return num * 2;
});
console.log(`map: ${mapArray}`);

// boolean condition check to filter elements of an array
const filterArray = array.filter((num) => {
  return num > 5;
});
console.log(`filter: ${filterArray}`);

// can do filtering and mapping
const reduceArray = array.reduce((accumulator, num) => {
  return accumulator + num;
}, 0);
console.log(`reduce: ${reduceArray}`);
