'use strict';

const dbConn = require('./../../config/db.config');

class StudentModel {

  constructor() {

  }

  static insertStudent(student) {
    const result = dbConn.connect()
      .then((cnx) => {
        return cnx.request()
          .input('id', student.id)
          .input('firstName', student.firstName)
          .input('middleName', student.middleName)
          .input('firstLastName', student.firstLastName)
          .input('secondLastName', student.secondLastName)
          .input('career', student.career)
          .input('paymentCategory', student.paymentCategory)
          .input('nationality', student.nationality)
          .input('address', student.address)
          .query('INSERT INTO Student values(@id, @firstName, @middleName, @firstLastName, @secondLastName, @career, @paymentCategory, @nationality, @address)');
      }).then((result) => {
        console.log(result);
        dbConn.close();
        return result;
      }).catch((err) => {
        console.log('Error details: ' + err.number);
        dbConn.close();
        return err;
      });
    return result;
  }

  static selectAllStudents() {
    const result = dbConn.connect()
      .then((cnx) => {
        return cnx.request().query('SELECT * FROM Student');
      }).then((result) => {
        //console.log(result);
        dbConn.close();
        return result;
      }).catch((err) => {
        console.log(err);
        dbConn.close();
      });
    return result;
  }

  static selectStudentById(id) {
    const result = dbConn.connect()
      .then((cnx) => {
        return cnx.request()
          .input('id', id)
          .query('SELECT * FROM Student WHERE ID = @id')
      }).then((result) => {
        console.log(result);
        dbConn.close();
        return result
      }).catch((err) => {
        console.log(err);
        dbConn.close();
      });
    return result;
  }

  static deleteAllStudents() {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().query('DELETE FROM Student');
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

  static deleteStudentById(id) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request().input('id', id)
        .query('DELETE FROM Student WHERE ID = @id');
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

  static updateStudent(id, student) {
    const result = dbConn.connect().then((cnx) => {
      return cnx.request()
        .input('id', id)
        .input('firstName', student.firstName)
        .input('middleName', student.middleName)
        .input('firstLastName', student.firstLastName)
        .input('secondLastName', student.secondLastName)
        .input('career', student.career)
        .input('paymentCategory', student.paymentCategory)
        .input('nationality', student.nationality)
        .input('address', student.address)
        .query('UPDATE Student\
        SET FirstName = @firstName, MiddleName = @middleName, FirstLastName = @firstLastName, SecondLastName = @secondLastName, Career = @career, PaymentCategory = @paymentCategory, Nationality = @nationality, Address = @address WHERE ID = @id').then((result) => {
          console.log(result);
          dbConn.close();
          return result
        }).catch((err) => {
          console.log(err.code);
          dbConn.close();
        });
    });
    return result;
  }


}

module.exports = StudentModel