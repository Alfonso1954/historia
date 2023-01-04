const express = require('express');
const router = express.Router();

//const authMiddleware = require('../middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('../middleware/redirectIfAuthenticatedMiddleware');

//controllers
const loginUserController = require('../controllers/loginUser');
const storeUserController = require('../controllers/storeUser');

//rutas
router.post('/login', redirectIfAuthenticatedMiddleware, loginUserController);
router.post('/register', redirectIfAuthenticatedMiddleware, storeUserController);

module.exports = router;