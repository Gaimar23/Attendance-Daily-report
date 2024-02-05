require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const check = async () => {
  const checkEmployee = await pool.query(`
  SELECT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname = 'employee' AND relkind = 'r') AS table_existence
`);
  // console.log("message:", checkok.rows[0].table_existence);

  if (!checkEmployee.rows[0].table_existence) {
    pool.query(
      "CREATE TABLE employee ( id SERIAL PRIMARY KEY, last_name VARCHAR(60), first_name VARCHAR(60),email VARCHAR(80),privilege VARCHAR(15),pass VARCHAR(50), hiring_date DATE NOT NULL DEFAULT CURRENT_DATE,active BOOLEAN NOT NULL DEFAULT TRUE)"
    );
  }

  //
  const checkAttendance = await pool.query(`
  SELECT EXISTS (SELECT 1 FROM pg_catalog.pg_class WHERE relname = 'attendance' AND relkind = 'r') AS table_existence
  `);

  if (!checkAttendance.rows[0].table_existence) {
    pool.query(
      "CREATE TABLE attendance (id SERIAL PRIMARY KEY, morning TIME, afternoon TIME, workday DATE NOT NULL, report TEXT, employee_id INTEGER REFERENCES employee(id))"
    );
  }
};

check();

// if (
//   !pool.query(
//     'SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = "employee" ) AS table_existence'
//   )
// ) {
//   pool.query(
//     "CREATE TABLE employee ( id SERIAL PRIMARY KEY, last_name VARCHAR(60), first_name VARCHAR(60),email VARCHAR(80),privilege VARCHAR(15),pass VARCHAR(50), hiring_date DATE NOT NULL DEFAULT CURRENT_DATE,active BOOLEAN NOT NULL DEFAULT TRUE)"
//   );
// }

// if (
//   !pool.query(
//     'SELECT EXISTS (SELECT 1 FROM pg_tables WHERE tablename = "attendance" ) AS table_existence'
//   )
// ) {
//   pool.query(
//     "CREATE TABLE attendance (id SERIAL PRIMARY KEY, morning TIME NOT NULL, afternoon TIME NOT NULL, workday DATE NOT NULL, employee_id INTEGER REFERENCES employee(id)"
//   );
// }

module.exports = pool;
