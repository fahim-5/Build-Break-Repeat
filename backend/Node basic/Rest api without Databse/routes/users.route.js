const express = require('express');
const { getAllUsers } = require('../controllers/users.controller');
const router = express.Router();



router.get('/', getAllUsers);

module.exports = router;

