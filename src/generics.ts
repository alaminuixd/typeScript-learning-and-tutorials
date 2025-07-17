type Group = {
  name: string;
  father: string;
  age?: number;
};

type InputType = {
  one: Group[];
  two: Group[];
  three: Group[];
};

function convertToArr<T>(input: T): T[] {
  return [input];
}

const result1 = convertToArr<InputType>({
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
  const filtered: Partial<InputType> = {};
  console.log(Object.keys(item));
  for (const key of Object.keys(item) as (keyof InputType)[]) {
    filtered[key] = item[key].filter((obj) => obj.father === "Syed Ahmed");
  }
  return filtered;
});

function getArrIndex<T>(array: T[], arrItem: T) {
  return array.findIndex((item) => item === arrItem);
}
const fruites = ["mango", "banana", "grapes", "orange", "apple", 100];
console.log(getArrIndex(fruites, 100));
