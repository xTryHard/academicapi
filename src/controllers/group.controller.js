'use strict';

const GroupModel = require('./../models/group.model');

class GroupController {
  constructor() {

  }

  //Get all groups from db
  static getAllGroups(req, res) {
    GroupModel.selectAllGroups().then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Get group by its PK from db
  static getGroupByPK(req, res) {
    GroupModel.selectGroupByPK(req.params.termCode, req.params.subjectCode, req.params.group).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

  //Post group to db
  static setGroup(req, res) {
    GroupModel.insertGroup(req.body).then((response) => {
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

  //Update group from db
  static updateGroup(req, res) {
    GroupModel.updateGroup(req.params.termCode, req.params.subjectCode, req.params.group, req.body).then((response) => {
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

  //Delete group from db
  static deleteGroup(req, res) {
    GroupModel.deleteGroupByPK(req.params.termCode, req.params.subjectCode, req.params.group).then((response) => {
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

module.exports = GroupController;