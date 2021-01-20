'use strict';

const SubjectModel = require('./../models/subject.model');

class SubjectController {
  constructor() {

  }

  //POST subject to db
  static setSubject(req, res) {
    SubjectModel.insertSubject(req.body).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      });
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get all subjects from db
  static getAllSubjects(req, res) {
    SubjectModel.selectAllSubjects().then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get subject by code
  static getSubjectByCode(req, res) {
    SubjectModel.selectSubjectByCode(req.params.code).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Delete subject by code
  static deleteSubjectByCode(req, res) {
    SubjectModel.deleteSubjectByCode(req.params.code).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      });
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Update subject by id
  static updateSubject(req, res) {
    SubjectModel.updateSubject(req.params.code, req.body).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      });
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

}

module.exports = SubjectController;