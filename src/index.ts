interface Human {
  name: string;
  age: number;
  gender: string;
}

const me = {
  name: "Jun Hyeok",
  age: 23.9999,
  gender: "male",
};

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(me));

export {};
