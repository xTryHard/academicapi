'use strict';

const dbConn = require('./../../config/db.config');

class GroupModel {

  constructor() {

  }

  static insertGroup(group) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', group.academicTermCode)
        .input('subjectCode', group.subjectCode)
        .input('groupNumber', group.groupNumber)
        .input('groupSpace', group.groupSpace)
        .query('INSERT INTO [Group](AcademicTermCode, SubjectCode, GroupNumber, GroupSpace) VALUES(@academicTermCode, @subjectCode, @groupNumber, @groupSpace)');
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

  static selectAllGroups() {

    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('SELECT * FROM [Group]');
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

  static selectGroupByPK(academicTermCode, subjectCode, groupNumber) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .query('SELECT * FROM [Group] WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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

  static deleteAllGroups() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('DELETE FROM [Group]');
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

  static deleteGroupByPK(academicTermCode, subjectCode, groupNumber) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .query('DELETE FROM [Group] WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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

  static updateGroup(academicTermCode, subjectCode, groupNumber, group) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('subjectCode', subjectCode)
        .input('groupNumber', groupNumber)
        .input('groupSpace', group.groupSpace)
        .query('UPDATE [Group] SET GroupSpace = @groupSpace WHERE AcademicTermCode = @academicTermCode AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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

module.exports = GroupModel;