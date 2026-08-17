// in this data_handle.js messa is learning on how to handle, mutate, structurize, and access data properly out of various data collection types.

import { user, users, tables } from "../data.js";
import { advanced_users as adv_users } from "../data.js";

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

const enableEmailNotifications = (data, id) => {
  return data.map((u) => u.id === id ? {
    ...u, settings: {
      ...u.settings, notifications: {
        ...u.settings.notifications, email: true
      }
  } } : u);
}; // was supposed to go through the whole map object, accessing all nested directories instead of fetching only the root object.
// fixed it somehow, ahahha.

// const emailEnabledUsers = enableEmailNotifications(adv_users, 2);

const addTable = (data, newObj) => {
  const addedTable = [...data, newObj];

  return addedTable;
};

const addTableResult = addTable(tables, {
  id: 4,
  name: "Table 4",
  booked: false,
  bookedBy: null,
});

// console.log(addTableResult);
// it appears that the ticket was stating not to mutate the initial data as i did. fixed the issue.

const removeTable = (data, id) => {
  const removedTable = data.filter((table) => table.id !== id);

  return removedTable;
};

// console.log(removeTable(tables, 2));

const renameTable = (data, id, newName) => {
  const renamedTable = data.map((t) => t.id === id ? { ...t, name: newName } : t);

  return renamedTable;
};

// console.log(renameTable(tables, 1, 'VIP Table'));
