// in this data_handle.js messa is learning on how to handle, mutate, structurize, and access data properly out of various data collection types.

import { user } from "../data.js";

const getUserSummary = (u) => {
  const { name, email } = u;

  return { name: name, email: email };
};

// console.log(getUserSummary(user));

const getDisplayName = (u) => {
  return `${u.name} (${u.age})`;
};

// console.log(getDisplayName(user));

const updateUser = (u) => {
  const updatedUser = { ...u };

  updatedUser.age = 23;

  return updatedUser;
};

console.log(user);
console.log(updateUser(user));
