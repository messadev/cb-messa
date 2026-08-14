/*
going through this gh repo of mine, you may think that i am a dumb that is learning the most basic thing. you're right, ahaha.
i never got to build something properly in js.
i know only the theoretical part.
*/

const users = [
  // an array that contains maps with user data
  { id: 1, name: "Ali", age: 22, active: true },
  { id: 2, name: "Aruzhan", age: 18, active: false },
  { id: 3, name: "Danial", age: 30, active: true },
  { id: 4, name: "Amirkhan", age: 11, active: true },
];

const getActiveUsers = (data) => {
  const activeUsers = data.filter((user) => user.active); // filter() method goes through each object in the 'users' array, comparing whether it satisfies the condition given as a callback

  return activeUsers; // returns newly sorted array of map objects
};

console.log(getActiveUsers(users));
