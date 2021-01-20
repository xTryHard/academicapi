'use strict';

const dbConn = require('./../../config/db.config')

class SubjectModel {

  constructor() {

  }

  static insertSubject(subject) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('subjectCode', subject.subjectCode)
        .input('name', subject.name)
        .input('credits', subject.credits)
        .input('practicalHours', subject.practicalHours)
        .input('theoreticalHours', subject.theoreticalHours)
        .query('INSERT INTO Subject values(@subjectCode, @name, @credits, @practicalHours, @theoreticalHours)')
    }).then((result) => {
      //console.log(result)
      dbConn.close();
      return result;
    }).catch((err) => {
      //console.log(err);
      dbConn.close();
      return err;
    });
    return result;
  }

  static selectAllSubjects() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('SELECT * FROM Subject');
    }).then((result) => {
      console.log(result);
      dbConn.close();
      return result
    }).catch((err) => {
      console.log(err);
      dbConn.close();
      return err;
    });
    return result;
  }

  static selectSubjectByCode(subjectCode) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().input('subjectCode', subjectCode).query('SELECT * FROM Subject WHERE SubjectCode = @subjectCode');
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

  static deleteAllSubjects() {

    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('DELETE FROM Subject');
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

  static deleteSubjectByCode(subjectCode) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().input('subjectCode', subjectCode)
        .query('DELETE FROM Subject WHERE SubjectCode = @subjectCode');
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

  static updateSubject(subjectCode, subject) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('subjectCode', subjectCode)
        .input('name', subject.name)
        .input('credits', subject.credits)
        .input('practicalHours', subject.practicalHours)
        .input('theoreticalHours', subject.theoreticalHours)
        .query('UPDATE Subject SET Name = @name, Credits = @credits, PracticalHours = @practicalHours, TheoreticalHours = @theoreticalHours WHERE SubjectCode = @subjectCode');
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
}

module.exports = SubjectModel;