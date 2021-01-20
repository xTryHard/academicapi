'use strict';
const dbConn = require('./../../config/db.config');

class DayModel {
  constructor() {

  }

  static selectAllDays() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('SELECT * FROM Weekday');
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConn.close();
    });
    return result;
  }

  static selectDayByPK(day) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('day', day)
        .query('SELECT * FROM Weekday WHERE Day = @day');
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConn.close();
    });
    return result;
  }
}

module.exports = DayModel;