'use strict';

const dbConn = require('./../../config/db.config');

class InscriptionModel {

  constructor() {

  }

  static insertInscription(inscription) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', inscription.academicTermCode)
        .input('id', inscription.id)
        .input('subjectCode', inscription.subjectCode)
        .input('groupNumber', inscription.groupNumber)
        .query('INSERT INTO Inscription VALUES (@academicTermCode, @id, @subjectCode, @groupNumber)');
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

  static selectAllInscriptions() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('SELECT * FROM Inscription');
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

  static selectInscriptionByPK(inscription) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', inscription.academicTermCode)
        .input('id', inscription.id)
        .input('subjectCode', inscription.subjectCode)
        .input('groupNumber', inscription.groupNumber)
        .query('SELECT * FROM Inscription WHERE AcademicTermCode = @academicTermCode AND ID = @id AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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


  static selectStudentInscriptionsQuery(academicTermCode, id) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('id', id)
        .query('SELECT * FROM Inscription WHERE AcademicTermCode = @academicTermCode AND ID = @id');
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


  static selectStudentInscriptionsStored(academicTermCode, id) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('termCode', academicTermCode)
        .input('id', id)
        .execute('EnrolledGroups');
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

  static deleteAllInscriptions() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('DELETE FROM Inscription');
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

  static deleteInscriptionByPk(inscription) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', inscription.academicTermCode)
        .input('id', inscription.id)
        .input('subjectCode', inscription.subjectCode)
        .input('groupNumber', inscription.groupNumber)
        .query('DELETE FROM Inscription WHERE AcademicTermCode = @academicTermCode AND ID = @id AND SubjectCode = @subjectCode AND GroupNumber = @groupNumber');
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

module.exports = InscriptionModel;