'use strict';

const GroupScheduleModel = require('./../models/groupSchedule.model');

class GroupScheduleController {
  constructor() {

  }

  //Get all group schedule for a group
  static getSingleGroupSchedule(req, res) {
    GroupScheduleModel.getSingleGroupSchedule(req.params.termCode, req.params.subjectCode, req.params.group).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get group schedule for a group in specific day
  static getSingleGroupScheduleDay(req, res) {
    console.log('Parámetros: ' + req.params);
    GroupScheduleModel.getSingleGroupScheduleByDay(req.params.termCode, req.params.subjectCode, req.params.group, req.params.day).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Post groupSchedule to db
  static setGroupSchedule(req, res) {
    GroupScheduleModel.insertGroupSchedule(req.body).then((response) => {
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

  //Delete groupSchedule from db
  static deleteGroupSchedule(req, res) {
    GroupScheduleModel.deleteGroupScheduleByPK(req.params.termCode, req.params.subjectCode, req.params.group, req.params.day).then((response) => {
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

  //Put groupSchedule from db
  static updateGroupSchedule(req, res) {
    GroupScheduleModel.updateGroupSchedule(req.params.termCode, req.params.subjectCode, req.params.group, req.params.day, req.body).then((response) => {
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

module.exports = GroupScheduleController;