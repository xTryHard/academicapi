'use strict';

const mssql = require('mssql');

// class Connection {

// }

const config = {
  user: 'xxxxx',
  password: 'xxxxx',
  server: 'xxxxx',
  database: 'xxxxx',
};

const pool = new mssql.ConnectionPool(config);

module.exports = pool;