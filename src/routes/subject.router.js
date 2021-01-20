'use strict';

const express = require('express');
const router = express.Router();
const SubjectController = require('./../controllers/subject.controller');


//Route to POST a subject
router.post('/subjects', SubjectController.setSubject);

//Route to GET all subjects
router.get('/subjects', SubjectController.getAllSubjects);

//Route to GET subject by code
router.get('/subjects/:code', SubjectController.getSubjectByCode);

//Route to Delete subject by code
router.delete('/subjects/:code', SubjectController.deleteSubjectByCode);

//Route to PUT(update) subject by code
router.put('/subjects/:code', SubjectController.updateSubject);

module.exports = router;