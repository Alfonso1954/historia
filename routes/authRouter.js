const express = require('express');
const router = express.Router();

//const authMiddleware = require('../middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('../middleware/redirectIfAuthenticatedMiddleware');

//controllers
const newUserController = require('../controllers/newUser');
const loginController = require('../controllers/login');
const logoutController = require('../controllers/logout');

//rutas
router.get('/register', redirectIfAuthenticatedMiddleware, newUserController);
router.get('/login', redirectIfAuthenticatedMiddleware, loginController);
router.get('/logout', logoutController);


module.exports = router;