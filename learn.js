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

// console.log(getActiveUsers(users));

const getUserById = (data, id) => {
  return data.find((user) => user.id === id);
};

// console.log(getUserById(users, 3));

const hasUnderageUsers = (data) => {
  return data.some((user) => user.age >= 18);
};

const areAllUsersActive = (data) => {
  return data.every((user) => user.active === true);
};

// console.log(hasUnderageUsers(users));
// console.log(areAllUsersActive(users));

const getAverageAge = (data) => {
  return data.reduce((acc, curr) => acc + curr.age, 0) / data.length;
};

// console.log(getAverageAge(users));
