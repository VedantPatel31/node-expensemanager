const express = require('express');
const router = express.Router();
const adaController = require('../Controller/AdaController');


// router.post('/update/:ada/:id',adaController.updateAda);
router.post('/update',adaController.updateAda);

// router.post('/user',studentController.registerStudent);
// router.post('/login',studentController.loginStudent); 
module.exports = router; 