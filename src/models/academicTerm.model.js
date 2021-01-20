'use strict';

const dbConn = require('./../../config/db.config');

class AcademicTermModel {
  constructor() {

  }

  static insertAcademicTerm(academicTerm) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTerm.academicTermCode)
        .input('description', academicTerm.description)
        .input('startDate', academicTerm.startDate)
        .input('endDate', academicTerm.endDate)
        .input('classStartDate', academicTerm.classStartDate)
        .input('classEndDate', academicTerm.classEndDate)
        .input('paymentLimitDate', academicTerm.paymentLimitDate)
        .input('enrollmentLimitDate', academicTerm.enrollmentLimitDate)
        .input('withdrawalLimitDate', academicTerm.withdrawalLimitDate)
        .input('postLimitDate', academicTerm.postLimitDate)
        .query('INSERT INTO AcademicTerm VALUES(@academicTermCode, @description, @startDate, @endDate, @classStartDate, @classEndDate, @paymentLimitDate, @enrollmentLimitDate, @withdrawalLimitDate, @postLimitDate)');
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

  static selectAllAcademicTerms() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('SELECT * FROM AcademicTerm');
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

  static selectAcademicTermByCode(academicTermCode) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().input('academicTermCode', academicTermCode).query('SELECT * FROM AcademicTerm WHERE AcademicTermCode = @academicTermCode');
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

  static deleteAllAcademicTerms() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('DELETE FROM AcademicTerm');
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

  static deleteAcademicTermByCode(academicTermCode) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().input('academicTermCode', academicTermCode).query('DELETE FROM AcademicTerm WHERE AcademicTermCode = @academicTermCode');
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

  static updateAcademicTerm(academicTermCode, academicTerm) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('academicTermCode', academicTermCode)
        .input('description', academicTerm.description)
        .input('startDate', academicTerm.startDate)
        .input('endDate', academicTerm.endDate)
        .input('classStartDate', academicTerm.classStartDate)
        .input('classEndDate', academicTerm.classEndDate)
        .input('paymentLimitDate', academicTerm.paymentLimitDate)
        .input('enrollmentLimitDate', academicTerm.enrollmentLimitDate)
        .input('withdrawalLimitDate', academicTerm.withdrawalLimitDate)
        .input('postLimitDate', academicTerm.postLimitDate)
        .query('UPDATE AcademicTerm SET Description = @description, StartDate = @startDate, EndDate = @endDate, ClassStartDate = @classStartDate, ClassEndDate = @classEndDate, PaymentLimitDate = @paymentLimitDate, EnrollmentLimitDate = @enrollmentLimitDate, WithdrawalLimitDate = @withdrawalLimitDate, PostLimitDate = @postLimitDate WHERE AcademicTermCode = @academicTermCode');
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

module.exports = AcademicTermModel;