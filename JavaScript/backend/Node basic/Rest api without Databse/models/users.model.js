const { v4: uuid } = require("uuid");
const users = [
  {
    id: uuid(),
    username: "Fahim",
    email: "fahim@example.com",
  },
  {
    id: uuid(),
    username: "John",
    email: "john@example.com",
  },
];


module.exports = users;
