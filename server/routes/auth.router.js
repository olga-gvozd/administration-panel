const Router = require('express');
const router = new Router();
const authController = require('./../controllers/auth.controller');

const { check } = require('express-validator');

router.post('/registration', [
  check('username')
    .not()
    .isEmpty()  
    .withMessage('Cannot be empty')
    .isLength({max: 256})
    .withMessage('Should be less than 256 characters'),
  check('password')
    .isLength({min: 4})
    .withMessage('Password should be more than 4 characters')
    .isLength({max: 10})
    .withMessage('Password should less than 10 characters')
], authController.registration);

router.post('/login', authController.login);
router.get('/users', authController.getUsers);

module.exports = router;