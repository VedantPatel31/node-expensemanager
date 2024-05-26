const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController');

router.post('/user',userController.registerUserWithEnc);
router.post('/login',userController.loginUserWithEnc);

module.exports = router; 