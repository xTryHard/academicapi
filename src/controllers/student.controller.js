'use strict'

const StudentModel = require('./../models/student.model');

class StudentController {

  constructor() {

  }

  //Get all students from db
  static getAll(req, res) {
    StudentModel.selectAllStudents().then((students) => {
      console.log(students);
      if (students.number)
        res.json({
          errno: students.number
        })
      else
        res.json(students.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Insert student to db
  static setStudent(req, res) {
    StudentModel.insertStudent(req.body).then((response) => {
      console.log(response);

      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      })

    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get student by its ID from db
  static getStudentById(req, res) {
    StudentModel.selectStudentById(req.params.id).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Delete student from db
  static deleteStudentById(req, res) {
    StudentModel.deleteStudentById(req.params.id).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      })
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Update student from db
  static updateStudent(req, res) {
    StudentModel.updateStudent(req.params.id, req.body).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      })
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }


}

module.exports = StudentController;