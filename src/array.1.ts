// array data type is "string";
const fruits = ["Mango", "Apple", "Stawberry", "Grapes", "Pear"];
// array data type is "string";
const price = [10, 30, 40, 9000];
// array data type is "mixed types";
const data = ["remote", 345, "local", "uploaded", true];

// correct
fruits[0] = "Guava";
console.log(fruits[0]);
/* // incorrect as "fruits" data type is "string";
fruits[1] = 52; */

// correct
price[0] = 30;
console.log(price[0]);
/* // incorrect
price[0] = "twenty";
console.log(price[0]); */

//correct
data[0] = 345;
console.log(data[0]);
data[0] = "something";
console.log(data[0]);
data.unshift(50);
console.log(data[0]);

// Array that can hold any type of data.
// An empty array without explicit type defaults to `any[]` in TypeScript.
const anyType = []; // TypeScript infers this as `any[]`
// we can also prefix it's type before any array like so.
const anyType2: any[] = [];
// string type array
const strType: string[] = [];
// mixed type array.
const mixedArray: (string | number)[] = []; // More type-safe
