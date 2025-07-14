"use strict";
const routes = {
    home: "/",
    admin: "/admin",
    users: "/users",
};
const gotoRoute = (route) => {
    console.log("Navigating to", route);
};
function getAdult(user) {
    user.age >= 18 ? (user.isAdult = true) : (user.isAdult = false);
    return user;
}
const user1 = {
    name: "Al Amin",
    father: "Syed Ahmed",
    age: 39,
    greetings: function () {
        return `My name is ${this.name} sone of ${this.father}. I am ${this.age} years old. and I am ${this.isAdult ? "an adult" : "not an adult"}`;
    },
};
const user2 = {
    name: "Abrar Syed",
    father: "Al Amin",
    age: 6,
    greetings: function () {
        return `My name is ${this.name} sone of ${this.father}. I am ${this.age} years old. and I am ${this.isAdult ? "an adult" : "not an adult"}`;
    },
};
console.log(getAdult(user1));
console.log(getAdult(user2));
console.log(user1.greetings());
console.log(user2.greetings());
