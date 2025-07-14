// we use "object" to define the type of an obejct
let myObject: object = { a: 1, b: 2, c: 3 };
// we know an "Array" is also an object
// so, we can reassign the "myObject" with an "Array"
myObject = [1, 2, 3, 4];
console.log(myObject);
// let's make an object with different data types
const myObj1 = {
  name: "Al Amin Khan",
  age: 38,
  gotKids: true,
};
// in above "myObj1" data typed is fixed according to the given data
// if we try to give wrong data type it will parse error
/* 
Here we add "39" to "name" which should be "string"
myObj1.name = 39;  
*/

let myObja: object = [2, 3, 4, 5];
myObja = { a: "one", b: "two", c: "three" };
myObja = (n: number) => {
  let total = n + 20;
  return total;
};
