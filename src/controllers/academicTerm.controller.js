'use strict'

const AcademicTermModel = require('./../models/academicTerm.model');

class AcademicTermController {
  constructor() {

  }

  //Get all academic terms
  static getAllAcademicTerms(req, res) {
    AcademicTermModel.selectAllAcademicTerms().then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get academic term by PK
  static getAcademicTermByPK(req, res) {
    AcademicTermModel.selectAcademicTermByCode(req.params.code).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Post academic term
  static postAcademicTerm(req, res) {
    AcademicTermModel.insertAcademicTerm(req.body).then((response) => {
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

  //Put academic term
  static putAcademicTerm(req, res) {
    AcademicTermModel.updateAcademicTerm(req.params.code, req.body).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      })
    }).catch((err) => {
      console.log(err);
      res.json({
        error: 'Something went wrong'
      });
    });
  }

  //Delete academic
  static deleteAcademicTerm(req, res) {
    AcademicTermModel.deleteAcademicTermByCode(req.params.code).then((response) => {
      console.log(response.number);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      });
    }).catch((err) => {
      console.log('Error: ' + err);
      res.json({
        error: 'Something went wrong!'
      });
    });
  }

}

module.exports = AcademicTermController;