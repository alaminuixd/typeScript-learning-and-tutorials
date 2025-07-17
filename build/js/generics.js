"use strict";
function convertToArr(input) {
    return [input];
}
const result1 = convertToArr({
    one: [
        { name: "Al Amin", father: "Syed Ahmed", age: 39 },
        { name: "Syeda Sultana", father: "Syed Ahmed", age: 45 },
    ],
    two: [
        { name: "Abrar Syed", father: "Al Amin", age: 6 },
        { name: "Arshiya Amin", father: "Al Amin", age: 4 },
    ],
    three: [
        { name: "Ruhul Amin", father: "Syed Ahmed", age: 35 },
        { name: "Golam Rasul", father: "Syed Ahmed" },
    ],
});
const filtered1 = result1.map((item) => {
    const filtered = {};
    console.log(Object.keys(item));
    for (const key of Object.keys(item)) {
        filtered[key] = item[key].filter((obj) => obj.father === "Syed Ahmed");
    }
    return filtered;
});
function getArrIndex(array, arrItem) {
    return array.findIndex((item) => item === arrItem);
}
const fruites = ["mango", "banana", "grapes", "orange", "apple", 100];
console.log(getArrIndex(fruites, 100));
