/*
going through this gh repo of mine, you may think that i am a dumb that is learning the most basic thing. you're right, ahaha.
i never got to build something properly in js.
i know only the theoretical part.
*/

import { users, orders } from "../data.js";

const getActiveUsers = (data) => {
  const filtered = data.filter((user) => user.active && user.age >= 18);

  const simplifiedArray = filtered.map((user) => {
    return { id: user.id, name: user.name };
  });

  simplifiedArray.sort((x, y) => x.name.localeCompare(y.name));

  return simplifiedArray;
};

// console.log(getActiveUsers(users));

const getUserById = (data, id) => {
  return data.find((user) => user.id === id);
};

// console.log(getUserById(users, 3));

const hasUnderageUsers = (data) => {
  return data.some((user) => user.age < 18);
};

const areAllUsersActive = (data) => {
  return data.every((user) => user.active === true);
};

// console.log(hasUnderageUsers(users));
// console.log(areAllUsersActive(users));

const getAverageAge = (data) => {
  return data.reduce((acc, curr) => acc + curr.age, 0);
};

// console.log(getAverageAge(users));

const getCompletedRevenue = (data) => {
  const completedOrders = data.filter((order) => order.status === "completed");

  return completedOrders.reduce((init, next) => init + next.total, 0);
};

// console.log(getCompletedRevenue(orders));
