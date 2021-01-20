'use strict';

const express = require('express');
const router = express.Router();
const StudentController = require('./../controllers/student.controller');

//Route to Get all students
router.get('/students', StudentController.getAll);

//Route to Insert student
router.post('/students', StudentController.setStudent);

//Route to Get student by id
router.get('/students/:id', StudentController.getStudentById);

//Route to Detele student by id
router.delete('/students/:id', StudentController.deleteStudentById);

//Route to Update student
router.put('/students/:id', StudentController.updateStudent);

module.exports = router;