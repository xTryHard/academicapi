'use strict';

const mssql = require('mssql');

// class Connection {

// }

const config = {
  user: 'sa',
  password: 'academic123',
  server: '10.100.100.8',
  database: 'academic_project',
};


// const dbConn = mssql.connect(config);

// const dbConn = () => {
//   let pool = null;

//   async function getConnection() {
//     if (pool) {
//       return pool;
//     }

//     try {

//       pool = await mssql.connect(config);

//       pool.on("error", async (error) => {
//         console.log(err);
//         await closeConnection();
//       });

//       return pool;

//     } catch (err) {

//       console.log(err);
//       pool = null;

//     }
//   }

//   async function closeConnection() {

//     try {
//       await pool.close();
//       pool = null;
//     } catch (err) {
//       pool = null;
//       console.log(err);
//     }
//   }
// }
const pool = new mssql.ConnectionPool(config);

module.exports = pool;