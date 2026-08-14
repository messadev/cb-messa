/*
going through this gh repo of mine, you may think that i am a dumb that is learning the most basic thing. you're right, ahaha.
i never got to build something properly in js.
i know only the theoretical part.
*/

const users = [
  { id: 1, name: "Alikhan", age: 18, active: true },
  { id: 2, name: "Aruzhan", age: 18, active: false },
  { id: 3, name: "Danial", age: 30, active: true },
  { id: 4, name: "Amirkhan", age: 11, active: true },
];

const getActiveUsers = (data) => {
  data.sort((x, y) => x.name.localeCompare(y.name));

  const filtered = data.filter((user) => user.active && user.age >= 18);

  const simplifiedArray = filtered.map((user) => {
    return { id: user.id, name: user.name };
  });

  return simplifiedArray;
};

console.log(getActiveUsers(users));
