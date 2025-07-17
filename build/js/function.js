"use strict";
// Optional Parameters
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(30, 20, 50));
// Default Parameters
function pow(a, b = 10) {
    return Math.pow(a, b);
}
console.log(pow(2));
// Named Parameters
function divide({ divident, divisor }) {
    return divident / divisor;
}
console.log(divide({ divident: 50, divisor: 25 }));
// Rest Parameters
function rest(a, b, ...rest) {
    return a + b + rest.reduce((a, c) => a + c, 0);
}
console.log(rest(10, 20, 5, 5, 5, 5));
const negate = (value) => value * -1;
console.log(negate(20));
const myTesta = function (value) {
    return value * value;
};
function myFunc(myVar1, myVar2) {
    return myVar1 + (myVar2 || "");
}
console.log(myFunc("My Name is ", "Al Amin"));
function getLength(value) {
    return value.length;
}
console.log(getLength("Hello world!")); // length 12
console.log(getLength(20)); // result: undefined
const p1 = {
    name: "Al",
    age: 23,
};
console.log(p1);
