// Optional Parameters
function add(a: number, b: number, c?: number) {
  return a + b + (c || 0);
}
console.log(add(30, 20, 50));
// Default Parameters
function pow(a: number, b: number = 10) {
  return a ** b;
}
console.log(pow(2));
// Named Parameters
function divide({ divident, divisor }: { divident: number; divisor: number }) {
  return divident / divisor;
}
console.log(divide({ divident: 50, divisor: 25 }));

// Rest Parameters
function rest(a: number, b: number, ...rest: number[]) {
  return a + b + rest.reduce((a, c) => a + c, 0);
}
console.log(rest(10, 20, 5, 5, 5, 5));

// Type Alias
type Negate = (value: number) => number;
const negate: Negate = (value) => value * -1;
console.log(negate(20));

type Test = (value: number) => number;
const myTesta: Test = function (value) {
  return value * value;
};

function myFunc(myVar1: string, myVar2?: string) {
  return myVar1 + (myVar2 || "");
}

console.log(myFunc("My Name is ", "Al Amin"));

function getLength(value: unknown) {
  return (value as string).length;
}
console.log(getLength("Hello world!")); // length 12
console.log(getLength(20)); // result: undefined

interface Person {
  name: string;
  father: string;
  age: number;
}

const p1: Partial<Person> = {
  name: "Al",
  age: 23,
};
console.log(p1);
