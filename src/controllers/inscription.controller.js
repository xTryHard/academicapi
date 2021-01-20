'use strict';

const InscriptionModel = require('./../models/inscription.model');

class InscriptionController {

  constructor() {

  }


  //Get all inscriptions

  static getAllInscriptions(req, res) {
    InscriptionModel.selectAllInscriptions().then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }
  //POST Inscription of a subject to db
  static setInscription(req, res) {
    InscriptionModel.insertInscription(req.body).then((response) => {
      console.log(response);
      res.json({
        errno: response.number,
        rowsAffected: response.rowsAffected
      });
    }).catch((err) => {
      console.log(err);
      res.json(response);
    });
  }

  //GET inscription of a subject from db
  static getInscriptionByPK(req, res) {
    InscriptionModel.selectInscriptionByPK(req.params).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //GET inscription of all subjects of student
  static getStudentInscriptions(req, res) {
    InscriptionModel.selectStudentInscriptionsQuery(req.params.academicTermCode, req.params.id).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Stored procedure
  static getStudentInscriptionsStored(req, res) {
    InscriptionModel.selectStudentInscriptionsStored(req.params.academicTermCode, req.params.id).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Delete inscription of a subject

  static deleteInscription(req, res) {
    InscriptionModel.deleteInscriptionByPk(req.params).then((response) => {
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

module.exports = InscriptionController;