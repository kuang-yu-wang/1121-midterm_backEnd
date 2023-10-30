const { Pool } = require('pg');

let pool;

pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '0000',
  database: 'midterm',
});

module.exports = pool;