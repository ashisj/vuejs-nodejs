const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');
const inputValidator = require('../middleware/authValidator');
router.post('/login',authController.login);
router.post('/email',authController.checkEmail);
router.post('/signup',inputValidator.validate('createUser'),authController.signUp);

module.exports = router;