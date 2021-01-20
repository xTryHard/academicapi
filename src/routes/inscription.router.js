'use strict';

const express = require('express');
const router = express.Router();
const InscriptionController = require('./../controllers/inscription.controller');



//Route to get all inscription
router.get('/inscriptions', InscriptionController.getAllInscriptions);

//Route to get single inscription
router.get('/inscriptions/:academicTermCode-:id-:subjectCode-:groupNumber', InscriptionController.getInscriptionByPK);

//Route to post an inscription of a subject
router.post('/inscriptions', InscriptionController.setInscription);

//Route to get all subject inscriptions of a students
router.get('/inscriptions/:academicTermCode-:id', InscriptionController.getStudentInscriptions);

//Route to delete a single inscription
router.delete('/inscriptions/:academicTermCode-:id-:subjectCode-:groupNumber', InscriptionController.deleteInscription);

//route for stored procedure
router.get('/inscriptions/stored/:academicTermCode-:id', InscriptionController.getStudentInscriptionsStored);


module.exports = router;