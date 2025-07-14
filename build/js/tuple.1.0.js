"use strict";
/*
In TypeScript, a tuple is a fixed-length array where each element has a specific type and order.
Unlike regular arrays, tuples allow you to specify the type of each element at a particular position.

Key Features of Tuples:
1) Fixed Length: The number of elements in a tuple is predefined.
2) Typed Elements: Each element in the tuple has a specific type that must be followed.
*/
//* We defined fixed values using ":[types]" that makes it a tuple
// a tuple array example
let myTuple = ["Al Amin", 39, true];
// a mixed array example
let mixed = ["Al Amin", 39, true];
// we can reassign a mixed to a tuple
mixed = myTuple;
console.log(mixed);
// we can change the index 0 position cause it's right position with correct data type
// myTuple[0] position is a "string"
myTuple[0] = "something";
// we can't do like so: myTuple[0] = 52 | as 0 position is a "string"
// or we can't do like so: myTuple[3] = "something" | as mytuple[3] doesn't exist.
console.log(myTuple[0]);
/*
we can't reassign a tuple to a mixed
myTuple = mixed; | error
*/
let myTuplea;
let mixeda = ["Syed Ahmed", "Al Amin", 39];
myTuplea = ["Al Amin", 38, true];
