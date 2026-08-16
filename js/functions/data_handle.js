// in this data_handle.js messa is learning on how to handle, mutate, structurize, and access data properly out of various data collection types.

import { user, users, tables } from "../data.js";

const getUserSummary = (u) => {
  const { name, email } = u;

  return { name: name, email: email };
};

// console.log(getUserSummary(user));

const getDisplayName = ({ name, age }) => {
  return `${name} (${age})`;
};

// console.log(getDisplayName(user));

const updatedUser = { ...user, age: 23 };

// console.log(user);
// console.log(updatedUser);

const activateUser = (data, id) => {
  return data.map((u) => (u.id === id ? { ...u, active: true } : u));
};

// console.log(activateUser(users, 3));

const bookTable = (data, id, u_cred) => {
  return data.map((table) => {
    if (table.id === id && table.booked === false) {
      return { ...table, booked: true, bookedBy: u_cred };
    } else {
      return table;
    }
  });
};

// const initCall = bookTable(tables, 2, "Dana");
// const nextCall = bookTable(initCall, 2, "Alikhan");

// console.log(initCall, nextCall);
