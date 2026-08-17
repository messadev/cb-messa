// an array containing multiple map objects with fake user data
export const users = [
  { id: 1, name: "Alikhan", age: 18, active: true },
  { id: 2, name: "Aruzhan", age: 18, active: false },
  { id: 3, name: "Danial", age: 30, active: true },
  { id: 4, name: "Amirkhan", age: 11, active: true },
];

// an array containing multiple map objects with fake order data
export const orders = [
  { id: 1, userId: 1, total: 5000, status: "completed" },
  { id: 2, userId: 3, total: 12000, status: "pending" },
  { id: 3, userId: 1, total: 7000, status: "completed" },
  { id: 4, userId: 2, total: 3000, status: "cancelled" },
  { id: 5, userId: 3, total: 9000, status: "completed" },
];

// a map object containing fake user data
export const user = {
  id: 1,
  name: "Ali",
  age: 22,
  email: "ali@example.com",
  active: true,
};

export const tables = [
  { id: 1, name: "Table 1", booked: false, bookedBy: null },
  { id: 2, name: "Table 2", booked: false, bookedBy: null },
  { id: 3, name: "Table 3", booked: true, bookedBy: "Ali" },
];

export const advanced_users = [
  {
    id: 1,
    name: "Ali",
    settings: {
      theme: "dark",
      notifications: {
        email: true,
        sms: false,
      },
    },
  },
  {
    id: 2,
    name: "Dana",
    settings: {
      theme: "light",
      notifications: {
        email: false,
        sms: true,
      },
    },
  },
];
