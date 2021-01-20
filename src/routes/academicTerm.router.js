'use strict';
const express = require('express');
const router = express.Router();

const AcademicTermController = require('./../controllers/academicTerm.controller');

//Route for getting all academic terms 
router.get('/terms', AcademicTermController.getAllAcademicTerms);

//Route from getting academic term by PK 
router.get('/terms/:code', AcademicTermController.getAcademicTermByPK);

//Route for posting an academic term
router.post('/terms', AcademicTermController.postAcademicTerm);

//Route for putting/updating academic term
router.put('/terms/:code', AcademicTermController.putAcademicTerm);

//Route for deleting academic term
router.delete('/terms/:code', AcademicTermController.deleteAcademicTerm);



module.exports = router;