"use strict";
/*
A union type in TypeScript allows a variable to hold values of multiple types.
In other word it's a fixed multiple data type.
It is defined using the | (pipe) symbol between the types.
*/
// only (string | number ) allowed here
// if you need to change the value always use "let"
let album;
// in this union type only (number | boolean) allowed.
let shop;
let d = 10;
album = 40;
console.log(d + album); // result 50 as number
album = "30";
console.log(d + album); // result 1030 as string
