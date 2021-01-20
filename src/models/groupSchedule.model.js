'use strict';

const dbConn = require('./../../config/db.config');

class GroupScheduleModel {
  static tableName = 'GroupSchedule';
  constructor() {

  }


  static getSingleGroupSchedule(academicTermCode, subjectCode, groupNumber) {

    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .query('SELECT * FROM GroupSchedule WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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

  static getSingleGroupScheduleByDay(academicTermCode, subjectCode, groupNumber, day) {
    console.log(day);
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .input('day', day)
        .query('SELECT * FROM GroupSchedule WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber AND [Day] = @day');
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConn.close();
      return err;
    });
    return result
  }

  static insertGroupSchedule(groupSchedule) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', groupSchedule.academicTermCode)
        .input('subjectCode', groupSchedule.subjectCode)
        .input('groupNumber', groupSchedule.groupNumber)
        .input('day', groupSchedule.day)
        .input('startTime', groupSchedule.startTime)
        .input('endTime', groupSchedule.endTime)
        .query('INSERT INTO GroupSchedule VALUES (@academicTermCode, @subjectCode, @groupNumber, @day, @startTime, @endTime)');
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConn.close();
      return err;
    });
    return result;
  }

  static deleteGroupScheduleByPK(academicTermCode, subjectCode, groupNumber, day) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .input('day', day)
        .query('DELETE FROM GroupSchedule WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber AND Day = @day')
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConnc.close();
      return err;
    });
    return result;
  }

  static updateGroupSchedule(academicTermCode, subjectCode, groupNumber, day, groupSchedule) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .input('day', day)
        .input('startTime', groupSchedule.startTime)
        .input('endTime', groupSchedule.endTime)
        .query('UPDATE GroupSchedule SET StartTime = @startTime, EndTime = @endTime WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber AND Day = @day');
    }).then((result) => {
      console.log((result));
      dbConn.close();
      return result;
    }).catch((err) => {
      console.log(err);
      dbConn.close();
      return err;
    });
    return result;
  }
}

module.exports = GroupScheduleModel;