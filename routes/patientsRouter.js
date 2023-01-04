const express = require('express');
const router = express.Router();

//midlewares
const authMiddleware = require('../middleware/authMiddleware');

//Controllers
const patientsController = require('../controllers/patients');
const storePatientController = require('../controllers/storePatient');

router.get('/new', authMiddleware, patientsController);//valido inicio sesion
/*
app.get('/patients/new', (req, res) => {
    res.json({
        route: 'pattients/new'
    })
})
*/

router.post('/store', authMiddleware, storePatientController);  // --> /patients/store

module.exports = router;