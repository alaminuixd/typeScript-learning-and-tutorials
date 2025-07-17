type usersB = {
  name: string;
  father: string;
  age: number;
  isAdult?: boolean;
  printDetailsB: () => string;
};

function createUserB(name: string, father: string, age: number): usersB {
  const user: usersB = {
    name,
    father,
    age,
    printDetailsB: function () {
      return `My name is ${this.name} son of ${this.father}. I am ${
        this.age
      } years old and I am ${this.isAdult ? "an adult" : "not an adult"}`;
    },
  };
  return getAdultB(user);
}

function getAdultB(user: usersB): usersB {
  user.isAdult = user.age >= 18;
  return user;
}

const userB1 = createUserB("Al Amin", "Syed Ahmed", 39);
const userB2 = createUserB("Abrar Syed", "Al Amin", 6);
console.log(userB1.printDetailsB());
console.log(userB2.printDetailsB());

const user = {
  name: "Al Amin",
  age: 30,
};

type UserType = typeof user;
