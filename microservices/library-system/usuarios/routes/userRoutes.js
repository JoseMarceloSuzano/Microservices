const express = require('express');
const { createUser, getAllUsers, getUserById } = require('../controllers/userController');

const router = express.Router();

router.post('/usuarios', createUser);
router.get('/usuarios', getAllUsers);
router.get('/usuarios/:id', getUserById);

module.exports = router;