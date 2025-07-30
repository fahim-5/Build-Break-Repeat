const users = require("../models/users.model");
const { v4: uuid } = require("uuid");

const getAllUsers = (req, res) => {
  res.status(200).json({ users });
};

const createUser = (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const newUser = { id: uuid(), username, email };
  users.push(newUser);
  res.status(201).json({ user: users });
};

// update user
const updateUser = (req, res) => {
  const userId = req.params.id;
  const { username, email } = req.body;
  users.filter((user) => {
    if (user.id === userId) {
      user.username = username;
      user.email = email;
    }
  });
  res.status(200).json({ users });
};

const deleteUser = (req, res) => {
  const userId = req.params.id;
  const index = users.findIndex((user) => user.id === userId);
  if (index !== -1) {
    users.splice(index, 1);
  }
  res.status(200).json({ users });    
};


module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
