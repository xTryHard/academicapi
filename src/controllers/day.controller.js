'use strict';

const DayModel = require('./../models/day.model');

class DayController {
  constructor() {

  }

  //Get all days from db
  static getAllDays(req, res) {
    DayModel.selectAllDays().then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {

    });
  }

  //Get day by PK from db
  static getDayByPK(req, res) {
    DayModel.selectDayByPK(req.params.day).then((response) => {
      console.log(response);
      res.json(response.recordset);
    }).catch((err) => {
      console.log(err);
      res.json(err);
    });
  }

}

module.exports = DayController;