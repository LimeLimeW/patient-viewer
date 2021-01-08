const express = require('express');
const router = express.Router();
const Patient = require('../../models/Patient')

router.post('/patient', (req, res, next) => {

    var patient = new Patient({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        birthday: req.body.birthday,
        height: req.body.height,
        weight: req.body.weight,
        email: req.body.email,
        gender: req.body.gender
    });

    patient.save(function (err, resp) {
        if (err) {
            console.log(err);
            res.send({
                message: err
            });
        } else {
            res.send({
                message: 'Patient sauvegardé.'
            });
        }
    })
})

router.get('/patients', (req, res, next) => {
    Patient.find()
        .then(data => res.json(data))
        .catch(next)
}); 

module.exports = router;