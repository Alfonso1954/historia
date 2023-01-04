const PatientPost = require('../models/PatientPost.js')
const path = require('path')
module.exports = (req, res) => {
    PatientPost.create(req.body, (error, patient) => {
        console.log("storePatient Controller")
        if (error) {
            console.log("error al registrar paciente")
            //console.log(Object.keys(error.errors).map(key => error.errors[key].message))
            const validationErrors = Object.keys(error.errors).map(key => error.errors[key].message)
            req.flash('validationErrors',validationErrors)
            req.flash('data',req.body)

            //req.session.validationErrors = validationErrors
            return res.redirect('/patients/new')
        }
        console.log("OK patient registered")
        res.redirect('/') //si todo sale bien redirecciono al index
    })
}